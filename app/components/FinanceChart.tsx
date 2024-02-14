import React from "react";
import "chart.js/auto";
import { Line } from "react-chartjs-2";
import "chartjs-adapter-date-fns"; // Import the adapter

const FinanceChart = ({ data }) => {
  if (data == null) {
    return;
  }
  if (!data.results || data.resultsCount === 0) {
    return (
      <div
        style={{
          backgroundColor: "#FF7F7F",
          borderColor: "red",
          borderWidth: 3,
          borderStyle: "solid",
          borderRadius: 25,
          width: 150,
          padding: 5,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p>No results found</p>
      </div>
    );
  }

  const chartData = {
    labels: data.results.map((result) => new Date(result.t)),
    datasets: [
      {
        label: data.ticker + " Close Price",
        data: data.results.map((result) => result.c),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: "time",
        time: {
          unit: "day",
        },
        title: {
          display: true,
          text: "Date",
        },
      },
      y: {
        title: {
          display: true,
          text: "Close Price ($)",
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
    },
    responsive: true,
    maintainAspectRatio: true,
  };

  return (
    <div style={{ width: 600 }}>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default FinanceChart;
