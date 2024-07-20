// src/App.js
import React from "react";
import Button from "../src/components/ButtonComponent";
import List from "../src/components/ListComponent";
import CheckboxList from "../src/components/CheckboxList";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="button-group">
        <Button text="Done" className="button-1" />
        <Button text="Done" className="button-2" />
        <Button text="Done" className="button-3" />
      </div>
      <List />
      <CheckboxList />
    </div>
  );
};

export default App;
