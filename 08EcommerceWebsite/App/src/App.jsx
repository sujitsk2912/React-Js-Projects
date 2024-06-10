import "./App.css";
import HomePage from "./Pages/HomePage/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SearchProducts from "./Pages/SearchProducts/SearchProducts";

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
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/",
      element: <HomePage />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router}>
        <HomePage />
      </RouterProvider>
    </>
  );
}

export default App;
