import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../api/axiosInstance';


const MOCK_BLOGS = [
  {
    _id: "1",
    title: "Getting Started with React Context API",
    content: "Learn how to manage global state in React apps using the Context API...",
    author: { username: "dev_user" },
    createdAt: "2024-03-15T14:30:00.000Z"
  },
  {
    _id: "2",
    title: "Building RESTful APIs with Node.js & Express",
    content: "A step-by-step guide to creating scalable APIs with proper error handling...",
    author: { username: "dev_user" },
    createdAt: "2024-02-28T10:15:00.000Z"
  }
];

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const res = await api.get('/api/blog');
        setBlogs(res.data.length > 0 ? res.data : MOCK_BLOGS);
        setError('');
      } catch (err) {
        setError('Failed to load blog posts. Showing demo content.');
        setBlogs(MOCK_BLOGS);
        console.error('Blog Fetch Error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return <div className="text-center py-12">Loading blog posts...</div>;
  }

  
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Tech Blog</h1>
      
      {error && (
        <div className="bg-yellow-100 text-yellow-800 p-4 rounded mb-6 text-center">
          {error}
        </div>
      )}

      {/* 博客文章列表 */}
      <div className="space-y-6 max-w-3xl mx-auto">
        {blogs.map((post) => (
          <div 
            key={post._id} 
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
          >
            <Link to={`/blog/${post._id}`}>
              <h2 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
                {post.title}
              </h2>
            </Link>
            
            <div className="text-sm text-gray-500 mb-3">
              By {post.author.username} • {formatDate(post.createdAt)}
            </div>
            
            <p className="text-gray-600 mb-4">
              {post.content.length > 150 
                ? `${post.content.slice(0, 150)}...` 
                : post.content}
            </p>
            
            <Link 
              to={`/blog/${post._id}`}
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Read More →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;