import React from "react";

const Button = ({
  text,
  onSubmit,
  color = "#4260f5",
  textColor = "black",
  ...rest
}) => {
  return (
    <div className="d-grid">
      <button
        type="button"
        className="btn mb-3"
        onClick={onSubmit}
        style={{ backgroundColor: color, color: textColor }}
        {...rest}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
