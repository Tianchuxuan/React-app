import React, { createContext, useState, useEffect } from 'react';
import api from '../api/axiosInstance';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  
  useEffect(() => {
    const loadUser = () => {
      const token = localStorage.getItem('token');
      const userData = localStorage.getItem('user');
      if (token && userData) {
        setUser(JSON.parse(userData));
      }
      setLoading(false);
    };
    loadUser();
  }, []);

  
  const register = async (username, email, password) => {
    try {
      setError('');
      const res = await api.post('/api/users/register', { username, email, password });
      const { token, user } = res.data;
      
      
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      setUser(user);
      return true;
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed. Please try again.');
      console.error('Registration Error:', err);
      return false;
    }
  };

  
  const login = async (email, password) => {
    try {
      setError('');
      const res = await api.post('/api/users/login', { email, password });
      const { token, user } = res.data;
      
      
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      setUser(user);
      return true;
    } catch (err) {
      setError(err.response?.data?.message || 'Invalid email or password.');
      console.error('Login Error:', err);
      return false;
    }
  };

  
  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, error, register, login, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};