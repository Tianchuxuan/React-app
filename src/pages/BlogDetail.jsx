import React from 'react';
import { useParams, Link } from 'react-router-dom';

const BlogDetail = () => {
  const { id } = useParams(); 
  
  const blogPosts = [
    {
      id: 1,
      title: "React Hooks 完全指南",
      content: `
        <h3>什么是 React Hooks？</h3>
        <p>React Hooks 是 React 16.8 引入的新特性，允许开发者在函数组件中使用状态和生命周期方法，无需编写类组件。</p>
        
        <h3>useState 基础用法</h3>
        <p>useState 用于在函数组件中声明状态变量：</p>
        <pre className="bg-gray-100 p-4 rounded my-4">
const [count, setCount] = useState(0);
        </pre>
        <p>其中 count 是状态变量，setCount 是更新状态的函数。</p>
        
        <h3>useEffect 生命周期</h3>
        <p>useEffect 可以模拟类组件的 componentDidMount、componentDidUpdate 和 componentWillUnmount：</p>
        <pre className="bg-gray-100 p-4 rounded my-4">
useEffect(() => {
  // 组件挂载或更新时执行
  document.title = \`Count: \${count}\`;
  
  // 组件卸载时执行
  return () => {
    console.log('组件卸载');
  };
}, [count]); // 仅在count变化时执行
        </pre>
      `,
      date: "2024-03-15",
      author: "开发者姓名"
    }
  ];

 
  const post = blogPosts.find(item => item.id === parseInt(id)) || {
    title: "博客不存在",
    content: "<p>抱歉，该博客文章不存在。</p>",
    date: "",
    author: ""
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <Link to="/blog" className="text-blue-600 hover:underline mb-6 inline-block">
          ← 返回博客列表
        </Link>
        
        <article className="bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold mb-4 text-gray-800">{post.title}</h1>
          
          {post.date && (
            <p className="text-gray-500 mb-6">
              作者：{post.author} | 发布日期：{post.date}
            </p>
          )}
          
          <div 
            className="prose max-w-none text-gray-700"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </div>
    </div>
  );
};

export default BlogDetail;