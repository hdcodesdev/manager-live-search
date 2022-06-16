import React, { useState } from "react";
import "./Search.css";
import SearchResults from "./SearchResults";
import useGetEmployees from "./useGetEmployees";

function Search() {
  const [searchActive, setSearchActive] = useState(false);
  const [searchedEmployees, setSearchedEmployees] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);
  const employees = useGetEmployees();

  const inputFocus = (e) => {
    setSearchActive(true);
  };
  const inputBlur = (e) => {
    setSearchActive(false);
  };

  const inputChange = (e) => {
    const { value } = e.target;
    const filteredEmployees = employees.filter((employee) => {
      const employeeName = employee.name.replace(/\s+/g, "").toLowerCase();
      return employeeName.includes(value.toLowerCase().replace(/\s+/g, ""));
    });

    if (filteredEmployees.length) {
      setSearchedEmployees(filteredEmployees);
      setSearchActive(true);
      setIsFiltered(true);
    } else {
      setSearchedEmployees([]);
      setSearchActive(false);
      setIsFiltered(false);
    }
  };

  const submitSearch = (e) => {
    e.preventDefault();
  };

  return (
    <div className="search">
      <div className="search__input">
        <form>
          <input
            type="text"
            onFocus={inputFocus}
            onBlur={inputBlur}
            onChange={inputChange}
            placeholder="Choose Manager"
          />
          <button
            className={searchActive ? "search__active" : ""}
            onClick={submitSearch}
            type="submit"
          ></button>
        </form>
      </div>
      {employees.length > 0 && searchActive && (
        <SearchResults employees={isFiltered ? searchedEmployees : employees} />
      )}
    </div>
  );
}

export default Search;
