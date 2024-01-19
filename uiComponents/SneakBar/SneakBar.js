import React, { useEffect, useState, useRef, memo, Children } from "react";

const SneakBar = (props) => {
  const { children, showSneakBar, handleSneakBar, className } = props;

  const sneakBarRef = useRef(null);

  // auto hide sneak bar after 3 seconds

  useEffect(() => {
    if (showSneakBar) {
      const hideAnimation = setTimeout(() => {
        // add class to hide sneak bar
        sneakBarRef.current.classList.remove("show_sneakBar");
        sneakBarRef.current.classList.add("hide_sneakBar");
      }, 2800);

      const timer = setTimeout(() => {
        handleSneakBar(false);
      }, 3000);
      return () => {
        clearTimeout(timer);
        clearTimeout(hideAnimation);
      };
    }
  }, [showSneakBar]);

  return (
    <>
      {showSneakBar && (
        <div
          ref={sneakBarRef}
          className={`sneakBar_wrapper ${showSneakBar ? "show_sneakBar" : ""} ${className}`}>
          {children}
        </div>
      )}
    </>
  );
};

export default memo(SneakBar);
