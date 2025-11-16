import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-12">
      {/* Intro Text */}
      <div className="md:w-1/2">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Hi, I'm tcx
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          I build responsive, scalable web applications using modern technologies. 
          Explore my projects, read my technical blog, or reach out to collaborate!
        </p>
        <div className="flex flex-wrap gap-4">
          <Link 
            to="/projects"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            View My Work
          </Link>
          <Link 
            to="/contact"
            className="bg-gray-200 text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-300 transition-colors"
          >
            Get In Touch
          </Link>
        </div>
      </div>

      {/* Skills Section */}
      <div className="md:w-1/2 bg-gray-50 p-6 rounded-xl shadow">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">My Tech Stack</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { name: "React", icon: "⚛️" },
            { name: "Node.js", icon: "🟢" },
            { name: "Express", icon: "🚀" },
            { name: "MongoDB", icon: "🍃" },
            { name: "JavaScript", icon: "📜" },
            { name: "Tailwind CSS", icon: "🎨" }
          ].map((skill, idx) => (
            <div 
              key={idx} 
              className="bg-white p-4 rounded-lg shadow-sm flex flex-col items-center"
            >
              <span className="text-2xl mb-2">{skill.icon}</span>
              <span className="font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;