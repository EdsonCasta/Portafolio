// src/components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-auto">
      <p>&copy; {new Date().getFullYear()} Mi Portafolio</p>
    </footer>
  );
};

export default Footer;
