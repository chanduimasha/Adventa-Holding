// pages/partner-ecosystem.js
import React from 'react';

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
    <div className="bg-indigo-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Partner Ecosystem</h2>
        <p className="mb-8">Bringing together the best of our partner network to create competitive advantage for your business.</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-lg hover:bg-orange-600 transform hover:-translate-y-2 hover:scale-105 transition-transform duration-300"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="w-24 h-24 mx-auto"
              />
            </div>
          ))}
        </div>
        <a
          href="/partners"
          className="mt-8 inline-block bg-orange-500 text-white font-semibold py-3 px-6 rounded-full hover:bg-orange-600 transition duration-300"
        >
          Explore Partner Ecosystem
        </a>
      </div>
    </div>
  );
};

export default PartnerEcosystem;