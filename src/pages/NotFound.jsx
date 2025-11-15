import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="container mx-auto text-center py-16">
      <h1 className="text-5xl mb-4">404</h1>
      <p className="text-xl mb-8">Page not found</p>
      <Link to="/" className="bg-react-blue text-react-dark px-6 py-3 rounded-lg hover:bg-react-blue/90 transition">
        Go to Homepage
      </Link>
    </div>
  );
};

export default NotFound;