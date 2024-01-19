import React, { useEffect, useState } from "react";
import NavLink from "./../navLink/NavLink";
import Slider from "../slider/Slider";
import { HiMenu } from "react-icons/hi";
import Button from "../button/Button";
import Link from "next/link";
import Logo from "../../assets/images/logo/logo_red.svg";
import Dropdown from "../../uiComponents/dropDown/DropDown";
import { Col, Modal, Row, Form, Input } from "antd";
import StyledButton from "../styledButton/StyledButton";

var establishmentOptions = [
  {
    name: "Establishments",
    to: "/establishment",
  },
  {
    name: "How it works",
    to: "/establishment/how-it-works",
  },
];

var driverOption = [
  {
    name: "Become a Driver",
    to: "/driver/how-it-works",
  },
];

const Navbar = () => {
  var [navbar, setNavbar] = useState(false);
  const [percentage, setPercentage] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const { TextArea } = Input;

  var [scroll, setScroll] = useState(0);
  var scrollTracker = () => {
    if (window.scrollY < 1) {
      setScroll(0);
    } else {
      setScroll(1);
    }
  };
  useEffect(() => {
    //CDM
    window.addEventListener("scroll", scrollTracker);
  }, []);
  // console.log(`scroll value - ${scroll}`);

  // console.log(navbar);

  useEffect(() => {
    const scroll = () => {
      const scrollTop = window.pageYOffset;
      const scrollPercentage =
        (scrollTop / (document.body.scrollHeight - window.innerHeight)) * 100;
      const scrollPercentageInt = Math.floor(scrollPercentage);
      if (scrollPercentageInt) {
        setPercentage(scrollPercentageInt);
      }
    };
    window.addEventListener("scroll", scroll);
    return () => {
      window.removeEventListener("scroll", scroll);
    };
  }, []);

  const onOpenSuggestion = (event) => {
    event.preventDefault();
    setIsModalVisible(true);
  };

  return (
    <div
      style={{
        backgroundColor: scroll === 0 ? "white" : "rgba(255,255,255,0.95)",
      }}
      className="navbar"
    >
      <Slider navbar={navbar} setNavbar={setNavbar} />
      <div style={{ alignItems: "flex-start" }} className="logoArea center">
        <Link href={"/"}>
          <img className="logo" src={Logo.src} style={{ objectFit: "fill" }} />
        </Link>
      </div>
      <div className="menuItemArea">
        <div className="navSimpleItems">
          <NavLink href="/" exact={"true"} className="nav-item nav-link">
            Home
          </NavLink>

          <NavLink href="/what-is-foodchoo" className="nav-item nav-link">
            What is FoodChoo
          </NavLink>
          <NavLink href="/press" className="nav-item nav-link">
            Press
          </NavLink>

          <NavLink href="/careers" className="nav-item nav-link">
            Careers
          </NavLink>
          <div className="navDropdown">
            <Dropdown
              options={establishmentOptions}
              title="Establishments"
              fontSize={24}
              onSelect={(e) => {
                // console.log(e);
              }}
            />
          </div>
          <div className="navDropdown">
            <Dropdown
              options={driverOption}
              title="Drivers"
              fontSize={24}
              onSelect={(e) => {}}
            />
          </div>
          <NavLink href="/data-safety" className="nav-item nav-link">
            Data safety
          </NavLink>
          {/* <NavLink href="#" className="nav-item nav-link">
            <span onClick={onOpenSuggestion}>Suggestions</span>
          </NavLink>
          <NavLink href="/communities" className="nav-item nav-link">
            Communities
          </NavLink>
          <NavLink href="/pioneer-program" className="nav-item nav-link">
            Pioneer Program
          </NavLink> */}
        </div>
      </div>
      {/* <div className="nav-btns">
        <Button className="login-btn" light md>
          Login
        </Button>
        <Button red md>
          Sign up
        </Button>
      </div> */}
      <HiMenu onClick={() => setNavbar(true)} className="ham" />
      {/* <div style={
        {
          height: "2px",
          width: `${percentage === 1 ? 0 : percentage}%`,
          background: 'red', 
          transition:"0.6s",
          position: "fixed",
          top: 63,
          left: 0,
        }

      }></div> */}

      {/* <Modal
        onCancel={() => setIsModalVisible(false)}
        footer={false}
        width={550}
        title="Suggestions"
        visible={isModalVisible}
        className="suggestion_modal_wrap"
      >
        <Form className="suggetion_modal" layout="vertical">
          <Form.Item
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
            ]}
            className="styled_input"
            label="Your Email"
          >
            <Input />
          </Form.Item>
          <Form.Item
            rules={[
              {
                required: true,
                message: "Please input your suggestions!",
              },
            ]}
            className="styled_textarea"
            label="Suggestions"
          >
            <TextArea
              showCount
              maxLength={1000}
              style={{
                height: 160,
                resize: "none",
              }}
            />
          </Form.Item>
          <span className="info_tag">Not more then 1000 characters</span>

          <div className="flex_end">
            <button type="submit" className="styled-btn red lg">
              Save
            </button>
          </div>
        </Form>
      </Modal> */}
    </div>
  );
};

export default React.memo(Navbar);
