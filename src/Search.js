import React from "react";
import "./Search.css";
import SearchResult from "./SearchResult";
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
      <div className="searchResults">
        <SearchResult
          initials="HD"
          name="Harinder Dulai"
          email="harinder.dulai@test.com"
        />
      </div>
    </div>
  );
}

export default Search;
