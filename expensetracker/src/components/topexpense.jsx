import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const TopExpense = ({ categoryTotals, totalExpenses }) => {
  const data = {
    labels: Object.keys(categoryTotals),
    datasets: [
      {
        label: 'Expense Percentage',
        data: Object.values(categoryTotals).map((expense) => (expense / totalExpenses) * 100),
        backgroundColor: ['#8e44ad', '#e74c3c', '#f1c40f'],
        hoverBackgroundColor: ['#9b59b6', '#e57373', '#f39c12'],
      },
    ],
  };

  const options = {
    indexAxis: 'y', // Display bars horizontally
    scales: {
      x: {
        min: 0,
        max: 100,
        ticks: {
          stepSize: 20, // Customize step size for x-axis ticks
        },
      },
    },
    plugins: {
      legend: {
        display: false, // Hide the default legend
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const label = context.dataset.label || '';
            const value = context.formattedValue + '%';
            return `${label}: ${value}`;
          },
        },
      },
    },
  };

  return (
    <div className="chart" style={{ backgroundColor: '#4d4d4d', padding: '20px', borderRadius: '10px' }}>
        <h3>Top Expenses</h3>
      <Bar data={data} options={options} />
    </div>
  );
};

export default TopExpense;