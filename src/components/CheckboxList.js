import React from "react";
import "../styles/MultiCheckboxes.css";
import CustomCheckbox from "./CustomCheckbox";

const CheckboxList = () => {
  const checkboxes = [
    { active: false, checked: false, style: "style2", isEmpty: true },
    { active: true, checked: true, style: "style2", isEmpty: false },
    { active: true, checked: true, style: "style3", isEmpty: false },
    { active: false, checked: true, style: "style4", isEmpty: false },
    { active: false, checked: true, style: "style5", isEmpty: false },
    { active: false, checked: true, style: "style6", isEmpty: false },
    { active: false, checked: true, style: "style5", isEmpty: false },
    { active: true, checked: true, style: "style8", isEmpty: true },
  ];

  return (
    <div className="multi-checkboxes">
      {checkboxes.map((checkbox, index) => (
        <label key={index} className="checkbox-multi-label">
          All pages
          <CustomCheckbox style={checkbox.style} isEmpty={checkbox.isEmpty} />
        </label>
      ))}
    </div>
  );
};

export default CheckboxList;
