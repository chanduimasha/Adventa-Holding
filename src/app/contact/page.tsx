"use client";

import FooterNew from "@/components/footer";
import ContactForm from "@/components/contact-form";
import NavBar from "@/components/nav-bar";

const Contact = () => {

  return (
    <div>
      {/* Navigation Bar */}
      <NavBar />

      {/* Contact us Form */}
      <div className="mt-16">
        <ContactForm />
      </div>

      {/* Footer Section */}
      <FooterNew />
    </div>
  );
};

export default Contact;
