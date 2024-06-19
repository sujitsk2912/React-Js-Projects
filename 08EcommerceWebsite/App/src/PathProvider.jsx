import HomePage from "./Pages/HomePage/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppContext from "./utils/context";
import "react-toastify/dist/ReactToastify.css";

const PathProvider = () => {
  return (
    <>
      <BrowserRouter>
        <AppContext>
          <Routes></Routes>
        </AppContext>
      </BrowserRouter>
    </>
  );
};

export default PathProvider;
