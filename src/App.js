import React, { Component } from "react";
import Usage from "./components/toggel";
import UsageContext from "./components/toggelContext";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Usage />
        <UsageContext />
      </div>
    );
  }
}

export default App;
