import Dashboard from "./pages/Dashboard/Dashboard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SupportNew from "./pages/Support/SupportNew";
import TransactionsNew from "./pages/Transactions/TransactionsNew";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/transactions",
    element: <TransactionsNew />,
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
