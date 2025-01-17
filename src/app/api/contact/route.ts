'use server'

import nodemailer from 'nodemailer';
import { z } from 'zod';

const formSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  company: z.string().min(1, "Company is required"),
  jobTitle: z.string().min(1, "Job title is required"),
  phone: z.string().optional(),
  message: z.string().optional(),
  recaptchaToken: z.string(),
});

const verifyRecaptcha = async (token: string) => {
  const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
  });

  const data = await response.json();
  return data.success;
};

// API Route Handler for POST Requests
export async function POST(req: Request) {
  try {
    const formData = await req.json();

    // Validate form data
    const validatedData = formSchema.parse(formData);

    // Verify reCAPTCHA
    const isRecaptchaValid = await verifyRecaptcha(validatedData.recaptchaToken);
    if (!isRecaptchaValid) {
      return new Response(JSON.stringify({ success: false, error: "reCAPTCHA verification failed" }), { status: 400 });
    }

    // Create Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Prepare email content
    const mailOptions = {
      from: process.env.SMTP_FROM,
      to: process.env.CONTACT_EMAIL,
      subject: 'New Contact Form Submission',
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${validatedData.firstName} ${validatedData.lastName}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p><strong>Company:</strong> ${validatedData.company}</p>
        <p><strong>Job Title:</strong> ${validatedData.jobTitle}</p>
        <p><strong>Phone:</strong> ${validatedData.phone || 'Not provided'}</p>
        <p><strong>Message:</strong></p>
        <p>${validatedData.message || 'No message provided'}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error('Form submission error:', error);

    return new Response(
      JSON.stringify({
        success: false,
        error: error instanceof z.ZodError ? 'Invalid form data' : 'Failed to send message',
      }),
      { status: 500 }
    );
  }
}
