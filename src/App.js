import logo from "./logo.svg";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import DataTable from "./DataTable";
import BarChart from "./BarChart";
import { useState } from "react";

function App() {
  const [checkedRows, setCheckedRows] = useState(Array(5).fill(true));

  const handleCheckboxChange = (newCheckedRows) => {
    setCheckedRows(newCheckedRows);
  };
  const data = [
    { id: 1, name: "Item 1", numericValue: 10 },
    { id: 2, name: "Item 2", numericValue: 30 },
    { id: 3, name: "Item 3", numericValue: 20 },
    { id: 4, name: "Item 4", numericValue: 80 },
    { id: 5, name: "Item 5", numericValue: 60 },
  ];

  return (
    <div className="App container">
      <DataTable data={data} onCheckboxChange={handleCheckboxChange} />
      <BarChart data={data} checkedRows={checkedRows} />
    </div>
  );
}

export default App;
