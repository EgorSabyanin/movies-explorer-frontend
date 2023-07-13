import { Navigate } from 'react-router-dom';

const AuthorizeRoute = ({ isLogged, children }) => {
  return isLogged ? <Navigate to='/' replace /> : children;
};

export default AuthorizeRoute;
