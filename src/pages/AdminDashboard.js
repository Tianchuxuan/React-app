import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const AdminDashboard = () => {
  const { user, token } = useContext(AuthContext);
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState({
    title: '',
    description: '',
    url: ''
  });
  const [loading, setLoading] = useState(false);

  
  const fetchProjects = async () => {
    const res = await fetch('https://portfolio-blog-api-render.onrender.com/api/projects', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    const data = await res.json();
    setProjects(data);
  };

  
  useEffect(() => {
    fetchProjects();
  }, [token]);

 
  const handleAddProject = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await fetch('https://portfolio-blog-api-render.onrender.com/api/projects', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(newProject)
    });
    if (res.ok) {
      fetchProjects();
      setNewProject({ title: '', description: '', url: '' });
    }
    setLoading(false);
  };

  
  const handleDeleteProject = async (projectId) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      const res = await fetch(`https://portfolio-blog-api-render.onrender.com/api/projects/${projectId}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      if (res.ok) {
        fetchProjects();
      }
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard - {user.name}</h1>
      
      {/* Add Project Form */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-4">Add New Project</h2>
        <form onSubmit={handleAddProject}>
          <input
            type="text"
            placeholder="Project Title"
            value={newProject.title}
            onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
            className="w-full p-2 border mb-2"
            required
          />
          <textarea
            placeholder="Project Description"
            value={newProject.description}
            onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
            className="w-full p-2 border mb-2"
            required
          />
          <input
            type="url"
            placeholder="Project URL"
            value={newProject.url}
            onChange={(e) => setNewProject({ ...newProject, url: e.target.value })}
            className="w-full p-2 border mb-2"
            required
          />
          <button 
            type="submit" 
            disabled={loading}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            {loading ? 'Submitting...' : 'Add Project'}
          </button>
        </form>
      </div>

      {/* Projects List */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">My Projects</h2>
        {projects.length === 0 ? (
          <p>No projects yet. Click "Add Project" to create your first project.</p>
        ) : (
          <ul>
            {projects.map((project) => (
              <li 
                key={project._id} 
                className="border-b pb-2 mb-2"
              >
                <h3 className="font-semibold">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
                <a 
                  href={project.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-500"
                >
                  Visit Project
                </a>
                <button
                  onClick={() => handleDeleteProject(project._id)}
                  className="ml-4 text-red-500"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;