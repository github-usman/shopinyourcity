import React from "react";
import AllDepartments from "./all-departments-btn/AllDepartments";
import MegaMenu from "./navbar/each-menu/mega-menu/MegaMenu";
import Navbar from "./navbar/Navbar";

const Header = () => {
  return <div className="wrapper">
    {/* <AllDepartments/> */}
    <Navbar/>
  </div>;
};

export default Header;
