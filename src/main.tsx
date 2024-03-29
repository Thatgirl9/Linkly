import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import LandingPage from "./pages/LandingPage/LandingPage";
import LoginPage from "./pages/LoginPage/Login";
import RegisterPage from "./pages/RegisterPage/Register";
import DashboardPage from "./pages/DashboardPage/Dashboard";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import NotFound from "./pages/NotFound/NotFound";
// import AuthRoute from "./pages/ProtectedAuthRoute/AuthRoute";
// import AuthProvider from "./pages/ProtectedAuthRoute/AuthContext";

// dotenv.config

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },

  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/dashboard/:email",
    element: (
      // (
      // <AuthRoute>
      <DashboardPage />
    ),
    // </AuthRoute>
    // ),
  },
  {
    path: "/forgotpassword",
    element: <ForgotPassword />,
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <AuthProvider> */}
    <RouterProvider router={router} />
    {/* </AuthProvider> */}
    {/* <RouterProvider router={router} /> */}
  </React.StrictMode>
);
