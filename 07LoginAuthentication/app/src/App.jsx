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
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import ProtectedRoute from "./Components/Auth/ProtectedRoute";
import AlreadySignin from "./Components/Auth/AlreadySignin";
import { UrlProvider } from "./pages/Auth/ForgotPassword/UrlContext";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      ),
    },
    {
      path: "/transactions",
      element: (
        <ProtectedRoute>
          <TransactionsNew />
        </ProtectedRoute>
      ),
    },
    {
      path: "/support",
      element: (
        <ProtectedRoute>
          <SupportNew />
        </ProtectedRoute>
      ),
    },
    {
      path: "/signup",
      element: (
        <AlreadySignin>
          <Signup />
        </AlreadySignin>
      ),
    },
    {
      path: "/signin",
      element: (
        <AlreadySignin>
          <Signin />
        </AlreadySignin>
      ),
    },
    {
      path: "/forgot_Password",
      element: (
        <AlreadySignin>
          <ForgotPassword />
        </AlreadySignin>
      ),
    },
    {
      path: "/send-verification-mail/:email",
      element: (
        <AlreadySignin>
          <EmailVerification />
        </AlreadySignin>
      ),
    },
    {
      path: "/email-verify/:token",
      element: (
        <AlreadySignin>
          <RegistrationSuccess />
        </AlreadySignin>
      ),
    },
    {
      path: "/forgot-password-verify/:token",
      element: (
        <AlreadySignin>
          <ResetPassword />
        </AlreadySignin>
      ),
    },
    {
      path: "/reset_Successful",
      element: (
        <AlreadySignin>
          <ResetSuccess />
        </AlreadySignin>
      ),
    },
    {
      path: "/verify_Password/:email",
      element: (
        <AlreadySignin>
          <EmailSent />
        </AlreadySignin>
      ),
    },
  ]);

  const queryClient = new QueryClient();

  return (
    <UrlProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </UrlProvider>
  );
}

export default App;
