// BarChart.js
import React from "react";
import Plot from "react-plotly.js";

const BarChart = ({ data, checkedRows }) => {
  const filteredData = data.filter((_, index) => checkedRows[index]);

  const xValues = filteredData.map((row) => row.name);
  const yValues = filteredData.map((row) => row.numericValue);

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col">
          <Plot
            data={[
              {
                type: "bar",
                x: xValues,
                y: yValues,
              },
            ]}
            layout={{ width: 500, height: 300, title: "Bar Chart" }}
          />
        </div>
      </div>
    </div>
  );
};

export default BarChart;
