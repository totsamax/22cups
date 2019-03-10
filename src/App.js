import React, { Component } from "react";
import "./App.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route } from "react-router-dom";
import FirstCup from "./components/FirstCup";
import Navbar from "./components/Navbar";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Route path = "/" component = {FirstCup}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
