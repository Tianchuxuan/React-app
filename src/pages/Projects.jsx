import React from 'react';


const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition p-6">
      <h3 className="text-xl font-bold mb-2 text-gray-800">{project.title}</h3>
      <p className="text-gray-600 mb-4">{project.description}</p>
      <a 
        href={project.link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
      >
        View Project <span className="ml-2">→</span>
      </a>
    </div>
  );
};

const Projects = () => {
  
  const projects = [
    {
      id: 1,
      title: "E-commerce Frontend",
      description: "Responsive e-commerce platform built with React and Tailwind, supporting product display, shopping cart, and checkout functionality.",
      link: "https://example.com/project1"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Task management tool based on React Hooks and LocalStorage, supporting drag-and-drop sorting and state management.",
      link: "https://example.com/project2"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Weather query application using third-party APIs, supporting real-time weather and forecast displays.",
      link: "https://example.com/project3"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-10 text-center text-gray-800">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;