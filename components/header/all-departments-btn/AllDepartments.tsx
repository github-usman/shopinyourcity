"use client"
import React, { useState } from "react";
import ListOfMenus from "./ListOfMenus";
import { RiMenu2Line } from "react-icons/ri";

const AllDepartments = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleHover = () => {
    setShowMenu(true);
  };

  const handleLeave = () => {
    setShowMenu(false);
  };

  return (
    <div className='all-departmentContainer'>
      <button className="btnAllDepartment" onMouseEnter={handleHover} onMouseLeave={handleLeave}>
        <RiMenu2Line/>All Departments
      </button>
      {showMenu && <ListOfMenus onMouseEnter={handleHover} onMouseLeave={handleLeave} />}
    </div>
  );
};

export default AllDepartments;
