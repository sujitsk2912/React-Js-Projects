import "./App.css";
import HomePage from "./Pages/HomePage/HomePage";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Category from "./Components/Category/Category";
import Newsletter from "./Components/Footer/Newsletter/Newsletter";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Header/Navbar";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import AppContext from "./utils/context";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Success from "./Pages/Success/Success";
import Signin from "./Pages/Auth/Signin/Signin";
import Signup from "./Pages/Auth/Signup/Signup";
import ForgotPassword from "./Pages/Auth/ForgotPassword/ForgotPassword";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const queryClient = new QueryClient();
  const location = useLocation();

  // Paths where you don't want to show Navbar, Footer, Newsletter, etc.
  const noHeaderFooterPaths = ["/signin", "/signup", "/forgotpassword"];

  return (
    <>
      <ToastContainer position="bottom-center" />
      <AppContext>
        <QueryClientProvider client={queryClient}>
          {/* Conditionally render Navbar and other components */}
          {!noHeaderFooterPaths.includes(location.pathname) && <Navbar />}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/category/:id" element={<Category />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/success" element={<Success />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
          </Routes>
          {!noHeaderFooterPaths.includes(location.pathname) && <Newsletter />}
          {!noHeaderFooterPaths.includes(location.pathname) && <Footer />}
        </QueryClientProvider>
      </AppContext>
    </>
  );
}

function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default AppWrapper;
