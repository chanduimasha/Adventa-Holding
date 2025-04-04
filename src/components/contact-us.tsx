import React from "react";
import Social from "./social-media";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import emailjs from "emailjs-com";
import { useState } from "react";
import { FaEnvelope, FaMapMarkedAlt, FaPhoneAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+94) 711 122 833",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "avenda@example.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "262 Kaduwela Rd, Battaramulla 10120",
  },
];

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
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
        "service_42phq0o",
        "template_6noe88a",
        formData,
        "zMp4WGpKjlzq5LbYF"
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          setIsSubmitting(false);
        },
        () => {
          setStatus("Error sending message.");
          setIsSubmitting(false);
        }
      );
  };

  // Variants for form and contact info animations
  const formVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 10,
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const contactInfoVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 10,
        staggerChildren: 0.3,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10,
      },
    },
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      {...{
        className: "text-white py-6 bg-indigo-950",
      }}
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={formVariants}
            {...{
              className: "xl:w-[54%] order-2 xl:order-none",
            }}
          >
            <form
              onSubmit={handleSubmit}
              className="flex flex-col shadow-2xl gap-6 p-10 bg-gradient-to-b from-gray-900 to-blue-900 rounded-xl overflow-hidden transform transition-transform duration-300 hover:scale-105"
            >
              <motion.h3
                variants={itemVariants}
                {...{
                  className: "text-4xl text-orange-500",
                }}
              >
                Get in Touch
              </motion.h3>
              <motion.p
                variants={itemVariants}
                {...{
                  className: "text-white/60",
                }}
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Quaerat commodi quae accusamus dicta excepturi.
              </motion.p>
              <motion.div
                variants={itemVariants}
                {...{
                  className: "grid grid-cols-1 md:grid-cols-2 gap-6 text-black",
                }}
              >
                <Input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                />
                <Input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                />
                <Input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </motion.div>
              <motion.div variants={itemVariants}>
                <Textarea
                  className="h-[200px] text-black"
                  name="message"
                  placeholder="Type your message here."
                  value={formData.message}
                  onChange={handleChange}
                />
              </motion.div>
              <motion.div variants={itemVariants}>
                <Button
                  type="submit"
                  size="md"
                  className="max-w-40 hover:bg-orange-700"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </motion.div>
            </form>
            {status && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                {...{
                  className: "mt-4 text-white",
                }}
              >
                <p>{status}</p>
              </motion.div>
            )}
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={contactInfoVariants}
            {...{
              className:
                "flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0",
            }}
          >
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  {...{
                    className: "flex items-center gap-6",
                  }}
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    {...{
                      className:
                        "w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-orange-500 rounded-md flex items-center justify-center",
                    }}
                  >
                    <div className="text-[28px]">{item.icon}</div>
                  </motion.div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-white">{item.description}</h3>
                  </div>
                </motion.li>
              ))}

              <motion.div
                className="mt-12 mb-2 xl:mb-2"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 1,
                  delay: 1.2,
                  type: "spring",
                  stiffness: 120,
                  damping: 10,
                }}
              >
                <Social
                  containerStyles="flex gap-10 justify-center"
                  iconStyles="xl:w-[50px] xl:h-[50px] w-9 h-9 border border-orange-100 rounded-full flex justify-center items-center bg-orange-500 text-orange-100 text-base hover:bg-orange-800 hover:text-primary hover:transition-all duration-500"
                />
              </motion.div>
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactUs;
