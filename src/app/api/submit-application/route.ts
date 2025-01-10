// app/api/submit-application/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { writeFile } from 'fs/promises';
import path from 'path';

// Configure nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, // Your Gmail address
    pass: process.env.EMAIL_PASS, // Your Gmail app password
  },
});

export async function POST(req: Request) {
  try {
    // Get form data
    const formData = await req.formData();
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const coverLetter = formData.get('coverLetter') as string;
    const jobTitle = formData.get('jobTitle') as string;
    const resumeFile = formData.get('resume') as File;

    // Save resume file
    if (resumeFile) {
      const bytes = await resumeFile.arrayBuffer();
      const buffer = Buffer.from(bytes);
      
      // Create unique filename
      const filename = `${Date.now()}-${resumeFile.name}`;
      const filepath = path.join(process.cwd(), 'public', 'uploads', filename);
      
      await writeFile(filepath, buffer);
      
      // Send email with attachment
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
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
            path: filepath
          }
        ]
      });
    }

    return NextResponse.json({ message: 'Application submitted successfully' });
  } catch (error) {
    console.error('Error submitting application:', error);
    return NextResponse.json(
      { error: 'Failed to submit application' },
      { status: 500 }
    );
  }
}