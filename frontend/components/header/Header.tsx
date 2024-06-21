import React from "react";
import AllDepartments from "../home/all-departments-btn/AllDepartments";
import Navbar from "./navbar/Navbar";
import Logo from "./logo/Logo";
import AuthLayout from "./auth/AuthLayout";

const Header = () => {
  return (
    <div className="main-header">
      <div className="wrapper">
      <Logo />
      <Navbar />
      <AuthLayout />
      </div>
      <div className="hr-line"></div>
    </div>
  );
};

export default Header;
