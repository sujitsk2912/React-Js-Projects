import Dashboard from "./pages/Dashboard/Dashboard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SupportNew from "./pages/Support/SupportNew";
import TransactionsNew from "./pages/Transactions/TransactionsNew";
import Signup from "./pages/Auth/Signup/Signup";
import Signin from "./pages/Auth/Signin/Signin";
import ForgotPassword from "./pages/Auth/ForgotPassword/ForgotPassword";
import EmailVerification from "./pages/Auth/Signup/EmailVerification";
import RegistrationSuccess from "./pages/Auth/Signup/RegistrationSuccess";
import ResetPassword from "./pages/Auth/ForgotPassword/ResetPassword";
import ResetSuccess from "./pages/Auth/ForgotPassword/ResetSuccess";
import EmailSent from "./pages/Auth/ForgotPassword/EmailSent";
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
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/forgot_Password",
    element: <ForgotPassword />,
  },
  {
    path: "/email_Verification",
    element: <EmailVerification />,
  },
  {
    path: "/registration_Successful",
    element: <RegistrationSuccess />,
  },
  {
    path: "/reset_Password",
    element: <ResetPassword />,
  },
  {
    path: "/reset_Successful",
    element: <ResetSuccess />,
  },
  {
    path: "/verify_Password",
    element: <EmailSent />,
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
