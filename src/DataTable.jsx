// DataTable.js
import React, { useState } from "react";

const DataTable = ({ data, onCheckboxChange }) => {
  const [checkedRows, setCheckedRows] = useState(Array(5).fill(true));

  const handleCheckboxChange = (index) => {
    const newCheckedRows = [...checkedRows];
    newCheckedRows[index] = !newCheckedRows[index];
    setCheckedRows(newCheckedRows);
    onCheckboxChange(newCheckedRows);
  };

  return (
    <table className="table">
      <thead className="thead-dark">
        <tr>
          <th></th>
          <th>Item Id</th>
          <th>Item Name</th>
          <th>Item Value</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={row.id}>
            <td>
              <input
                type="checkbox"
                checked={checkedRows[index]}
                onChange={() => handleCheckboxChange(index)}
              />
            </td>
            <td>{row.id}</td>
            <td>{row.name}</td>
            <td>{row.numericValue}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
