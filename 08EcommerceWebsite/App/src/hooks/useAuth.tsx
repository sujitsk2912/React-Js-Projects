import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const useAuth = () => {
  const { token, user, login, logout, setUser, setToken } =
    useContext(AuthContext);
  return { token, user, login, logout, setUser, setToken };
};

export default useAuth;
