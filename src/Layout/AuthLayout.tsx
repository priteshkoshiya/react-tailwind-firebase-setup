import React from "react";
import { Outlet } from "react-router-dom";
import Landing from "../Component/Layout/Landing/Landing";

const AuthLayout = () => {
  return (
    <>
      <div>
        <Landing />
      </div>
    </>
  );
};

export default AuthLayout;
