import React from "react";
import "./App.css";
import data from "./data";
import Search from "./Components/Search";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currVal: "",
    };
  }
  render() {
    console.log(data);
    return (
      <div className="App">
        <Search />
      </div>
    );
  }
}

export default App;
