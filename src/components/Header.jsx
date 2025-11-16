import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();


  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="bg-gray-900 text-white py-4 shadow-lg">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-tight">
          DevPortfolio
        </Link>

        {/* Navigation Links */}
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="hover:text-gray-300 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link to="/projects" className="hover:text-gray-300 transition-colors">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-gray-300 transition-colors">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gray-300 transition-colors">
                Contact
              </Link>
            </li>

            {/* Conditional Auth Links */}
            {!user ? (
              <>
                <li>
                  <Link 
                    to="/login" 
                    className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/register" 
                    className="bg-gray-700 px-4 py-2 rounded hover:bg-gray-600 transition-colors"
                  >
                    Register
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link 
                    to="/admin" 
                    className="bg-green-600 px-4 py-2 rounded hover:bg-green-700 transition-colors"
                  >
                    Admin Dashboard
                  </Link>
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Logout
                  </button>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;