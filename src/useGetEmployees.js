import React, { useEffect, useState } from "react";

function useGetEmployees() {
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    const fetchEmployees = async () => {
      await fetch(
        `https://gist.githubusercontent.com/daviferreira/41238222ac31fe36348544ee1d4a9a5e/raw/5dc996407f6c9a6630bfcec56eee22d4bc54b518/employees.json`
      )
        .then((res) => res.json())
        .then((responseData) => {
          const baseData = responseData.data;
          const includedData = responseData.included;
          const employeeType = "employees";

          const employeesList = [
            ...baseData.filter((item) => item.type === employeeType),
            ...includedData.filter((item) => item.type === employeeType),
          ];

          setEmployees(employeesList);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchEmployees();
  }, []);

  return employees;
}

export default useGetEmployees;
