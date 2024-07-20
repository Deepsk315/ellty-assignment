import React from "react";
import "../styles/Button.css";

const Button = ({ text, className }) => {
  return (
    <>
      <div className="buttonContainer">
        <button className={`button ${className}`}>{text}</button>
      </div>
    </>
  );
};

export default Button;
