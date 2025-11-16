import React, { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import api from '../api/axiosInstance';

const BlogDetail = () => {
  const { id } = useParams(); 
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [commentLoading, setCommentLoading] = useState(false);

  
  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        setLoading(true);
        const res = await api.get(`/api/blog/${id}`);
        setPost(res.data);
        setComments(res.data.comments || []);
        setError('');
      } catch (err) {
        setError('Failed to load blog post.');
        console.error('Blog Detail Error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogData();
  }, [id]);

  
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  
  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (!newComment.trim() || !user) return;

    try {
      setCommentLoading(true);
      const res = await api.post(`/api/blog/${id}/comments`, {
        body: newComment
      });

      
      setComments([...comments, res.data]);
      setNewComment(''); 
    } catch (err) {
      setError('Failed to submit comment.');
      console.error('Comment Error:', err);
    } finally {
      setCommentLoading(false);
    }
  };

  if (loading) {
    return <div className="text-center py-12">Loading blog post...</div>;
  }

  if (error || !post) {
    return (
      <div className="text-center py-12 text-red-600">
        {error || 'Blog post not found.'}
        <button 
          onClick={() => navigate('/blog')}
          className="mt-4 text-blue-600 hover:underline"
        >
          Back to Blog List
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      {/* Blog Post Content */}
      <div className="bg-white p-8 rounded-xl shadow-md mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{post.title}</h1>
        
        <div className="text-sm text-gray-500 mb-6">
          By {post.author.username} • {formatDate(post.createdAt)}
        </div>
        
        <div className="text-gray-700 space-y-4">
          {post.content.split('\n').map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>
      </div>

      {/* Comments Section */}
      <div className="bg-white p-8 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Comments ({comments.length})</h2>

        {/* Comment Form (Authenticated Users Only) */}
        {user ? (
          <form onSubmit={handleCommentSubmit} className="mb-8">
            <div className="mb-4">
              <label htmlFor="comment" className="block text-gray-700 mb-2">
                Add a Comment
              </label>
              <textarea
                id="comment"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={commentLoading}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors disabled:bg-gray-400"
            >
              {commentLoading ? 'Submitting...' : 'Post Comment'}
            </button>
          </form>
        ) : (
          <p className="mb-8 text-gray-600">
            <a href="/login" className="text-blue-600 hover:underline">
              Log in
            </a> to leave a comment.
          </p>
        )}

        {/* Comments List */}
        {comments.length > 0 ? (
          <div className="space-y-4">
            {comments.map((comment) => (
              <div key={comment._id} className="border-b border-gray-200 pb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-gray-900">
                    {comment.author.username}
                  </span>
                  <span className="text-sm text-gray-500">
                    {formatDate(comment.createdAt)}
                  </span>
                </div>
                <p className="text-gray-700">{comment.body}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600">No comments yet. Be the first to comment!</p>
        )}
      </div>
    </div>
  );
};

export default BlogDetail;