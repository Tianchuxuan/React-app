import React, { useEffect, useState } from 'react';
import api from '../api/axiosInstance'; 

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        
        const res = await api.get('/api/projects');
        setProjects(res.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to get the project list. Please try again later.');
        setLoading(false);
        console.error(err);
      }
    };
    fetchProjects();
  }, []);

  if (loading) return <div>loading...</div>;
  if (error) return <div style={{ color: 'red' }}>{error}</div>;

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
      {projects.map(project => (
        <div key={project._id} style={{ border: '1px solid #ddd', padding: '10px', borderRadius: '4px' }}>
          <h3 style={{ fontSize: '18px', fontWeight: 'bold' }}>{project.title}</h3>
          <p style={{ color: '#666' }}>{project.description}</p>
          <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ color: 'blue', textDecoration: 'underline' }}
          >
            View
          </a>
        </div>
      ))}
    </div>
  );
};

export default Projects;