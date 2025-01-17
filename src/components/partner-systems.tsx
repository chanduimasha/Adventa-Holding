import React from 'react';
import { motion } from 'framer-motion';

const PartnerEcosystem = () => {
  const partners = [
    { name: 'Appian', logo: '/assets/logos/1.png' },
    { name: 'AWS', logo: '/assets/logos/2.png' },
    { name: 'IBM', logo: '/assets/logos/3.png' },
    { name: 'Salesforce', logo: '/assets/logos/4.png' },
    { name: 'Google', logo: '/assets/logos/5.png' },
    { name: 'Red Hat', logo: '/assets/logos/6.png' },
    { name: 'Microsoft', logo: '/assets/logos/7.png' },
    { name: 'Mambu', logo: '/assets/logos/8.png' },
    { name: 'Outsystems', logo: '/assets/logos/9.png' },
    { name: 'Dassault Systems', logo: '/assets/logos/10.png' },
    { name: 'DataStax', logo: '/assets/logos/11.png' },
    { name: 'FinMkt', logo: '/assets/logos/12.png' },
  ];

  return (
    <div className="bg-blue-950 text-white py-12 px-6 relative">
      <motion.div
        className="max-w-5xl mx-auto text-left"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="xl:text-5xl text-3xl md:text-4xl font-bold mb-4">Our Partner Ecosystem</h2>
        <p className="mb-8">
          Bringing together the best of our partner network to create competitive advantage for your business.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-1">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              className="bg-white p-4 shadow-lg hover:bg-orange-500"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="w-24 h-16 mx-auto"
              />
            </motion.div>
          ))}
        </div>
        <motion.a
          href="/partners"
          className="mt-8 inline-block bg-transparent text-orange-500 font-semibold py-3 px-6 rounded-full hover:text-orange-800 transition duration-300"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Explore Partner Ecosystem →
        </motion.a>
      </motion.div>
    </div>
  );
};

export default PartnerEcosystem;