import { createContext, useState } from "react";
import { useCookies } from "react-cookie";
import { jwtDecode } from "jwt-decode";
export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [cookies, setCookies, removeCookies] = useCookies();
  const login = (tokenStr) => {
    if (tokenStr) {
      const { exp } = jwtDecode(tokenStr);
      if (exp) {
        setCookies("jwt", tokenStr, {
          path: "/",
          maxAge: exp,
          sameSite: true,
        });
      }
      return;
    }
    logout();
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    removeCookies("jwt", { path: "/" });
  };
  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        login,
        logout,
        setUser,
        setToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
