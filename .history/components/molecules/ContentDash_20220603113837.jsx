import React from "react";
import { Chart as ChartJS } from 'chart.js/auto'
import { Chart, Line } from "react-chartjs-2";



export const ContentDash = () => {
  return (
    <header className="mainDashContainer">
      <Line data={data} options={options} />
    </header>
  );
};
