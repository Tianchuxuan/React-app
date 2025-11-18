import { useContext, Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  
  if (loading) return <div>Loading...</div>;

  
  if (!user) return <Navigate to="/login" />;

  
  return children;
};

export default PrivateRoute;