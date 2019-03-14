import React, { Component } from "react";

import Modal from "./UI/modal";
import AddPhoto from "../components/addPhoto";

import architectureMain from "../assets/images/thumb/architecture-main.jpeg";
import architecture02 from "../assets/images/thumb/architecture-02.jpeg";
import architecture03 from "../assets/images/thumb/architecture-03.jpeg";
import architecture04 from "../assets/images/thumb/architecture-04.jpeg";
import architecture05 from "../assets/images/thumb/architecture-05.jpeg";
import architecture06 from "../assets/images/thumb/architecture-06.jpg";

class DetailGalery extends Component {
  state = {
    addingPhoto: false
  };

  addPhotoHandler = () => {
    this.setState({ addingCategory: true });
  };

  addPhotoCancelHandler = () => {
    this.setState({ addingCategory: false });
  };

  render() {
    let addPhoto = null;

    if (this.state.addingPhoto) {
      addPhoto = <AddPhoto clicked={this.addPhotoCancelHandler} />;
    }

    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="galeryitem">
                <img src={architectureMain} alt="architecture_main" />
              </div>
            </div>
            <div className="col-md-3">
              <div className="galeryitem">
                <img src={architecture02} alt="Architecture" />
              </div>
            </div>
            <div className="col-md-3">
              <div className="galeryitem">
                <img src={architecture03} alt="people" />
              </div>
            </div>
            <div className="col-md-3">
              <div className="galeryitem">
                <img src={architecture04} alt="food" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <div className="galeryitem">
                <img src={architecture05} alt="food" />
              </div>
            </div>
            <div className="col-md-3">
              <div className="galeryitem">
                <img src={architecture06} alt="Architecture" />
              </div>
            </div>
            <div className="col-md-3">
              <div className="addcategory">
                <div className="container">
                  <i className="addphotoicon" onClick={this.addPhotoHandler} />
                  <p onClick={this.addPhotoHandler}>Pridať fotky</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Modal
          show={this.state.addingPhoto}
          modalClosed={this.addPhotoCancelHandler}
        >
          {addPhoto}
        </Modal>
      </React.Fragment>
    );
  }
}

export default DetailGalery;
