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

          const employeesList = baseData.map((manager) => {
            const email = includedData.filter(
              (account) => account.id === manager.relationships.account.data.id
            );

            return {
              id: manager.id,
              name: manager.attributes.name,
              email: email[0].attributes.email,
            };
          });

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
