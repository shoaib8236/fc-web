import React from "react";

const Button = (props) => {
  const { red, light, dark, lg, md, sm, children, className, onClick, htmlType = "button" } = props;
  return (
    <>
      <button
        type={htmlType}
        onClick={onClick}
        className={`styled-btn ${
          (red && "red") ||
          (light && "light") ||
          (dark && "dark") ||
          "default-clr"
        } ${(sm && "sm") || (md && "md") || "lg"} ${
          className ? className : ""
        }`}>
        {children}
      </button>
    </>
  );
};

export default React.memo(Button);
