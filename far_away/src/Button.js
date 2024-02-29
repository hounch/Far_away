import React from "react";

const Button = (textColor, bgColor, onClick, children) => {
  return (
    <button
      style={{ color: textColor, backgroundColor: bgColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
// textColor, bgColor, onClick
export default Button;
