import React from "react";
import "./SearchResults.css";
import SearchResult from "./SearchResult";

function SearchResults({ employees, onEmployeeClick, activeIndex }) {
  return (
    <div className="searchResults" aria-label="Employees list">
      {employees.map((employee, index) => (
        <SearchResult
          key={employee.id}
          initials={employee.initials}
          name={employee.name}
          email={employee.email}
          onEmployeeClick={() => onEmployeeClick(employee.name, index)}
          isActive={activeIndex === index}
        />
      ))}
    </div>
  );
}

export default SearchResults;
