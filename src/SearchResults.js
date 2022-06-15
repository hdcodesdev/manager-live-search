import React from "react";
import "./SearchResults.css";
import SearchResult from "./SearchResult";

function SearchResults() {
  return (
    <div className="searchResults">
      <SearchResult
        initials="HD"
        name="Harinder Dulai"
        email="harinder.dulai@test.com"
      />
    </div>
  );
}

export default SearchResults;
