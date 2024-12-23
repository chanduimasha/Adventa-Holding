import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<Record<string, string>>({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    jobTitle: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Send email with EmailJS
    emailjs
      .send(
        "service_42phq0o", // Replace with your EmailJS Service ID
        "template_6noe88a", // Replace with your EmailJS Template ID
        {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          company: formData.company,
          jobTitle: formData.jobTitle,
          phone: formData.phone,
          message: formData.message,
        },
        "zMp4WGpKjlzq5LbYF" // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          setIsSubmitting(false);
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            company: "",
            jobTitle: "",
            phone: "",
            message: "",
          });
        },
        (error) => {
          setStatus("Error sending message. Please try again later.");
          console.error("EmailJS Error:", error);
          setIsSubmitting(false);
        }
      );
  };

  return (
    <section className="bg-zinc-100 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-2">Contact us</h2>
        <p className="text-sm mb-8">(*) Asterisk denotes mandatory fields</p>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Form Group */}
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
                className="peer w-full border-b bg-transparent border-gray-600 focus:outline-none focus:border-[#50ade5ff] py-2 text-sm placeholder-transparent"
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

          {/* Text Area */}
          <div className="md:col-span-2 relative">
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              className="peer w-full border border-gray-600 bg-transparent focus:outline-none focus:border-[#50ade5ff] py-6 px-2 placeholder-transparent"
              placeholder="How can we help you?"
              onChange={handleChange}
            />
            <label
              htmlFor="message"
              className="absolute left-2 top-2 text-gray-600 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-600 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-[#2056aeff] peer-focus:text-sm"
            >
              How can we help you?
            </label>
          </div>

          {/* Checkbox */}
          <div className="md:col-span-1 space-y-4">
            <label className="inline-flex items-center text-sm">
              <input
                type="checkbox"
                className="h-4 w-4 border border-gray-600 rounded mr-2"
              />
              I agree to the{" "}
              <a href="#" className="text-[#2056aeff] underline ml-1">
                privacy notice
              </a>
            </label>
            <label className="inline-flex items-center text-sm">
              <input
                type="checkbox"
                className="h-4 w-4 border border-gray-600 rounded mr-2"
              />
              Subscribe me to latest thought leadership, blogs, and updates.
            </label>
          </div>

          {/* Submit Buttons */}
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

        <p className="mt-8 text-sm">
          You can also email us directly at{" "}
          <a href="mailto:info@persistent.com" className="text-[#2056aeff]">
            info@aventa.com
          </a>
        </p>
      </div>
    </section>
  );
};

export default ContactForm;
