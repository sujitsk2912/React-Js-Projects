import Dashboard from "./pages/Dashboard/Dashboard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Transactions from "./pages/Transactions/Transactions";
import SupportNew from "./pages/Support/SupportNew";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/transactions",
    element: <Transactions />,
  },
  {
    path: "/support",
    element: <SupportNew />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      {/* <Dashboard /> */}
    </>
  );
}

export default App;
