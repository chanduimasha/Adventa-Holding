import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Define allowed file types
const ALLOWED_FILE_TYPES = ['application/pdf'];
const MAX_FILE_SIZE = 3 * 1024 * 1024; // 3MB
const MAX_COVER_LETTER_LENGTH = 5000; // characters
const PHONE_REGEX = /^\+?[\d\s-()]{8,}$/; // Basic phone validation
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface ApplicationData {
  name: string;
  email: string;
  phone: string;
  coverLetter: string;
  jobTitle: string;
  recaptchaToken: string;
  resume: {
    filename: string;
    content: string;
    contentType: string;
  };
}

async function validateRecaptcha(token: string): Promise<boolean> {
  try {
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
    });
    
    const data = await response.json();
    return data.success;
  } catch (error) {
    console.error('reCAPTCHA validation error:', error);
    return false;
  }
}

function validateApplicationData(data: ApplicationData): string[] {
  const errors: string[] = [];

  // Basic field validation
  if (!data.name?.trim()) errors.push('Name is required');
  if (data.name && (data.name.length < 2 || data.name.length > 100)) {
    errors.push('Name must be between 2 and 100 characters');
  }

  if (!data.email?.trim()) errors.push('Email is required');
  if (data.email && !EMAIL_REGEX.test(data.email)) {
    errors.push('Invalid email format');
  }

  if (!data.phone?.trim()) errors.push('Phone is required');
  if (data.phone && !PHONE_REGEX.test(data.phone)) {
    errors.push('Invalid phone number format');
  }

  if (!data.coverLetter?.trim()) errors.push('Cover letter is required');
  if (data.coverLetter && data.coverLetter.length > MAX_COVER_LETTER_LENGTH) {
    errors.push(`Cover letter must not exceed ${MAX_COVER_LETTER_LENGTH} characters`);
  }

  if (!data.jobTitle?.trim()) errors.push('Job title is required');
  
  // Resume validation
  if (!data.resume) {
    errors.push('Resume is required');
  } else {
    if (!data.resume.filename?.trim()) errors.push('Resume filename is required');
    if (!data.resume.content?.trim()) errors.push('Resume content is required');
    if (!data.resume.contentType) errors.push('Resume content type is required');
    
    if (!ALLOWED_FILE_TYPES.includes(data.resume.contentType)) {
      errors.push('Only PDF files are allowed');
    }

    // Check file size (approximation from base64)
    const base64Content = data.resume.content.split('base64,')[1];
    if (base64Content) {
      const fileSize = Buffer.from(base64Content, 'base64').length;
      if (fileSize > MAX_FILE_SIZE) {
        errors.push('Resume file size must not exceed 3MB');
      }
    }
  }

  return errors;
}

export async function POST(request: Request) {
  try {
    // Parse and type-check request data
    const data: ApplicationData = await request.json();

    // Validate all required fields
    const validationErrors = validateApplicationData(data);
    if (validationErrors.length > 0) {
      return NextResponse.json(
        { error: 'Validation failed', details: validationErrors },
        { status: 400 }
      );
    }

    // Validate reCAPTCHA
    const recaptchaValid = await validateRecaptcha(data.recaptchaToken);
    if (!recaptchaValid) {
      return NextResponse.json(
        { error: 'Invalid reCAPTCHA' },
        { status: 400 }
      );
    }

    // Sanitize data before sending
    const sanitizedData = {
      ...data,
      name: data.name.trim(),
      email: data.email.trim().toLowerCase(),
      phone: data.phone.trim(),
      coverLetter: data.coverLetter.trim(),
      jobTitle: data.jobTitle.trim(),
    };

    // Create nodemailer transporter with error handling
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Verify SMTP connection
    await transporter.verify();

    // Convert base64 to buffer with error handling
    const base64Data = sanitizedData.resume.content.split('base64,')[1];
    if (!base64Data) {
      throw new Error('Invalid resume content format');
    }
    const resumeBuffer = Buffer.from(base64Data, 'base64');

    // Send email with attachment
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.SMTP_TO || process.env.SMTP_FROM, // Fallback to FROM if TO not specified
      subject: `New Job Application: ${sanitizedData.jobTitle}`,
      html: `
        <h2>New Job Application</h2>
        <p><strong>Position:</strong> ${sanitizedData.jobTitle}</p>
        <p><strong>Name:</strong> ${sanitizedData.name}</p>
        <p><strong>Email:</strong> ${sanitizedData.email}</p>
        <p><strong>Phone:</strong> ${sanitizedData.phone}</p>
        <h3>Cover Letter:</h3>
        <p>${sanitizedData.coverLetter}</p>
      `,
      attachments: [
        {
          filename: sanitizedData.resume.filename,
          content: resumeBuffer,
          contentType: sanitizedData.resume.contentType
        }
      ]
    });

    return NextResponse.json({ 
      success: true,
      message: 'Application submitted successfully'
    }, { status: 200 });

  } catch (error) {
    console.error('Error in submit-application:', error);
    
    // Return appropriate error response based on error type
    if (error instanceof Error) {
      return NextResponse.json(
        { error: 'Application submission failed', details: error.message },
        { status: 500 }
      );
    }
    
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}


// 'use server'

// import nodemailer from 'nodemailer';
// import { z } from 'zod';
// import { NextResponse } from 'next/server';

// // Validation schemas
// const emailSchema = z.string().email();
// const phoneSchema = z.string().regex(/^\+?[\d\s-()]{8,}$/);

// // Constants
// const ALLOWED_FILE_TYPES = ['application/pdf'];
// const MAX_FILE_SIZE = 3 * 1024 * 1024; // 3MB
// const MAX_COVER_LETTER_LENGTH = 5000;

// type ApplicationResult = {
//   success: boolean;
//   error?: string;
// };

// async function validateRecaptcha(token: string): Promise<boolean> {
//   try {
//     const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
//       body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
//     });
    
//     const data = await response.json();
//     return data.success;
//   } catch (error) {
//     console.error('reCAPTCHA validation error:', error);
//     return false;
//   }
// }

// export async function submitApplication(formData: FormData): Promise<ApplicationResult> {
//   try {
//     // Extract and validate data
//     const name = formData.get('name') as string;
//     const email = formData.get('email') as string;
//     const phone = formData.get('phone') as string;
//     const coverLetter = formData.get('coverLetter') as string;
//     const jobTitle = formData.get('jobTitle') as string;
//     const recaptchaToken = formData.get('recaptchaToken') as string;
//     const resumeContent = formData.get('resumeContent') as string;
//     const resumeFileName = formData.get('resumeFileName') as string;
//     const resumeContentType = formData.get('resumeContentType') as string;

//     // Validation
//     if (!name?.trim() || name.length < 2 || name.length > 100) {
//       return { success: false, error: 'Invalid name' };
//     }

//     try {
//       emailSchema.parse(email);
//     } catch {
//       return { success: false, error: 'Invalid email format' };
//     }

//     try {
//       phoneSchema.parse(phone);
//     } catch {
//       return { success: false, error: 'Invalid phone number format' };
//     }

//     if (!coverLetter?.trim() || coverLetter.length > MAX_COVER_LETTER_LENGTH) {
//       return { success: false, error: 'Invalid cover letter' };
//     }

//     if (!jobTitle?.trim()) {
//       return { success: false, error: 'Job title is required' };
//     }

//     if (!ALLOWED_FILE_TYPES.includes(resumeContentType)) {
//       return { success: false, error: 'Only PDF files are allowed' };
//     }

//     // Validate reCAPTCHA
//     const recaptchaValid = await validateRecaptcha(recaptchaToken);
//     if (!recaptchaValid) {
//       return { success: false, error: 'Invalid reCAPTCHA' };
//     }

//     // Create transporter
//     const transporter = nodemailer.createTransport({
//       host: process.env.SMTP_HOST,
//       port: parseInt(process.env.SMTP_PORT || '587'),
//       secure: process.env.SMTP_SECURE === 'true',
//       auth: {
//         user: process.env.SMTP_USER,
//         pass: process.env.SMTP_PASS,
//       },
//     });

//     // Verify SMTP connection
//     await transporter.verify();

//     // Process resume content
//     const base64Data = resumeContent.split('base64,')[1];
//     if (!base64Data) {
//       return { success: false, error: 'Invalid resume content format' };
//     }
//     const resumeBuffer = Buffer.from(base64Data, 'base64');

//     // Send email
//     await transporter.sendMail({
//       from: process.env.SMTP_FROM,
//       to: process.env.SMTP_FROM || process.env.SMTP_FROM,
//       subject: `New Job Application: ${jobTitle}`,
//       html: `
//         <h2>New Job Application</h2>
//         <p><strong>Position:</strong> ${jobTitle}</p>
//         <p><strong>Name:</strong> ${name}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Phone:</strong> ${phone}</p>
//         <h3>Cover Letter:</h3>
//         <p>${coverLetter}</p>
//       `,
//       attachments: [
//         {
//           filename: resumeFileName,
//           content: resumeBuffer,
//           contentType: resumeContentType
//         }
//       ]
//     });

//     return { success: true };
//   } catch (error) {
//     console.error('Error in submitApplication:', error);
//     return {
//       success: false,
//       error: error instanceof Error ? error.message : 'Application submission failed'
//     };
//   }
// }