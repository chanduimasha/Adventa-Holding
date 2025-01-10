// import React, { useState } from "react";
// import emailjs from "emailjs-com";

// const ContactForm: React.FC = () => {
//   const [formData, setFormData] = useState<Record<string, string>>({
//     firstName: "",
//     lastName: "",
//     email: "",
//     company: "",
//     jobTitle: "",
//     phone: "",
//     message: "",
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [status, setStatus] = useState<string>("");

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     // Send email with EmailJS
//     emailjs
//       .send(
//         "service_42phq0o", // Replace with your EmailJS Service ID
//         "template_6noe88a", // Replace with your EmailJS Template ID
//         {
//           firstName: formData.firstName,
//           lastName: formData.lastName,
//           email: formData.email,
//           company: formData.company,
//           jobTitle: formData.jobTitle,
//           phone: formData.phone,
//           message: formData.message,
//         },
//         "zMp4WGpKjlzq5LbYF" // Replace with your EmailJS Public Key
//       )
//       .then(
//         () => {
//           setStatus("Message sent successfully!");
//           setIsSubmitting(false);
//           setFormData({
//             firstName: "",
//             lastName: "",
//             email: "",
//             company: "",
//             jobTitle: "",
//             phone: "",
//             message: "",
//           });
//         },
//         (error) => {
//           setStatus("Error sending message. Please try again later.");
//           console.error("EmailJS Error:", error);
//           setIsSubmitting(false);
//         }
//       );
//   };

//   return (
//     <section className="bg-zinc-100 dark:bg-neutral-900 py-12">
//       <div className="max-w-6xl mx-auto px-4">
//         <h2 className="text-4xl xl:text-6xl text-center font-bold mb-12 xl:mb-20 bg-gradient-to-r from-[#2056aeff] to-[#50ade5ff] text-transparent bg-clip-text">Contact us</h2>
//         {/* <p className="text-sm xl:text-xl mb-8 text-center dark:text-white/80">(*) Asterisk denotes mandatory fields</p> */}
//         <form
//           onSubmit={handleSubmit}
//           className="dark:hover:shadow-blue-lg grid grid-cols-1 md:grid-cols-2 gap-6 p-8 border dark:border-gray-800 dark:bg-gray-950 shadow-xl dark:shadow-xl border-gray-300 bg-gray-200 rounded-3xl"
//         >
//           {/* Form Group */}
//           {[
//             { label: "First name*", id: "firstName", type: "text" },
//             { label: "Last name*", id: "lastName", type: "text" },
//             { label: "Work email*", id: "email", type: "email" },
//             { label: "Company*", id: "company", type: "text" },
//             { label: "Job title*", id: "jobTitle", type: "text" },
//             { label: "Phone number (optional)", id: "phone", type: "tel" },
//           ].map((input) => (
//             <div key={input.id} className="relative">
//               <input
//                 type={input.type}
//                 id={input.id}
//                 name={input.id}
//                 value={formData[input.id] || ""}
//                 className="peer w-full border-b bg-transparent border-gray-600 dark:border-gray-400 dark:text-white focus:outline-none focus:border-[#50ade5ff] py-2 text-sm placeholder-transparent"
//                 placeholder={input.label}
//                 onChange={handleChange}
//                 required={input.label.includes("*")}
//               />
//               <label
//                 htmlFor={input.id}
//                 className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-600 peer-placeholder-shown:text-sm peer-focus:-top-3.5 peer-focus:text-[#2056aeff] peer-focus:text-sm"
//               >
//                 {input.label}
//               </label>
//             </div>
//           ))}

//           {/* Text Area */}
//           <div className="md:col-span-2 relative">
//             <textarea
//               id="message"
//               name="message"
//               rows={4}
//               value={formData.message}
//               className="peer w-full border border-gray-600 dark:border-gray-400 dark:text-white bg-transparent focus:outline-none focus:border-[#50ade5ff] py-6 px-2 placeholder-transparent"
//               placeholder="How can we help you?"
//               onChange={handleChange}
//             />
//             <label
//               htmlFor="message"
//               className="absolute left-2 top-2 text-gray-600 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-600 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-[#2056aeff] peer-focus:text-sm"
//             >
//               How can we help you?
//             </label>
//           </div>

//           {/* Checkbox */}
//           <div className="md:col-span-1 space-y-4">
//             <label className="inline-flex items-center text-sm dark:text-gray-200">
//               <input
//                 type="checkbox"
//                 className="h-4 w-4 border border-gray-600 rounded mr-2"
//               />
//               I agree to the{" "}
//               <a href="#" className="text-[#2056aeff] underline ml-1">
//                 privacy notice
//               </a>
//             </label>
//             <label className="inline-flex items-center text-sm dark:text-gray-200">
//               <input
//                 type="checkbox"
//                 className="h-4 w-4 border border-gray-600 rounded mr-2"
//               />
//               Subscribe me to latest thought leadership, blogs, and updates.
//             </label>
//           </div>

//           {/* Submit Buttons */}
//           <div className="md:col-span-2 flex items-center space-x-4">
//             <button
//               type="submit"
//               className="bg-[#2056aeff] text-white py-1 px-6 rounded-full hover:bg-[#50ade5ff]"
//               disabled={isSubmitting}
//             >
//               {isSubmitting ? "Sending..." : "Send Message"}
//             </button>
//           </div>
//         </form>

//         {status && (
//           <p
//             className={`mt-4 text-sm ${
//               status.includes("Error") ? "text-red-500" : "text-green-500"
//             }`}
//           >
//             {status}
//           </p>
//         )}

//         <p className="mt-8 text-sm dark:text-gray-200">
//           You can also email us directly at{" "}
//           <a href="mailto:info@persistent.com" className="text-[#2056aeff]">
//             info@aventa.com
//           </a>
//         </p>
//       </div>
//     </section>
//   );
// };

// export default ContactForm;


// import React, { useState } from "react";
// import axios from "axios";

// const ContactForm: React.FC = () => {
//   const [formData, setFormData] = useState<Record<string, string>>({
//     firstName: "",
//     lastName: "",
//     email: "",
//     company: "",
//     jobTitle: "",
//     phone: "",
//     message: "",
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [status, setStatus] = useState<string>("");

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     try {
//       const emailSubject = `${formData.jobTitle} - ${formData.firstName} ${formData.lastName}`;
//       const response = await axios.post(
//         "https://api.brevo.com/v3/smtp/email",
//         {
//           sender: { name: "Contact Form", email: "chandu.rathnayake01@gmail.com" }, // Replace with your verified sender email
//           to: [{ email: "chandu.rathnayake01@gmail.com" }],
//           subject: emailSubject,
//           htmlContent: `
//             <h1>New Contact Form Submission</h1>
//             <p><strong>First Name:</strong> ${formData.firstName}</p>
//             <p><strong>Last Name:</strong> ${formData.lastName}</p>
//             <p><strong>Email:</strong> ${formData.email}</p>
//             <p><strong>Company:</strong> ${formData.company}</p>
//             <p><strong>Job Title:</strong> ${formData.jobTitle}</p>
//             <p><strong>Phone:</strong> ${formData.phone || "Not provided"}</p>
//             <p><strong>Message:</strong> ${formData.message}</p>
//           `,
//         },
//         {
//           headers: {
//             "api-key": "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", // Replace with your actual Brevo API key
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       if (response.status === 201) {
//         setStatus("Message sent successfully!");
//         setFormData({
//           firstName: "",
//           lastName: "",
//           email: "",
//           company: "",
//           jobTitle: "",
//           phone: "",
//           message: "",
//         });
//       } else {
//         setStatus("Failed to send message. Please try again later.");
//       }
//     } catch (error) {
//       console.error("Brevo API Error:", error);
//       setStatus("Error sending message. Please try again later.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <section className="bg-zinc-100 dark:bg-neutral-900 py-12">
//       <div className="max-w-6xl mx-auto px-4">
//         <h2 className="text-4xl xl:text-6xl text-center font-bold mb-12 xl:mb-20 bg-gradient-to-r from-[#2056aeff] to-[#50ade5ff] text-transparent bg-clip-text">Contact us</h2>
//         <form
//           onSubmit={handleSubmit}
//           className="dark:hover:shadow-blue-lg grid grid-cols-1 md:grid-cols-2 gap-6 p-8 border dark:border-gray-800 dark:bg-gray-950 shadow-xl dark:shadow-xl border-gray-300 bg-gray-200 rounded-3xl"
//         >
//           {[
//             { label: "First name*", id: "firstName", type: "text" },
//             { label: "Last name*", id: "lastName", type: "text" },
//             { label: "Work email*", id: "email", type: "email" },
//             { label: "Company*", id: "company", type: "text" },
//             { label: "Job title*", id: "jobTitle", type: "text" },
//             { label: "Phone number (optional)", id: "phone", type: "tel" },
//           ].map((input) => (
//             <div key={input.id} className="relative">
//               <input
//                 type={input.type}
//                 id={input.id}
//                 name={input.id}
//                 value={formData[input.id] || ""}
//                 className="peer w-full border-b bg-transparent border-gray-600 dark:border-gray-400 dark:text-white focus:outline-none focus:border-[#50ade5ff] py-2 text-sm placeholder-transparent"
//                 placeholder={input.label}
//                 onChange={handleChange}
//                 required={input.label.includes("*")}
//               />
//               <label
//                 htmlFor={input.id}
//                 className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-600 peer-placeholder-shown:text-sm peer-focus:-top-3.5 peer-focus:text-[#2056aeff] peer-focus:text-sm"
//               >
//                 {input.label}
//               </label>
//             </div>
//           ))}

//           <div className="md:col-span-2 relative">
//             <textarea
//               id="message"
//               name="message"
//               rows={4}
//               value={formData.message}
//               className="peer w-full border border-gray-600 dark:border-gray-400 dark:text-white bg-transparent focus:outline-none focus:border-[#50ade5ff] py-6 px-2 placeholder-transparent"
//               placeholder="How can we help you?"
//               onChange={handleChange}
//             />
//             <label
//               htmlFor="message"
//               className="absolute left-2 top-2 text-gray-600 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-600 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-[#2056aeff] peer-focus:text-sm"
//             >
//               How can we help you?
//             </label>
//           </div>

//           <div className="md:col-span-2 flex items-center space-x-4">
//             <button
//               type="submit"
//               className="bg-[#2056aeff] text-white py-1 px-6 rounded-full hover:bg-[#50ade5ff]"
//               disabled={isSubmitting}
//             >
//               {isSubmitting ? "Sending..." : "Send Message"}
//             </button>
//           </div>
//         </form>

//         {status && (
//           <p
//             className={`mt-4 text-sm ${
//               status.includes("Error") ? "text-red-500" : "text-green-500"
//             }`}
//           >
//             {status}
//           </p>
//         )}
//       </div>
//     </section>
//   );
// };

// export default ContactForm;


import React, { useState } from 'react';
import axios from 'axios';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<Record<string, string>>({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    jobTitle: '',
    phone: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<string>('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await axios.post('/api/contact', formData);
      if (response.status === 200) {
        setStatus('Message sent successfully!');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          company: '',
          jobTitle: '',
          phone: '',
          message: '',
        });
      } else {
        setStatus('Failed to send message. Please try again later.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus('Error sending message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-zinc-100 dark:bg-neutral-950 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl xl:text-6xl text-center font-bold mb-12 xl:mb-20 bg-gradient-to-r from-[#2056aeff] to-[#50ade5ff] text-transparent bg-clip-text">Contact us</h2>
        <form
          onSubmit={handleSubmit}
          className="dark:hover:shadow-blue-lg grid grid-cols-1 md:grid-cols-2 gap-6 p-8 border dark:border-gray-800 dark:bg-gray-950 shadow-xl dark:shadow-xl border-gray-300 bg-gray-200 rounded-3xl"
        >
          {[
            { label: "First name*", id: "firstName", type: "text" },
            { label: "Last name*", id: "lastName", type: "text" },
            { label: "Work email*", id: "email", type: "email" },
            { label: "Company*", id: "company", type: "text" },
            { label: "Job title*", id: "jobTitle", type: "text" },
            { label: "Phone number (optional)", id: "phone", type: "tel" },
          ].map((input) => (
            <div key={input.id} className="relative">
              <input
                type={input.type}
                id={input.id}
                name={input.id}
                value={formData[input.id] || ""}
                className="peer w-full border-b bg-transparent border-gray-600 dark:border-gray-400 dark:text-white focus:outline-none focus:border-[#50ade5ff] py-2 text-sm placeholder-transparent"
                placeholder={input.label}
                onChange={handleChange}
                required={input.label.includes("*")}
              />
              <label
                htmlFor={input.id}
                className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-600 peer-placeholder-shown:text-sm peer-focus:-top-3.5 peer-focus:text-[#2056aeff] peer-focus:text-sm"
              >
                {input.label}
              </label>
            </div>
          ))}

          <div className="md:col-span-2 relative">
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              className="peer w-full border border-gray-600 dark:border-gray-400 dark:text-white bg-transparent focus:outline-none focus:border-[#50ade5ff] py-6 px-2 placeholder-transparent"
              placeholder="How can we help you?"
              onChange={handleChange}
            />
            <label
              htmlFor="message"
              className="absolute left-2 top-2 text-gray-600 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-600 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-[#50ade5ff] peer-focus:text-sm"
            >
              How can we help you?
            </label>
          </div>

          <div className="md:col-span-2 flex items-center space-x-4">
            <button
              type="submit"
              className="bg-[#2056aeff] text-white py-1 px-6 rounded-full hover:bg-[#50ade5ff]"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>

        {status && (
          <p
            className={`mt-4 text-sm ${
              status.includes("Error") ? "text-red-500" : "text-green-500"
            }`}
          >
            {status}
          </p>
        )}
      </div>
    </section>
  );
};

export default ContactForm;
