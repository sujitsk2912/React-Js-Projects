import "./App.css";
import HomePage from "./Pages/HomePage/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Category from "./Components/Category/Category";
import Newsletter from "./Components/Footer/Newsletter/Newsletter";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Header/Navbar";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import AppContext from "./utils/context";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Success from "./Pages/Success/Success";
import { Auth0Provider } from "@auth0/auth0-react";

function App() {
  return (
    <>
      <ToastContainer position="bottom-center" />
      <BrowserRouter>
        <Auth0Provider
          domain="dev-ij7w4kvym5a3b20s.us.auth0.com"
          clientId="NC2jrTapl0jikLYvLDHIC2VIhhzzWzzT"
          authorizationParams={{
            redirect_uri: window.location.origin,
          }}
        >
          <AppContext>
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/category/:id" element={<Category />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/success" element={<Success />} />
            </Routes>
            <Newsletter />
            <Footer />
          </AppContext>
        </Auth0Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
