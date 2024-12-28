"use client";

import ContactForm from "@/components/contact-form";
import NavBar from "@/components/nav-bar";
import Footer from "@/components/footer-section";

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
      <Footer />
    </div>
  );
};

export default Contact;
