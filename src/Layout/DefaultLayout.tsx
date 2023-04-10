import React from "react";
import Sidebar from "../Component/Layout/Sidebar/Sidebar";
import Header from "../Component/Layout/Header/Header";
import PageRoutes from "../Component/Layout/PageRoutes/PageRoutes";
import { Navigate } from "react-router-dom";

function DefaultLayout() {
  const token: any = localStorage.getItem("token");
  return (
    <>
      {token ? (
        <>
          <Header />
          <Sidebar />
          <PageRoutes />
        </>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
}

export default DefaultLayout;
