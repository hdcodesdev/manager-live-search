import React from "react";
import "./Search.css";
import SearchResult from "./SearchResult";
import SearchResults from "./SearchResults";
import useGetEmployees from "./useGetEmployees";

function Search() {
  const employees = useGetEmployees();
  console.log(employees);
  return (
    <div className="search">
      <div className="search__input">
        <form>
          <input type="text" placeholder="Choose Manager" />
          <button type="submit">Search</button>
        </form>
      </div>
      <SearchResults />
    </div>
  );
}

export default Search;
