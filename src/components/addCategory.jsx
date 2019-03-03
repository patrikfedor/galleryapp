import React from "react";
import { Button } from "reactstrap";
import "../css/AddCategory.css";

const addCategory = () => {
  return (
    <div className="container">
      <h1>Pridať Kategóriu</h1>
      <input type="text" placeholder="Zadajte názov kategórie" />
      <Button color="success">+Pridať</Button>
      <div className="divider" />
    </div>
  );
};

export default addCategory;
