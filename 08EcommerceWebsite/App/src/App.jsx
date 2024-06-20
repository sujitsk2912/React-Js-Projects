import "./App.css";
import HomePage from "./Pages/HomePage/HomePage";
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
  Navigate,
} from "react-router-dom";
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
import EmailVerification from "./Pages/Auth/Signup/EmailVerification";
import RegistrationSuccess from "./Pages/Auth/Signup/RegistrationSuccess";
import ResetPassword from "./Pages/Auth/ForgotPassword/ResetPassword";
import ResetSuccess from "./Pages/Auth/ForgotPassword/ResetSuccess";
import EmailSent from "./Pages/Auth/ForgotPassword/EmailSent";
import { UrlProvider } from "./Pages/Auth/ForgotPassword/UrlContext";
import ProtectedRoute from "./Components/Auth/ProtectedRoute"; // Assuming this component exists
import AlreadySignin from "./Components/Auth/AlreadySignin"; // Assuming this component exists
import NotFound from "./Components/404-NotFound/NotFound";

function App() {
  const location = useLocation();

  // Paths where you don't want to show Navbar, Footer, Newsletter, etc.
  const noHeaderFooterPaths = [
    "/signin",
    "/signup",
    "/forgot_Password",
    "/success",
    "/send-verification-mail/:email",
    "/email-verify/:token",
    "/forgot-password-verify/:token",
    "/reset_Successful",
    "/verify_Password/:email",
  ];

  const queryClient = new QueryClient();

  const shouldHideHeaderFooter = noHeaderFooterPaths.some((path) =>
    new RegExp(`^${path.replace(/:[^\s/]+/g, "([^/]+)")}$`).test(
      location.pathname
    )
  );

  return (
    <>
      <ToastContainer position="bottom-center" />
      <AppContext>
        <UrlProvider>
          <QueryClientProvider client={queryClient}>
            {!shouldHideHeaderFooter && <Navbar />}
            <Routes>
              <Route
                path="/"
                element={
                  <ProtectedRoute>
                    <HomePage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/category/:id"
                element={
                  <ProtectedRoute>
                    <Category />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/product/:id"
                element={
                  <ProtectedRoute>
                    <ProductDetails />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/success"
                element={
                  <AlreadySignin>
                    <Success />
                  </AlreadySignin>
                }
              />
              <Route
                path="/signup"
                element={
                  <AlreadySignin>
                    <Signup />
                  </AlreadySignin>
                }
              />
              <Route
                path="/signin"
                element={
                  <AlreadySignin>
                    <Signin />
                  </AlreadySignin>
                }
              />
              <Route
                path="/forgot_Password"
                element={
                  <AlreadySignin>
                    <ForgotPassword />
                  </AlreadySignin>
                }
              />
              <Route
                path="/send-verification-mail/:email"
                element={
                  <AlreadySignin>
                    <EmailVerification />
                  </AlreadySignin>
                }
              />
              <Route
                path="/email-verify/:token"
                element={
                  <AlreadySignin>
                    <RegistrationSuccess />
                  </AlreadySignin>
                }
              />
              <Route
                path="/forgot-password-verify/:token"
                element={
                  <AlreadySignin>
                    <ResetPassword />
                  </AlreadySignin>
                }
              />
              <Route
                path="/reset_Successful"
                element={
                  <AlreadySignin>
                    <ResetSuccess />
                  </AlreadySignin>
                }
              />
              <Route
                path="/verify_Password/:email"
                element={
                  <AlreadySignin>
                    <EmailSent />
                  </AlreadySignin>
                }
              />
              {/* Catch-all route for unknown paths */}
              <Route path="*" element={<Navigate to="/404-NotFound" />} />
            </Routes>
            {!shouldHideHeaderFooter && <Newsletter />}
            {!shouldHideHeaderFooter && <Footer />}
          </QueryClientProvider>
        </UrlProvider>
      </AppContext>
    </>
  );
}

function AppWrapper() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/404-NotFound" element={<NotFound />} />
        <Route path="/*" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppWrapper;
