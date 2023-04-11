import React from "react";
import Landing from "../Component/Layout/Landing/Landing";
import { useNavigate } from "react-router-dom";

const AuthLayout = () => {
  const navigate = useNavigate();
  const token: any = localStorage.getItem("token");
  console.log("token", token);

  return (
    <>
      {" "}
      <Landing />
    </>
  );
};

export default AuthLayout;
