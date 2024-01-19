import React, { useState, useRef, useEffect } from "react";
import StyledButton from "../../uiComponents/styledButton/StyledButton";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import Header from "../../uiComponents/header/Header";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
var setInitialState = (options, pathname) => {
  var navigatedTo = options.find(({ to }) => to === pathname);
  return navigatedTo.name;
};
var isActive = (options, pathname) => {
  return options.some(({ to }) => to === pathname);
};
const DropdownOptionsContainer = ({ children, ...restProps }) => {
  return (
    <div {...restProps} className="dropdownOptionsContainer">
      {children}
    </div>
  );
};
const DropdownOption = ({
  fontWeight = "medium",
  fontSize,
  color,
  optionBackground,
  optionHoverBackground,
  onSelect,
  setValue,
  option: { name, value, to },
  pathname,
  setNav,
}) => {
  var [hover, setHover] = useState(false);
  return (
    <Link href={to ? to : "#"}>
      <div
        onClick={() => {
          setValue && setValue(name);
          onSelect && onSelect(value);
          setNav && setNav(false);
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className="dropdownOption"
        style={{
          background:
            pathname === to
              ? optionHoverBackground
              : hover
              ? optionHoverBackground
              : optionBackground,
        }}
      >
        <Header
          fontWeight={fontWeight}
          fontSize={fontSize}
          style={{ transition: "color 300ms ease-in-out" }}
          color={pathname === to ? "white" : hover ? "white" : color}
        >
          {name}
        </Header>
      </div>
    </Link>
  );
};
const Dropdown = ({
  title = "dropdown",
  options = [],
  fontSize,
  fontWeight = "medium",
  color,
  titleBackground = "transparent",
  optionBackground = "white",
  optionHoverBackground = "#c6181f",
  onSelect,
  iconColor = "black",
  setNav,
}) => {
  var [expand, setExpand] = useState(false);
  let { pathname } = useRouter();
  var [value, setValue] = useState(
    isActive(options, pathname) ? setInitialState(options, pathname) : title
  );
  // console.log(pathname);
  isActive(options, pathname);

  function useOutsideAlerter(ref) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setTimeout(() => {
            setExpand(false);
          }, 150);
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  return (
    <div ref={wrapperRef} className="dropdown">
      <StyledButton
        forDropDown={true}
        onClick={() => {
          setExpand((prevState) => !prevState);
        }}
        onBlur={() => {
          setTimeout(() => {
            setExpand(false);
          }, 150);
        }}
        style={{ margin: 0, background: titleBackground }}
      >
        <Header
          fontSize={fontSize}
          color={isActive(options, pathname) ? optionHoverBackground : color}
          fontWeight={fontWeight}
        >
          {title}
        </Header>
        {!expand ? (
          <HiChevronDown
            color={
              isActive(options, pathname) ? optionHoverBackground : iconColor
            }
            size={"20px"}
            className="ml-2"
          />
        ) : (
          <HiChevronUp
            color={
              isActive(options, pathname) ? optionHoverBackground : iconColor
            }
            size={"20px"}
            className="ml-2"
          />
        )}
      </StyledButton>
      <AnimatePresence exitBeforeEnter>
        {expand && (
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            exit={{ scaleY: 0, opacity: 0 }}
            className="dropdown-wrapper"
          >
            <DropdownOptionsContainer>
              {options.map((option) => (
                <DropdownOption
                  setNav={setNav}
                  optionHoverBackground={optionHoverBackground}
                  optionBackground={optionBackground}
                  fontSize={fontSize}
                  color={color}
                  onSelect={() => {
                    onSelect && onSelect();
                    setExpand(false);
                  }}
                  option={option}
                  key={option.name}
                  fontWeight={fontWeight}
                  pathname={pathname}
                />
              ))}
            </DropdownOptionsContainer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
export default React.memo(Dropdown);
