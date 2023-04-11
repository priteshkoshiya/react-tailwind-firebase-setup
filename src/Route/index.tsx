import React from "react";
import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../Auth/Login";
import Signup from "../Auth/Signup";
import ForgotPassword from "../Auth/ForgotPassword";
import MobileNumberLogin from "../Auth/MobileNumberLogin";
import DefaultLayout from "../Layout/DefaultLayout";
import Dashboard from "../Component/Pages/Dashboard/Dashboard";
import NotFound from "../Component/Pages/NotFound/NotFound";
import Instagram from "../Component/Pages/Instagram/Instagram";
import Amazon from "../Component/Pages/Amazon/Amazon";
import BookMyShow from "../Component/Pages/BookMyShow/BookMyShow";
import Whatsapp from "../Component/Pages/Whatsapp/Whatsapp";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
  },
  {
    path: "/",
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "forgotpassword",
        element: <ForgotPassword />,
      },
      {
        path: "phone-login",
        element: <MobileNumberLogin />,
      },
    ],
  },
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "instagram",
        element: <Instagram />,
      },
      {
        path: "amazon",
        element: <Amazon />,
      },
      {
        path: "bookmyshow",
        element: <BookMyShow />,
      },
      {
        path: "whatsapp",
        element: <Whatsapp />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
export default routes;
