import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} DevPortfolio. All rights reserved.</p>
        <p className="mt-2 text-sm">
          Built with React, Node.js, & MongoDB | Deployed on Vercel & Render
        </p>
      </div>
    </footer>
  );
};

export default Footer;