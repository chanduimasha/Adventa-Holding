// 'use server';

// import { writeFile } from 'fs/promises';
// import path from 'path';
// import nodemailer from 'nodemailer';

// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: process.env.SMTP_USER,
//     pass: process.env.SMTP_PASS,
//   },
// });

// async function verifyRecaptcha(token: string): Promise<boolean> {
//   try {
//     const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/x-www-form-urlencoded',
//       },
//       body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
//     });

//     const data = await response.json();
//     return data.success;
//   } catch (error) {
//     console.error('reCAPTCHA verification failed:', error);
//     return false;
//   }
// }

// export async function POST(req: Request): Promise<Response> {
//   try {
//     const formData = await req.formData();

//     const recaptchaToken = formData.get('recaptchaToken') as string;
//     const isValid = await verifyRecaptcha(recaptchaToken);

//     if (!isValid) {
//       return new Response(JSON.stringify({ error: 'reCAPTCHA verification failed' }), {
//         status: 400,
//       });
//     }

//     const name = formData.get('name') as string;
//     const email = formData.get('email') as string;
//     const phone = formData.get('phone') as string;
//     const coverLetter = formData.get('coverLetter') as string;
//     const jobTitle = formData.get('jobTitle') as string;
//     const resumeFile = formData.get('resume') as File;

//     if (resumeFile) {
//       const bytes = await resumeFile.arrayBuffer();
//       const buffer = Buffer.from(bytes);

//       const filename = `${Date.now()}-${resumeFile.name}`;
//       const filepath = path.join(process.cwd(), 'public', 'uploads', filename);

//       await writeFile(filepath, buffer);

//       await transporter.sendMail({
//         from: process.env.SMTP_USER,
//         to: 'lamborghinilovers001@gmail.com',
//         subject: `New Job Application: ${jobTitle}`,
//         html: `
//           <h2>New Job Application Received</h2>
//           <p><strong>Position:</strong> ${jobTitle}</p>
//           <p><strong>Applicant Name:</strong> ${name}</p>
//           <p><strong>Email:</strong> ${email}</p>
//           <p><strong>Phone:</strong> ${phone}</p>
//           <h3>Cover Letter:</h3>
//           <p>${coverLetter}</p>
//         `,
//         attachments: [
//           {
//             filename: resumeFile.name,
//             path: filepath,
//           },
//         ],
//       });
//     }

//     return new Response(JSON.stringify({ success: true }), {
//       status: 200,
//     });
//   } catch (error) {
//     console.error('Error submitting application:', error);
//     return new Response(JSON.stringify({ error: 'Failed to submit application' }), {
//       status: 500,
//     });
//   }
// }


// 'use server';

// import { writeFile } from 'fs/promises';
// import path from 'path';
// import nodemailer from 'nodemailer';
// import { z } from 'zod';

// const careerFormSchema = z.object({
//   name: z.string().min(1, "Name is required"),
//   email: z.string().email("Invalid email address"),
//   phone: z.string().optional(),
//   coverLetter: z.string().optional(),
//   jobTitle: z.string().min(1, "Job title is required"),
//   recaptchaToken: z.string().min(1, "reCAPTCHA token is required"),
//   resume: z
//     .object({
//       name: z.string().min(1, "File name is required"),
//       type: z.string().min(1, "File type is required"),
//       size: z.number().max(2 * 1024 * 1024, "File size exceeds 2MB"), // Validate max file size
//     })
//     .optional(),
// });

// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: process.env.SMTP_USER,
//     pass: process.env.SMTP_PASS,
//   },
// });

// async function verifyRecaptcha(token: string): Promise<boolean> {
//   try {
//     const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/x-www-form-urlencoded',
//       },
//       body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
//     });

//     const data = await response.json();
//     return data.success;
//   } catch (error) {
//     console.error('reCAPTCHA verification failed:', error);
//     return false;
//   }
// }

// export async function POST(req: Request): Promise<Response> {
//   try {
//     const formData = await req.formData();

//     const parsedData = {
//       name: formData.get('name'),
//       email: formData.get('email'),
//       phone: formData.get('phone'),
//       coverLetter: formData.get('coverLetter'),
//       jobTitle: formData.get('jobTitle'),
//       recaptchaToken: formData.get('recaptchaToken'),
//       resume: formData.get('resume') ? {
//         name: (formData.get('resume') as File).name,
//         type: (formData.get('resume') as File).type,
//         size: (formData.get('resume') as File).size,
//       } : undefined,
//     };

//     // Validate form data
//     const validatedData = careerFormSchema.parse(parsedData);

//     // Verify reCAPTCHA
//     const isRecaptchaValid = await verifyRecaptcha(validatedData.recaptchaToken);
//     if (!isRecaptchaValid) {
//       return new Response(JSON.stringify({ error: 'reCAPTCHA verification failed' }), {
//         status: 400,
//       });
//     }

//     // Save resume file if provided
//     let resumePath = '';
//     if (formData.get('resume')) {
//       const resumeFile = formData.get('resume') as File;
//       const bytes = await resumeFile.arrayBuffer();
//       const buffer = Buffer.from(bytes);

//       const filename = `${Date.now()}-${resumeFile.name}`;
//       resumePath = path.join(process.cwd(), 'public', 'uploads', filename);

//       await writeFile(resumePath, buffer);
//     }

//     // Send email
//     await transporter.sendMail({
//       from: process.env.SMTP_USER,
//       to: 'lamborghinilovers001@gmail.com',
//       subject: `New Job Application: ${validatedData.jobTitle}`,
//       html: `
//         <h2>New Job Application Received</h2>
//         <p><strong>Position:</strong> ${validatedData.jobTitle}</p>
//         <p><strong>Applicant Name:</strong> ${validatedData.name}</p>
//         <p><strong>Email:</strong> ${validatedData.email}</p>
//         <p><strong>Phone:</strong> ${validatedData.phone || 'Not provided'}</p>
//         <h3>Cover Letter:</h3>
//         <p>${validatedData.coverLetter || 'No cover letter provided'}</p>
//       `,
//       attachments: resumePath
//         ? [
//             {
//               filename: validatedData.resume?.name,
//               path: resumePath,
//             },
//           ]
//         : [],
//     });

//     return new Response(JSON.stringify({ success: true }), { status: 200 });
//   } catch (error) {
//     console.error('Error submitting application:', error);

//     return new Response(
//       JSON.stringify({
//         success: false,
//         error: error instanceof z.ZodError ? error.errors : 'Failed to submit application',
//       }),
//       { status: 500 }
//     );
//   }
// }


'use server';

import { writeFile, mkdir } from 'fs/promises';
import path from 'path';
import nodemailer from 'nodemailer';
import { z } from 'zod';

// Validation schema for incoming data
const careerFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  coverLetter: z.string().optional(),
  jobTitle: z.string().min(1, "Job title is required"),
  recaptchaToken: z.string().min(1, "reCAPTCHA token is required"),
  resume: z
    .object({
      name: z.string().min(1, "File name is required"),
      type: z.string().min(1, "File type is required"),
      size: z.number().max(2 * 1024 * 1024, "File size exceeds 2MB"),
    })
    .optional(),
});

// Configure email transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Verify reCAPTCHA token
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

    // Extract form data
    const parsedData = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      coverLetter: formData.get('coverLetter'),
      jobTitle: formData.get('jobTitle'),
      recaptchaToken: formData.get('recaptchaToken'),
      resume: formData.get('resume') ? {
        name: (formData.get('resume') as File).name,
        type: (formData.get('resume') as File).type,
        size: (formData.get('resume') as File).size,
      } : undefined,
    };

    // Validate form data
    const validatedData = careerFormSchema.parse(parsedData);

    // Verify reCAPTCHA
    const isRecaptchaValid = await verifyRecaptcha(validatedData.recaptchaToken);
    if (!isRecaptchaValid) {
      return new Response(
        JSON.stringify({ error: 'reCAPTCHA verification failed' }),
        { status: 400 }
      );
    }

    // Prepare resume file if provided
    let resumePath = '';
    if (formData.get('resume')) {
      const resumeFile = formData.get('resume') as File;
      const bytes = await resumeFile.arrayBuffer();
      const buffer = Buffer.from(bytes);

      const uploadsDir = path.join(process.cwd(), 'public', 'uploads');
      await mkdir(uploadsDir, { recursive: true }); // Ensure uploads directory exists

      const filename = `${Date.now()}-${resumeFile.name}`;
      resumePath = path.join(uploadsDir, filename);

      await writeFile(resumePath, buffer);
    }

    // Send email with the application
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: 'lamborghinilovers001@gmail.com',
      subject: `New Job Application: ${validatedData.jobTitle}`,
      html: `
        <h2>New Job Application Received</h2>
        <p><strong>Position:</strong> ${validatedData.jobTitle}</p>
        <p><strong>Applicant Name:</strong> ${validatedData.name}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p><strong>Phone:</strong> ${validatedData.phone || 'Not provided'}</p>
        <h3>Cover Letter:</h3>
        <p>${validatedData.coverLetter || 'No cover letter provided'}</p>
      `,
      attachments: resumePath
        ? [
            {
              filename: validatedData.resume?.name,
              path: resumePath,
            },
          ]
        : [],
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error: unknown) {
    console.error('Error submitting application:', error);
  
    // Narrow the error type
    if (error instanceof Error) {
      return new Response(
        JSON.stringify({
          success: false,
          error: error.message || 'Failed to submit application',
        }),
        { status: 500 }
      );
    }
  
    // If error is not an instance of Error, return a generic error message
    return new Response(
      JSON.stringify({
        success: false,
        error: 'An unknown error occurred',
      }),
      { status: 500 }
    );
  }
}

