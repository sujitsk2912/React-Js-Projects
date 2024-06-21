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
import EmailVerification from "./Pages/Auth/Signup/EmailVerification";
import RegistrationSuccess from "./Pages/Auth/Signup/RegistrationSuccess";
import ResetPassword from "./Pages/Auth/ForgotPassword/ResetPassword";
import ResetSuccess from "./Pages/Auth/ForgotPassword/ResetSuccess";
import EmailSent from "./Pages/Auth/ForgotPassword/EmailSent";
import { UrlProvider } from "./Pages/Auth/ForgotPassword/UrlContext";
import ProtectedRoute from "./Components/Auth/ProtectedRoute";
import AlreadySignin from "./Components/Auth/AlreadySignin";
import NotFound from "./Components/404-NotFound/NotFound";

function App() {
  const location = useLocation();
  const isLoggedIn = JSON.parse(window.localStorage.getItem("loggedIn"));

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
                  <ProtectedRoute isLoggedIn={isLoggedIn}>
                    <HomePage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/category/:id"
                element={
                  <ProtectedRoute isLoggedIn={isLoggedIn}>
                    <Category />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/product/:id"
                element={
                  <ProtectedRoute isLoggedIn={isLoggedIn}>
                    <ProductDetails />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/success"
                element={
                  <AlreadySignin isLoggedIn={isLoggedIn}>
                    <Success />
                  </AlreadySignin>
                }
              />
              <Route
                path="/signup"
                element={
                  <AlreadySignin isLoggedIn={isLoggedIn}>
                    <Signup />
                  </AlreadySignin>
                }
              />
              <Route
                path="/signin"
                element={
                  <AlreadySignin isLoggedIn={isLoggedIn}>
                    <Signin />
                  </AlreadySignin>
                }
              />
              <Route
                path="/forgot_Password"
                element={
                  <AlreadySignin isLoggedIn={isLoggedIn}>
                    <ForgotPassword />
                  </AlreadySignin>
                }
              />
              <Route
                path="/send-verification-mail/:email"
                element={
                  <AlreadySignin isLoggedIn={isLoggedIn}>
                    <EmailVerification />
                  </AlreadySignin>
                }
              />
              <Route
                path="/email-verify/:token"
                element={
                  <AlreadySignin isLoggedIn={isLoggedIn}>
                    <RegistrationSuccess />
                  </AlreadySignin>
                }
              />
              <Route
                path="/forgot-password-verify/:token"
                element={
                  <AlreadySignin isLoggedIn={isLoggedIn}>
                    <ResetPassword />
                  </AlreadySignin>
                }
              />
              <Route
                path="/reset_Successful"
                element={
                  <AlreadySignin isLoggedIn={isLoggedIn}>
                    <ResetSuccess />
                  </AlreadySignin>
                }
              />
              <Route
                path="/verify_Password/:email"
                element={
                  <AlreadySignin isLoggedIn={isLoggedIn}>
                    <EmailSent />
                  </AlreadySignin>
                }
              />
              <Route path="*" element={<NotFound />} />
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
