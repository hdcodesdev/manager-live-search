import React, { useEffect, useRef } from "react";
import "./SearchResult.css";

function SearchResult({ initials, name, email, onEmployeeClick, isActive }) {
  const itemRef = useRef();

  useEffect(() => {
    if (isActive && itemRef.current) {
      itemRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [isActive]);

  return (
    <div
      className="searchResult"
      aria-selected={isActive ? "true" : "false"}
      onClick={onEmployeeClick}
      ref={itemRef}
    >
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
