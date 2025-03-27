import React from "react";
import { useLocation } from "react-router-dom";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import "./GraphPage.css"; // External CSS file

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// Function to generate stock graph data with spread x-values
const generateRandomGraphData = () => {
  const data = [];
  let x = 1; // Start x-axis from 1

  for (let i = 0; i < 10; i++) {
    const y = (Math.random() * 6 - 3).toFixed(2); // Random y (-3.0 to 3.0)
    data.push({ x, y: parseFloat(y) }); // Ensure x is increasing
    x += 10; // Increment x evenly to spread points (1, 11, 21, ..., 100)
  }

  return data;
};

// Chart options
const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      title: { display: true, text: "Time (1-100)" },
      type: "linear",
      min: 1,
      max: 100,
    },
    y: {
      title: { display: true, text: "Points Multiplier (-3.0 to 3.0)" },
      min: -3,
      max: 3,
    },
  },
};

const GraphPage = () => {
  const location = useLocation();
  const teams = location.state?.teams || [];

  // Generate three random datasets
  const graphs = [
    { label: "Stock Trend 1", data: generateRandomGraphData(), borderColor: "#FF5733" },
    { label: "Stock Trend 2", data: generateRandomGraphData(), borderColor: "#33FF57" },
    { label: "Stock Trend 3", data: generateRandomGraphData(), borderColor: "#337BFF" },
  ];

  return (
    <div className="graph-page">
      <h2 className="graph-title">Stock Market Graphs</h2>
      <div className="graph-container">
        {graphs.map((graph, index) => (
          <div key={index} className="graph-box">
            <h3 className="graph-label">{graph.label}</h3>
            <div className="chart-wrapper">
              <Line
                data={{
                  datasets: [
                    {
                      label: graph.label,
                      data: graph.data,
                      borderColor: graph.borderColor,
                      fill: false,
                      tension: 0.3, // Smooth curve
                    },
                  ],
                }}
                options={chartOptions}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GraphPage;
