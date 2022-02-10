import * as React from "react";
import "./search.css";
import ClearIcon from "@mui/icons-material/Clear";
import SearchIcon from "@mui/icons-material/Search";
const Search = ({
  deleteInput,
  handleInput,
  filteredData,
  fillInput,
  currVal,
  handleEnter,
  searchInput,
}) => {
  return (
    <div className="container">
      <div className="searchBar">
        <input
          type="text"
          onKeyUp={handleEnter}
          onChange={handleInput}
          value={currVal}
          placeholder="Enter a movie name ..."
        />
        <div className="icon">
          {currVal.length > 0 ? (
            <ClearIcon onClick={deleteInput} />
          ) : (
            <SearchIcon onClick={searchInput} />
          )}
        </div>
      </div>
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
