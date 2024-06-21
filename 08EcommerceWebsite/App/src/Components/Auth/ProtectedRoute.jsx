import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const ProtectedRoute = ({ isLoggedIn, children }) => {
  const { token } = useAuth();
  return <>{token || isLoggedIn ? children : <Navigate to="/signin" />}</>;
};

export default ProtectedRoute;
