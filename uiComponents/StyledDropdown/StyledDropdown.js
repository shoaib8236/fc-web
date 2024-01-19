import { DownOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import NavLink from "../navLink/NavLink";
import Link from "next/link";
import { useRouter } from "next/router";
import { BiChevronDown } from "react-icons/bi";

const StyledDropdown = (props) => {
  const {
    className = "",
    onPressLink = () => {},
    title = "Title",
    options = [{ path: "/", label: "Home" }],
  } = props;

  const [expand, setExpand] = useState(false);
  let { pathname } = useRouter();

  const onExpand = () => {
    setExpand(!expand);
  };

  return (
    <div className={`dropdown_style ${className}`}>
      <div onClick={onExpand} className="lable_warpper">
        {title} <BiChevronDown className={expand ? "rotate" : ""} />
      </div>
      <div
        style={{ height: expand ? 40 * options.length : 0 }}
        className="dropdown_wrapper"
      >
        {options.map((item) => (
          <>
            <div
              className={
                pathname === item.path
                  ? " dropdown_items active"
                  : "dropdown_items"
              }
              onClick={onPressLink}
            >
              <Link addClass="styled_dropdown_item" href={item.path}>
                {item.label}
              </Link>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default StyledDropdown;
