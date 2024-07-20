import React from "react";
import "../styles/MultiCheckboxes.css";
import CheckedLightGrey from "../assets/icons/check_light_grey.svg";
import CheckedDarkGrey from "../assets/icons/check_dark_grey.svg";
import CheckedWhite from "../assets/icons/check_white.svg";

function CustomCheckbox(props) {
  const { style, isEmpty } = props;

  return (
    <div className={style}>
      {!isEmpty && (
        <>
          {(style === "style1" ||
            style === "style4" ||
            style === "style5" ||
            style === "style6" ||
            style === "style7") && <img src={CheckedWhite} alt="" />}

          {(style === "style2" || style === "style8") && (
            <img src={CheckedLightGrey} alt="" />
          )}

          {style === "style3" && <img src={CheckedDarkGrey} alt="" />}
        </>
      )}
    </div>
  );
}

export default CustomCheckbox;
