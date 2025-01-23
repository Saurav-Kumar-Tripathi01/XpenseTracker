import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ categoryTotals }) => {
  const data = {
    labels: Object.keys(categoryTotals),
    datasets: [
      {
        data: Object.values(categoryTotals),
        backgroundColor: ["#8e44ad", "#e74c3c", "#f1c40f"],
        hoverBackgroundColor: ["#9b59b6", "#e57373", "#f39c12"],
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <div className="chart" style={{ backgroundColor: '#4d4d4d', padding: '20px', borderRadius: '10px' }}>
      <Pie data={data} options={options} />

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
        <div style={{ display: 'flex', alignItems: 'center', marginRight: '10px' }}>
          <div style={{
            width: '15px',
            height: '15px',
            backgroundColor: '#8e44ad',
            borderRadius: '3px',
            marginRight: '5px'
          }} />
          <span style={{ color: '#8e44ad' }}>Food</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', marginRight: '10px' }}>
          <div style={{
            width: '15px',
            height: '15px',
            backgroundColor: '#e74c3c',
            borderRadius: '3px',
            marginRight: '5px'
          }} />
          <span style={{ color: '#e74c3c' }}>Entertainment</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{
            width: '15px',
            height: '15px',
            backgroundColor: '#f1c40f',
            borderRadius: '3px',
            marginRight: '5px'
          }} />
          <span style={{ color: '#f1c40f' }}>Travel</span>
        </div>
      </div>
    </div>
  );
};

export default PieChart;