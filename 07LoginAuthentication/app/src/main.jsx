import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import AuthProvider from "./Provider/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </AuthProvider>
  </React.StrictMode>
);
