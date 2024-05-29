import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const ProtectedRoute = ({ children }) => {
  const { token } = useAuth();
  return <>{token ? children : <Navigate to="/signin" />}</>;
};

export default ProtectedRoute;
