// src/components/CheckboxList.js
import React from "react";
import "../styles/MultiCheckboxes.css";

const CheckboxList = () => {
  // const checkboxes = Array(8).fill(true);
  const checkboxes = [
    { active: false, checked: false },
    { active: true, checked: true },
    { active: true, checked: true },
    { active: false, checked: true },
    { active: false, checked: true },
    { active: false, checked: true },
    { active: false, checked: true },
    { active: true, checked: true },
  ];

  return (
    <div className="multi-checkboxes">
      {checkboxes.map((checked, index) => (
        <label key={index} className="checkbox-multi-label">
          All pages
          <input
            type="checkbox"
            disabled={checked.active}
            defaultChecked={checked.checked}
          />
        </label>
      ))}
    </div>
  );
};

export default CheckboxList;
