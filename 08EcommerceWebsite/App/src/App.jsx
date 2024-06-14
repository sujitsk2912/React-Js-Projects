import "./App.css";
import HomePage from "./Pages/HomePage/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SearchProducts from "./Pages/SearchProducts/SearchProducts";
import Category from "./Components/Category/Category";
import Newsletter from "./Components/Footer/Newsletter/Newsletter";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Header/Navbar";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/searchproducts",
      element: <SearchProducts />,
    },
    {
      path: "/category/:id",
      element: <Category />,
    },
    {
      path: "/product/:id",
      element: <ProductDetails />,
    },
  ]);
  return (
    <>
      <Navbar />
      <RouterProvider router={router}></RouterProvider>
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
