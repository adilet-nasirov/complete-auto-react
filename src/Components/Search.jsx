import React from "react";
import TextField from "@mui/material/TextField";

const Search = () => {
  return (
    <div>
      <TextField id="outlined-search" label="Search field" type="search" />
      <TextField
        id="outlined-helperText"
        label="Helper text"
        defaultValue="Default Value"
        helperText="Some important text"
      />
    </div>
  );
};

export default Search;
