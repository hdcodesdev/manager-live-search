import React from "react";
import "./SearchResults.css";
import SearchResult from "./SearchResult";

function SearchResults({ employees, onEmployeeClick }) {
  return (
    <div className="searchResults">
      {employees.map((employee) => (
        <SearchResult
          key={employee.id}
          initials={employee.initials}
          name={employee.name}
          email={employee.email}
          onEmployeeClick={() => onEmployeeClick(employee.name)}
        />
      ))}
    </div>
  );
}

export default SearchResults;
