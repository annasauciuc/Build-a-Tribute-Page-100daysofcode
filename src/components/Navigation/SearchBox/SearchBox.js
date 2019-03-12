import React from "react";
import "./SearchBox.css";
const SearchBox = ({ searchChange, value }) => {
  return (
    <div className="pa2 mt-5 mb-5 d-flex justify-content-center">
      {" "}
      <form className=" align-content-center my-lg-0">
        <input
          value={value}
          id="searchDay"
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search for a day"
          aria-label="Search"
          onChange={searchChange}
        />
      </form>
    </div>
  );
};

export default SearchBox;
