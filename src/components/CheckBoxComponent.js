import React from "react";
import "../styles/CheckBox.css";

const Checkbox = ({ label, checked, onChange }) => {
  return (
    <label className="checkbox-container">
      <span>{label}</span>
      <input type="checkbox" checked={checked} onChange={onChange} />
      {/* <span className="checkmark"></span> */}
    </label>
  );
};

export default Checkbox;
