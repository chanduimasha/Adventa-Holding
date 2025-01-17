import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";


interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  jobTitle: string;
  phone?: string; // Optional field
  message: string;
  recaptchaToken: string; // Token for reCAPTCHA
}

// Function to handle form submission
const submitForm = async (data: FormData): Promise<{ success: boolean; error?: string }> => {
  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("API Error:", error);
    return { success: false, error: "Failed to submit the form." };
  }
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
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
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);

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

    if (!recaptchaToken) {
      setStatus("Please complete the reCAPTCHA verification");
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await submitForm({
        ...formData,
        recaptchaToken,
      });

      if (result.success) {
        setStatus("Message sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          company: "",
          jobTitle: "",
          phone: "",
          message: "",
        });
        setRecaptchaToken(null);
      } else {
        setStatus(result.error || "Error sending message. Please try again later.");
      }
    } catch (error) {
      setStatus("Error sending message. Please try again later.");
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-zinc-100 dark:bg-neutral-900 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl xl:text-6xl text-center font-bold mb-12 xl:mb-20 bg-gradient-to-r from-[#2056aeff] to-[#50ade5ff] text-transparent bg-clip-text">
          Contact us
        </h2>
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
                value={formData[input.id as keyof typeof formData]} // Ensures type safety
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
              className="absolute left-2 top-2 text-gray-600 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-600 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-[#2056aeff] peer-focus:text-sm"
            >
              How can we help you?
            </label>
          </div>

          <div className="md:col-span-1 space-y-4">
            <label className="inline-flex items-center text-sm dark:text-gray-200">
              <input
                type="checkbox"
                className="h-4 w-4 border border-gray-600 rounded mr-2"
                required
              />
              I agree to the{" "}
              <a href="#" className="text-[#2056aeff] underline ml-1">
                privacy notice
              </a>
            </label>
            <label className="inline-flex items-center text-sm dark:text-gray-200">
              <input
                type="checkbox"
                className="h-4 w-4 border border-gray-600 rounded mr-2"
              />
              Subscribe me to latest thought leadership, blogs, and updates.
            </label>
          </div>

          <div className="md:col-span-2">
            <ReCAPTCHA
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
              onChange={(token) => setRecaptchaToken(token)}
            />
          </div>

          <div className="md:col-span-2 flex items-center space-x-4">
            <button
              type="submit"
              className="bg-[#2056aeff] text-white py-1 px-6 rounded-full hover:bg-[#50ade5ff] disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isSubmitting || !recaptchaToken}
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

        <p className="mt-8 text-sm dark:text-gray-200">
          You can also email us directly at{" "}
          <a href="mailto:info@aventa.com" className="text-[#2056aeff]">
            info@aventa.com
          </a>
        </p>
      </div>
    </section>
  );
};

export default ContactForm;
