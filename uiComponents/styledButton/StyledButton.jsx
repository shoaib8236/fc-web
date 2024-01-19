import React from "react";
const StyledButton = (props) => {
  var { children, disabled = false, forDropDown = false, ...restProps } = props;
  return (
    <button
      className={`styledButton ${forDropDown ? "for_dropdown" : "hov_effect" } ${disabled && "disabledBtn"}`}
      {...restProps}
    >
      {children}
    </button>
  );
};
export default React.memo(StyledButton);
