import { Navigate } from 'react-router-dom';

const ProtectedRouteElement = ({ isLogged, children }) => {
  console.log('From ProtectedComponent isLogged = ', isLogged);
  return isLogged ? children : <Navigate to='/' replace />;
};

export default ProtectedRouteElement;
