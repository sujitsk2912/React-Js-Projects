import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const useAuth = () => {
  const { token, user, login, logout, setUser } = useContext(AuthContext);
  return { token, user, login, logout, setUser };
};

export default useAuth;
