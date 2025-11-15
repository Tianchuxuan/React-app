import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold hover:text-blue-400 transition">
            My Portfolio
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="hover:text-blue-400 transition">Home</Link>
            <Link to="/projects" className="hover:text-blue-400 transition">Projects</Link>
            <Link to="/blog" className="hover:text-blue-400 transition">Blog</Link>
            <Link to="/contact" className="hover:text-blue-400 transition">Contact</Link>
            <Link to="/login" className="hover:text-blue-400 transition">Login</Link>
          </nav>
          
          {/* 移动端菜单按钮 */}
          <button className="md:hidden text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;