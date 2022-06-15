import React from "react";
import "./Search.css";

function Search() {
  return (
    <div className="search">
      <div className="search__input">
        <form>
          <input type="text" placeholder="Choose Manager" />
          <button type="submit">Search</button>
        </form>
      </div>
      <div className="searchResults">
        {/* <div className="searchResult"></div> */}
        {/* <SearchResult /> */}
      </div>
    </div>
  );
}

export default Search;
