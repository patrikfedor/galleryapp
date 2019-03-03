import React from "react";
import { Button } from "reactstrap";
import "../css/AddCategory.css";

const addPhoto = () => {
  return (
    <div className="container">
      <h1>Pridať Fotky</h1>
      <div className="droparea">
        <i className="addphotoicon" onClick={this.addPhotoHandler} />
        <p>Sem presunte fotky</p>
        <br>
          <p>alebo</p>
        </br>
        <button className="simplegrey">Vyberte Súbory</button>
      </div>
      <Button color="success">+Pridať</Button>
    </div>
  );
};

export default addPhoto;
