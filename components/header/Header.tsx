import React from "react";
import AllDepartments from "./all-departments-btn/AllDepartments";
import Navbar from "./navbar/Navbar";
import Logo from "./logo/Logo";
import AuthLayout from "./auth/AuthLayout";

const Header = () => {
  return (
    <div className="main-header wrapper">
      <Logo />
      <Navbar />
      <AuthLayout />
    </div>
  );
};

export default Header;
