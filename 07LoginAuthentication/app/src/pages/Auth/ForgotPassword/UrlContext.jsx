// UrlContext.js
import { createContext, useState } from "react";

export const UrlContext = createContext();

export const UrlProvider = ({ children }) => {
  const [url, setUrl] = useState(null);

  return (
    <UrlContext.Provider value={{ url, setUrl }}>
      {children}
    </UrlContext.Provider>
  );
};
