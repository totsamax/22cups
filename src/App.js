import React, { Component } from "react";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route } from "react-router-dom";
import FirstCup from "./components/FirstCup";
import Navbar from "./components/Navbar";
import Registration from "./components/Registration";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route path="/" component={FirstCup} />
          <Route exact path="/reg" component={Registration} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
