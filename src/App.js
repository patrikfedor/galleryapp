import React, { Component } from "react";
import Galery from "./components/galery";
import "./css/App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="Background-image" />
        <div className="Background-box" />
        <div className="Content">
          <h2>Fotogaléria</h2>
          <h3>Kategórie</h3>
          <hr />
          <Galery />
        </div>
      </div>
    );
  }
}

export default App;
