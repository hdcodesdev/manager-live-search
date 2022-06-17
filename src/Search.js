import React, { useState } from "react";
import "./Search.css";
import SearchResults from "./SearchResults";
import useGetEmployees from "./useGetEmployees";

function Search() {
  const [selectedEmployee, setSelectedEmployee] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const [searchActive, setSearchActive] = useState(false);
  const [searchedEmployees, setSearchedEmployees] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);

  const employees = useGetEmployees();
  const employeeIndex = employees.length;

  const handleKeyUp = (e) => {
    setActiveIndex(
      (prevIndex) => (prevIndex + employeeIndex - 1) % employeeIndex
    );

    console.log(activeIndex);
  };

  const handleKeyDown = (e) => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % employeeIndex);
    console.log(activeIndex);
  };

  const inputFocus = (e) => {
    if (employees && employees.length) setSearchActive(true);
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
    setSelectedEmployee(value);
  };

  const submitSearch = (e) => {
    e.preventDefault();
  };

  const handleSelectdEmployee = (employeeName) => {
    setSelectedEmployee(employeeName);
    setSearchActive(false);
  };

  return (
    <div className="search">
      <div className="search__input">
        <form>
          <input
            type="text"
            value={selectedEmployee}
            onFocus={inputFocus}
            onChange={inputChange}
            onKeyUp={handleKeyUp}
            onKeyDown={handleKeyDown}
            placeholder="Choose Manager"
            aria-label="Manager"
            aria-expanded={searchActive ? true : false}
          />
          <button
            className={searchActive ? "search--active" : ""}
            onClick={submitSearch}
            type="submit"
            aria-label="Search"
          ></button>
        </form>
      </div>
      {employees.length > 0 && searchActive && (
        <SearchResults
          employees={isFiltered ? searchedEmployees : employees}
          onEmployeeClick={handleSelectdEmployee}
          activeIndex={activeIndex}
        />
      )}
    </div>
  );
}

export default Search;
