import React, { useState } from "react";
import "./Search.css";
import SearchResults from "./SearchResults";
import useGetEmployees from "./useGetEmployees";

function Search() {
  const [searchActive, setSearchActive] = useState(false);
  const employees = useGetEmployees();

  const inputFocus = (e) => {
    setSearchActive(true);
  };
  const inputBlur = (e) => {
    setSearchActive(false);
  };

  const submitSearch = (e) => {
    e.preventDefault();
  };

  console.log(employees);
  return (
    <div className="search">
      <div className="search__input">
        <form>
          <input
            type="text"
            onFocus={inputFocus}
            onBlur={inputBlur}
            placeholder="Choose Manager"
          />
          <button
            className={searchActive ? "search__active" : ""}
            onClick={submitSearch}
            type="submit"
          ></button>
        </form>
      </div>
      {searchActive && <SearchResults />}
    </div>
  );
}

export default Search;
