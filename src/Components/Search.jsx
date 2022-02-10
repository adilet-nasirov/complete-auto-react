import * as React from "react";
import "./search.css";
const Search = ({
  handleInput,
  filteredData,
  fillInput,
  currVal,
  handleEnter,
}) => {
  return (
    <div className="container">
      <input
        type="text"
        onKeyUp={handleEnter}
        onChange={handleInput}
        value={currVal}
      />
      <div
        className="output"
        style={
          filteredData.length > 0 ? { display: "block" } : { display: "none" }
        }
      >
        {filteredData.length > 0 ? (
          filteredData.map((item, index) => {
            return (
              <p className="movie" onClick={fillInput} key={index}>
                {item.label}
              </p>
            );
          })
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Search;
