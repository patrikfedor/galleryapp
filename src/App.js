import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import CategoryGalery from "./components/categoryGalery";
import DetailGalery from "./components/detailGalery";

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
          <Switch>
            <CategoryGalery />
            <Route path="/architecture" component={DetailGalery} />
            <Route path="/" component={CategoryGalery} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
