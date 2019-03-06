import React from "react";

const SearchBox = ({ searchChange }) => {
  return (
    <div className="pa2 mt-5 text-end">
      {" "}      <label htmlFor="searchDay">Search Day</label>
      <form className="form-inline my-2 my-lg-0">
     
        <input
        id="searchDay"
          className="form-control mr-sm-2"
          type="search"
          placeholder="write a day no"
          aria-label="Search"
          onChange={searchChange}
        />
   
      </form>
    </div>
  );
};

export default SearchBox;
