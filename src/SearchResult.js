import React from "react";
import "./SearchResult.css";

function SearchResult({ initials, name, email, onEmployeeClick }) {
  return (
    <div className="searchResult" onClick={onEmployeeClick}>
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
