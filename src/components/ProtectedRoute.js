import { Navigate } from 'react-router-dom';

const ProtectedRouteElement = ({ isLogged, children }) => {
  return isLogged ? children : <Navigate to='/' replace />;
};

export default ProtectedRouteElement;
