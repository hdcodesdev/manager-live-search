export const getEmployeesFromApi = () => {
  return fetch(
    `https://gist.githubusercontent.com/daviferreira/41238222ac31fe36348544ee1d4a9a5e/raw/5dc996407f6c9a6630bfcec56eee22d4bc54b518/employees.json`
  )
    .then((respnse) => {
      if (respnse.status === 200) return respnse.json();
      else throw new Error("Invalid response");
    })
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
            manager.attributes.firstName[0] + manager.attributes.lastName[0],
        };
      });

      setEmployees(employeesList);
    })
    .catch((error) => {
      console.log(error);
    });
};
