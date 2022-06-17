import React, { useEffect, useState } from "react";
import { getEmployeesFromApi } from "./api/api";

function useGetEmployees() {
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    const fetchEmployees = async () => {
      await getEmployeesFromApi()
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
              initials:
                manager.attributes.firstName[0] +
                manager.attributes.lastName[0],
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
