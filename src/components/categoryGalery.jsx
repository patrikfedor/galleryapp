import React, { Component } from "react";

import { NavLink } from "react-router-dom";
import Modal from "./UI/modal";
import Aux from "../hoc/Aux";
import AddCategory from "../components/addCategory";

import nature from "../assets/images/thumb/landscape-meadow-field-mountains.jpeg";
import architecture from "../assets/images/thumb/architecture-main.jpeg";
import people from "../assets/images/thumb/people-face-woman.jpg";
import food from "../assets/images/thumb/food-salad-healthy-lunch.jpg";
import car from "../assets/images/thumb/car.jpeg";

class CategoryGalery extends Component {
  state = {
    addingCategory: false
  };

  addCategoryHandler = () => {
    this.setState({ addingCategory: true });
  };

  addCategoryCancelHandler = () => {
    this.setState({ addingCategory: false });
  };

  render() {
    let addCategory = null;

    if (this.state.addingCategory) {
      addCategory = <AddCategory clicked={this.addCategoryCancelHandler} />;
    }

    return (
      <Aux>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="galeryitem">
                <img src={nature} alt="Nature" />
                <h4>Príroda</h4>
                <p />
              </div>
            </div>
            <div className="col-md-3">
              <NavLink to="/architecture">
                <div className="galeryitem">
                  <img src={architecture} alt="Architecture" />
                  <h4>Architektúra</h4>
                  <p>6 fotiek</p>
                </div>
              </NavLink>
            </div>
            <div className="col-md-3">
              <div className="galeryitem">
                <img src={people} alt="people" />
                <h4>Ľudia</h4>
                <p />
              </div>
            </div>
            <div className="col-md-3">
              <div className="galeryitem">
                <img src={food} alt="food" />
                <h4>Jedlo</h4>
                <p />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <div className="galeryitem">
                <img src={car} alt="car" />
                <h4>Autá</h4>
                <p />
              </div>
            </div>
            <div className="col-md-3">
              <div className="addcategory">
                <div className="container">
                  <i className="addicon" onClick={this.addCategoryHandler} />
                  <p onClick={this.addCategoryHandler}>Pridať kategóriu</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Modal
          show={this.state.addingCategory}
          modalClosed={this.addCategoryCancelHandler}
        >
          {addCategory}
        </Modal>
      </Aux>
    );
  }
}

export default CategoryGalery;
