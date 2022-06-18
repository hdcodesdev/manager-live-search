import React, { useEffect, useState } from "react";
import { getEmployeesFromApi } from "./api";

function useGetEmployees() {
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    const fetchEmployees = async () => {
      const employees = await getEmployeesFromApi();
      setEmployees(employees);
    };
    fetchEmployees();
  }, []);

  return employees;
}

export default useGetEmployees;
