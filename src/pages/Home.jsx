import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">
          Hello, I'm <span className="text-blue-600">TCX</span>
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          A student from Shenyang Normal University passionate about coding and creating. Skilled in building beautiful and functional web applications with React and Tailwind CSS.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link 
            to="/projects" 
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            View My Projects
          </Link>
          <Link 
            to="/contact" 
            className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition"
          >
            Contact Me
          </Link>
        </div>
      </section>

      <section className="mt-20">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">My Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {['React', 'JavaScript', 'HTML/CSS', 'Tailwind CSS'].map((skill, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow text-center hover:shadow-md transition">
              <p className="text-xl font-medium">{skill}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;