import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const {
      name,
      email,
      phone,
      coverLetter,
      jobTitle,
      resume,
      recaptchaToken
    } = data;

    // Validate required fields
    if (!name || !email || !phone || !coverLetter || !jobTitle || !resume || !recaptchaToken) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Convert base64 back to buffer
    const resumeBuffer = Buffer.from(
      resume.content.split('base64,')[1],
      'base64'
    );

    // Send email with attachment
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.SMTP_FROM,
      subject: `New Job Application: ${jobTitle}`,
      html: `
        <h2>New Job Application</h2>
        <p><strong>Position:</strong> ${jobTitle}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <h3>Cover Letter:</h3>
        <p>${coverLetter}</p>
      `,
      attachments: [
        {
          filename: resume.filename,
          content: resumeBuffer,
          contentType: resume.contentType
        }
      ]
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Error in submit-application:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
