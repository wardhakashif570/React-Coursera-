// import "./styles.css";
import React, { Component } from "react";
import Main from "./component/MainComponent";
import './App.css';
import { BrowserRouter } from 'react-router-dom';

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Main />
        </div>
      </BrowserRouter>

    );
  }
}
export default App;
