import React from 'react'
import {
    Chart as ChartJS,
    LinearScale,
    PointElement,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bubble } from 'react-chartjs-2';
  import faker from 'faker';

export default function GraphContainer2() {
    ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

    const  options = {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
        maintainAspectRatio : false
        
      };
       const  data = {
        datasets: [
          {
            label: 'Red dataset',
            data: Array.from({ length: 50 }, () => ({
              x: faker.datatype.number({ min: -100, max: 100 }),
              y: faker.datatype.number({ min: -100, max: 100 }),
              r: faker.datatype.number({ min: 5, max: 20 }),
            })),
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
          {
            label: 'Blue dataset',
            data: Array.from({ length: 50 }, () => ({
              x: faker.datatype.number({ min: -100, max: 100 }),
              y: faker.datatype.number({ min: -100, max: 100 }),
              r: faker.datatype.number({ min: 5, max: 20 }),
            })),
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
        ],
      };

    return (

        
        <div>
            <Bubble  data={data} options={options} />
         <h3 className="graphTitle">Comparison Between two Data</h3>
        </div>
    )
}
