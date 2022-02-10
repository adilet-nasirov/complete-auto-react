import React from "react";
import "./App.css";
import data from "./data";
import Search from "./Components/Search";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currVal: "",
      filteredArr: [],
    };
  }

  handleInput = (e) => {
    let val = e.target.value;
    // console.log(val);
    if (val.length !== 0) {
      const filtered = data.filter((film) =>
        film.label.toLowerCase().includes(val.toLowerCase())
      );
      this.setState({ currVal: val, filteredArr: filtered });
    } else {
      this.setState({ filteredArr: [], currVal: "" });
    }
  };

  fillInput = (e) => {
    // console.log(e.target.innerText);
    this.setState({ currVal: e.target.innerText });
  };

  handleEnter = (e) => {
    if (e.keyCode === 13) {
      this.setState({ currVal: this.state.filteredArr[0].label });
    }
  };
  render() {
    // console.log(this.state);
    return (
      <div className="App">
        <Search
          handleInput={this.handleInput}
          filteredData={this.state.filteredArr}
          fillInput={this.fillInput}
          currVal={this.state.currVal}
          handleEnter={this.handleEnter}
        />
      </div>
    );
  }
}

export default App;
