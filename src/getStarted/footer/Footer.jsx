import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white p-4 mt-auto">
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-sm">
          {currentYear} © 1stGPT
        </p>
        <div className="space-x-4 text-sm">
          <a href="/terms" className="hover:underline">
            Terms of Service
          </a>
          <a href="/privacy" className="hover:underline">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
