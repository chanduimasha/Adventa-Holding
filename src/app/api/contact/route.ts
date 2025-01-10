import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  const formData = await req.json();

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: formData.email, // sender address
    to: 'lamborghinilovers001@gmail.com', // Your email address
    subject: `${formData.jobTitle} - ${formData.firstName} ${formData.lastName}`, // Subject line
    html: `
      <h1>New Contact Form Submission</h1>
      <p><strong>First Name:</strong> ${formData.firstName}</p>
      <p><strong>Last Name:</strong> ${formData.lastName}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Company:</strong> ${formData.company}</p>
      <p><strong>Job Title:</strong> ${formData.jobTitle}</p>
      <p><strong>Phone:</strong> ${formData.phone || 'Not provided'}</p>
      <p><strong>Message:</strong> ${formData.message}</p>
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    
    // Log the response info (optional, for debugging purposes)
    console.log('Message sent: %s', info.messageId);

    // Optionally, you can also include the `info.response` which contains more details about the email sending status
    console.log('Email response: ', info.response);

    return new Response(JSON.stringify({ message: 'Message sent successfully!' }), {
      status: 200,
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ message: 'Error sending message. Please try again later.' }), {
      status: 500,
    });
  }
}
