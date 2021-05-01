import React, { useEffect, useState } from 'react';

import Chart from 'chart.js/auto';

const WeatherChart = () => {
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    const canvas = document.getElementById('weather-chart');
    const labels = ['January', 'February', 'March', 'April', 'May', 'June'];
    const data = {
      labels: labels,
      datasets: [
        {
          label: false,
          data: [65, 59, 70, 51, 76, 65, 40],
          fill: {
            target: 'origin',
            above: 'rgba(254, 205, 104, 0.4)',
          },
          borderColor: 'rgb(254, 205, 104)',
          pointRadius: 0,
          pointHoverRadius: 5,
          pointHitRadius: 10,
          tension: 0.4,
          borderCapStyle: 'round',
          spanGaps: true,
        },
      ],
    };

    const config = {
      type: 'line',
      data,
      options: {
        plugins: {
          legend: {
            display: false,
          },
          layout: {
            padding: {
              left: -100,
            },
          },
        },
        scales: {
          x: {
            beginAtZero: true,
            display: false,
            grid: {
              display: false,
              drawBorder: false,
              color: '#66aaff',
            },
          },
          y: {
            beginAtZero: true,
            display: false,
            grid: {
              display: false,
              drawBorder: false,
              color: '#66aaff',
            },
          },
        },
      },
    };

    new Chart(canvas, config);

    setToggle('false');
  }, []);

  return (
    <div>
      {toggle && <canvas id="weather-chart" width="400" height="400" />}
      <button onClick={() => setToggle(toggle + 1)}>
        Toggle State {toggle}
      </button>
    </div>
  );
};

export default WeatherChart;
