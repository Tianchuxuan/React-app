import axios from 'axios';

const api = axios.create({
  baseURL: 'https://portfolio-blog-api-render.onrender.com',
});

api.interceptors.request.use(
  (config) => {
    
    if (!config.url.includes('manifest.json')) {
      const token = localStorage.getItem('token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;