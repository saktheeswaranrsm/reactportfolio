import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto text-center">
        <p>
          © {new Date().getFullYear()} Saktheeswaran RSM. All Rights Reserved.
        </p>
        <div className="mt-4 flex justify-center space-x-4">
          <a 
            href="https://github.com/saktheeswaranrsm" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <i className="fab fa-github"></i>
          </a>
          <a 
            href="https://linkedin.com/in/saktheeswaran-rsm-9997a2319/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a 
            href="https://www.instagram.com/sathya.rsm" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;