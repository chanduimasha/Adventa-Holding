'use server';

import { writeFile } from 'fs/promises';
import path from 'path';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

async function verifyRecaptcha(token: string): Promise<boolean> {
  try {
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
    });

    const data = await response.json();
    return data.success;
  } catch (error) {
    console.error('reCAPTCHA verification failed:', error);
    return false;
  }
}

export async function POST(req: Request): Promise<Response> {
  try {
    const formData = await req.formData();

    const recaptchaToken = formData.get('recaptchaToken') as string;
    const isValid = await verifyRecaptcha(recaptchaToken);

    if (!isValid) {
      return new Response(JSON.stringify({ error: 'reCAPTCHA verification failed' }), {
        status: 400,
      });
    }

    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const coverLetter = formData.get('coverLetter') as string;
    const jobTitle = formData.get('jobTitle') as string;
    const resumeFile = formData.get('resume') as File;

    if (resumeFile) {
      const bytes = await resumeFile.arrayBuffer();
      const buffer = Buffer.from(bytes);

      const filename = `${Date.now()}-${resumeFile.name}`;
      const filepath = path.join(process.cwd(), 'public', 'uploads', filename);

      await writeFile(filepath, buffer);

      await transporter.sendMail({
        from: process.env.SMTP_USER,
        to: 'lamborghinilovers001@gmail.com',
        subject: `New Job Application: ${jobTitle}`,
        html: `
          <h2>New Job Application Received</h2>
          <p><strong>Position:</strong> ${jobTitle}</p>
          <p><strong>Applicant Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <h3>Cover Letter:</h3>
          <p>${coverLetter}</p>
        `,
        attachments: [
          {
            filename: resumeFile.name,
            path: filepath,
          },
        ],
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
    });
  } catch (error) {
    console.error('Error submitting application:', error);
    return new Response(JSON.stringify({ error: 'Failed to submit application' }), {
      status: 500,
    });
  }
}
