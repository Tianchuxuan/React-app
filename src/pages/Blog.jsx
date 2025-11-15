import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const posts = [
    {
      title: "React Conf 2025 Recap",
      date: "October 16, 2025",
      excerpt: "Last week we hosted React Conf 2025. In this post, we summarize the talks and announcements from the event...",
      link: "#"
    },
    {
      title: "React Compiler v1.0",
      date: "September 22, 2025",
      excerpt: "Today we’re announcing the release of React Compiler v1.0, a tool that automatically optimizes React components...",
      link: "#"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1>React Blog</h1>
      <p className="mb-6">This blog is the official source for updates from the React team.</p>
      <div className="space-y-6">
        {posts.map((post, index) => (
          <div key={index} className="bg-reactLightGray p-4 rounded">
            <h2 className="text-2xl mb-2">{post.title}</h2>
            <p className="text-reactText mb-2">{post.date}</p>
            <p className="mb-4">{post.excerpt}</p>
            <a href={post.link} className="text-reactBlue hover:underline">Read more</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;