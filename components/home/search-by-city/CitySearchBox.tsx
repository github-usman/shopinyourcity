"use client"

import React, { useEffect, useState } from "react";
import userLocationCordinates from "../../../utils/userLocationCordinates";
import findNearestCity from "../../../utils/nearestCity"
import { IoIosArrowDown } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { cityCoordinates } from "../../../assets/static/constants";
import styles from "./dropdown.module.css";


const city = Object.keys(cityCoordinates)
const CitySearchBox = () => {
  // const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [showMenu, setShowMenu] = useState(false);

  // get user location or city, ----> iff user allow using GPS then this will provide user current location or city
  useEffect(() => {
    const fetchUserLocation = async () => {
      try {
        const [latitude, longitude, success] = await userLocationCordinates();
        // option is not selected manually and gps is ON
        if (success === true && selectedOption === '') {
          const nearestCity = findNearestCity(latitude, longitude);
          setSelectedOption('');
        }
      } catch (error) {
        console.error("Error fetching user location:", error);
      }
    };
    fetchUserLocation();
    return () => {
      setSelectedOption('');
    };
    //eslint-disable-next-line
  }, []);
  const handleOptionClick = (option:string) => {
    setSelectedOption(option);
    setShowMenu(false);
  };



  // now


  const handleHover = () => {
    setShowMenu(true);
  };

  const handleLeave = () => {
    setShowMenu(false);
  };

  // <button className={styles.btnAllDepartment} onMouseEnter={handleHover} onMouseLeave={handleLeave}>


  // 

  return (
    <div className={styles.container} onMouseEnter={handleHover} onMouseLeave={handleLeave}>
      <div>
        <div className={styles.dropdownHeader} >
          {/* icons or location and arrow */}
          <span className={styles[`${showMenu ? "location-active" : ""}`]}>
            <FaLocationDot />
          </span>
          <span style={{ color: selectedOption ? "black" : "grey" }}>
            {selectedOption || "Select Your City"}
          </span>
          <span className={styles[`arrow ${showMenu ? "rotate" : ""}`]}>
            <IoIosArrowDown />
          </span>
        </div>
        {showMenu && (
          // manual city selection by user
          <ul className={styles.dropdownList}>
            {city.sort((a, b) => a.localeCompare(b)).map((option, index) => (
              <li key={index} onClick={() => handleOptionClick(option)}>
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CitySearchBox;
