export const getEmployeesFromApi = () => {
  return fetch(
    `https://gist.githubusercontent.com/daviferreira/41238222ac31fe36348544ee1d4a9a5e/raw/5dc996407f6c9a6630bfcec56eee22d4bc54b518/employees.json`
  ).then((respnse) => {
    if (respnse.status === 200) return respnse.json();
    else throw new Error("Invalid response");
  });
};
