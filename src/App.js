import { useEffect } from "react";
import "./App.css";
import Search from "./Search";

function App() {
  useEffect(() => {
    const fetchEmployees = async () => {
      await fetch(
        `https://gist.githubusercontent.com/daviferreira/41238222ac31fe36348544ee1d4a9a5e/raw/5dc996407f6c9a6630bfcec56eee22d4bc54b518/employees.json`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    };
    fetchEmployees();
  }, []);

  return (
    <div className="app">
      <div className="app__body">
        <Search />
      </div>
    </div>
  );
}

export default App;
