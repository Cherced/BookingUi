import React from "react";

import { Line } from "react-chartjs-2";



const MyChart = () => (
  <div>
    <Line data={data} options={options} />
  </div>
);

export default MyChart;
