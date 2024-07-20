// src/List.js
import React, { useState } from "react";
import Checkbox from "../components/CheckBoxComponent";
import "../styles/List.css";

const List = () => {
  const [items, setItems] = useState([
    { label: "Page 1", checked: false },
    { label: "Page 2", checked: false },
    { label: "Page 3", checked: false },
    { label: "Page 4", checked: false },
  ]);

  const toggleCheckbox = (index) => {
    const newItems = [...items];
    newItems[index].checked = !newItems[index].checked;
    setItems(newItems);
  };

  const toggleAllCheckboxes = () => {
    const allChecked = items.every((item) => item.checked);
    const newItems = items.map((item) => ({ ...item, checked: !allChecked }));
    setItems(newItems);
  };

  return (
    <div className="list">
      <Checkbox
        label="All pages"
        checked={items.every((item) => item.checked)}
        onChange={toggleAllCheckboxes}
      />
      <hr className="divider" />

      {items.map((item, index) => (
        <Checkbox
          key={index}
          label={item.label}
          checked={item.checked}
          onChange={() => toggleCheckbox(index)}
        />
      ))}
      <hr className="divider" />
      <button className="button">Done</button>
    </div>
  );
};

export default List;
