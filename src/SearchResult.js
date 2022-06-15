import React from "react";
import "./SearchResult.css";

function SearchResult({ initials, name, email }) {
  return (
    <div className="searchResult">
      <div className="searchResult__avatar">
        <p>{initials}</p>
      </div>
      <div className="searchResult__info">
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default SearchResult;
