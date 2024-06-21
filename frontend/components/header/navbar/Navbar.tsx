"use client";

import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import MegaMenu from "./each-menu/mega-menu/MegaMenu";
import Link from "next/link";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [active, setActive] = useState('')

  const handleActive = (id: string) => {
    setActive(id)
  }

  const handleHover = () => {
    setShowMenu(true);
  };

  const handleLeave = () => {
    setShowMenu(false);
  };

  return (
    <div className={"container wrapper"}>
      <div className={"navMenu"}>
      <p className={`${active === '1'?'navMenuItem navMenuItemhover':'navMenuItem'}`}
          onMouseEnter={() => handleActive('1')}
          onMouseLeave={() => handleActive('')}
        >
          Shops <IoIosArrowDown className={"navMenuIcon"} />
        </p>
        <div className={"navMenuOption"}   onMouseEnter={() => handleActive('1')}onMouseLeave={() => handleActive('')}>
          {active ==='1' && (
            <MegaMenu />
          )}
        </div>
      </div>
      <div className={"navMenu"}>
      <p className={`${active === '2'?'navMenuItem navMenuItemhover':'navMenuItem'}`}
          onMouseEnter={() => handleActive('2')}
          onMouseLeave={() => handleActive('')}
        >
          Stores <IoIosArrowDown className={"navMenuIcon"} />
        </p>
        <div className={"navMenuOption"}   onMouseEnter={() => handleActive('2')}onMouseLeave={() => handleActive('')}>
          {active ==='2' && (
            <MegaMenu />
          )}
        </div>
      </div>
      <div className={"navMenu"}>
        <p
          className={`${active === '3'?'navMenuItem navMenuItemhover':'navMenuItem'}`}
          onMouseEnter={() => handleActive('3')}
          onMouseLeave={() => handleActive('')}
        >
          Mega Menu <IoIosArrowDown className={"navMenuIcon"} />
        </p>
        <div className={"navMenuOption"}   onMouseEnter={() => handleActive('3')}onMouseLeave={() => handleActive('')}>
          {active ==='3' && (
            <MegaMenu />
          )}
        </div>
      </div>
      <div className={"navMenu"}>
      <p className={`${active === '4'?'navMenuItem navMenuItemhover':'navMenuItem'}`}
          onMouseEnter={() => handleActive('4')}
          onMouseLeave={() => handleActive('')}
        >
          Pages <IoIosArrowDown className={"navMenuIcon"} />
        </p>
      </div>
      <div className={"navMenu"}>
      <p className={`${active === '5'?'navMenuItem navMenuItemhover':'navMenuItem'}`}
          onMouseEnter={() => handleActive('5')}
          onMouseLeave={() => handleActive('')}
        >
          For Seller <IoIosArrowDown className={"navMenuIcon"} />
        </p>
      </div>
    </div>
  );
};

export default Navbar;
