import Link from "next/link";
import NavLink from "../navLink/NavLink";
import Logo from "../../assets/images/logo/logo_red.svg";
import React from "react";
import Image from "next/image";
import { HiMenu } from "react-icons/hi";
import { Dropdown, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";

const NavMenu = () => {
  const items = [
    {
      label: <a href="https://www.antgroup.com">1st menu item</a>,
      key: "0",
    },
    {
      label: <a href="https://www.aliyun.com">2nd menu item</a>,
      key: "1",
    },
    {
      type: "divider",
    },
    {
      label: "3rd menu item",
      key: "3",
    },
  ];

  return (
    <div className="styled_nav_wrapper">
      <Link href={"/"}>
        <Image width={100} height={50} src={Logo.src} alt="logo" />
      </Link>
      <div className="links_container">
        <div className="links">
          <NavLink href="/" exact={"true"} addClass="nav_link_item">
            Home
          </NavLink>
          <NavLink href="/what-is-foodchoo" addClass="nav_link_item">
            What is FoodChoo
          </NavLink>
          <NavLink href="/press" addClass="nav_link_item">
            Press
          </NavLink>

          <NavLink href="/careers" addClass="nav_link_item">
            Careers
          </NavLink>
          <Dropdown menu={items} trigger={["click"]}>
            <div>
              <Space>
                Click me
                <DownOutlined />
              </Space>
            </div>
          </Dropdown>
          <Dropdown menu={items} trigger={["click"]}>
            <div>
              <Space>
                Click me
                <DownOutlined />
              </Space>
            </div>
          </Dropdown>
        </div>
      </div>
      <div className="menu_icon">
        <HiMenu />
      </div>
    </div>
  );
};

export default NavMenu;
