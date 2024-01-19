import React from "react";

import Header from "../header/Header";
// import Arrow from "./../../assets/images/arrow-right.png";
import NavLinks from "../navLink/NavLink";
import Dropdown from "../../uiComponents/dropDown/DropDown";

import { HiChevronRight } from "react-icons/hi";
import DownloadActions from "../downloadActions/DownloadActions";
import { AiOutlineClose } from "react-icons/ai";
import { DownOutlined } from "@ant-design/icons";
import StyledDropdown from "../StyledDropdown/StyledDropdown";

const Backdrop = ({ navbar, setNavbar }) => (
  <div
    onClick={() => setNavbar(false)}
    className="backdrop"
    style={{
      opacity: navbar ? "0.4" : "0",
      pointerEvents: navbar ? "all" : "none",
    }}
  ></div>
);

const Slider = ({ setNavbar, navbar }) => {
  const estOptions = [
    { path: "/establishment", label: "Establishment" },
    { path: "/establishment/how-it-works", label: "How It Works" },
  ];
  const driverOptions = [
    { path: "/driver/how-it-works", label: "How It Works" },
  ];

  return (
    <>
      <div
        style={{
          transition: "transform 250ms ease-in-out",
          transform: navbar ? "scaleX(1)" : "scaleX(0)",
        }}
        className="slider"
      >
        <div className="slider-header">
          <AiOutlineClose
            onClick={() => setNavbar(false)}
            className="arrow-right"
          />
        </div>

        <div className="links_container">
          <div onClick={() => setNavbar(false)}>
            {" "}
            <NavLinks
              addClass="nav_menu_link"
              href="/"
              exact={"true"}
              className="nav-item nav-link"
            >
              Home
            </NavLinks>
          </div>
          <div onClick={() => setNavbar(false)}>
            {" "}
            <NavLinks
              addClass="nav_menu_link"
              href="/what-is-foodchoo"
              className="nav-item nav-link"
            >
              What is FoodChoo
            </NavLinks>
          </div>
          <div onClick={() => setNavbar(false)}>
            <NavLinks
              addClass="nav_menu_link"
              href="/press"
              className="nav-item nav-link"
            >
              Press
            </NavLinks>
          </div>
          <div onClick={() => setNavbar(false)}>
            <NavLinks
              addClass="nav_menu_link"
              href="/careers"
              className="nav-item nav-link"
            >
              Careers
            </NavLinks>
          </div>
          <StyledDropdown
            onPressLink={() => setNavbar(false)}
            options={estOptions}
            title="Establishment"
            className="nav_menu_link"
          />
          <StyledDropdown
            onPressLink={() => setNavbar(false)}
            options={driverOptions}
            title="Driver"
            className="nav_menu_link"
          />
        </div>
        <DownloadActions />
      </div>
      <Backdrop navbar={navbar} setNavbar={setNavbar} />
    </>
  );
};

export default Slider;
