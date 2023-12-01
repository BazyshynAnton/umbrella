import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend)

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
      labels: {
        font: {
          family: "'Open Sans', sans-serif",
          size: window.innerWidth > 930 ? 20 : 13,
        },
        color: 'black',
      },
    },
    title: {
      display: true,
      text: 'The efficiency of the Umbrella vaccine (mRNA).',
      font: {
        family: "'Open Sans', sans-serif",
        size: window.innerWidth > 930 ? 30 : 20,
      },
      color: '#053f68',
    },
  },
}

const data = {
  labels: ['Umbrella-Vaccine', 'Placebo'],
  datasets: [
    {
      label: '% efficiency',
      data: [94.1, 5.9],
      backgroundColor: ['rgba(209, 52, 62, 0.3)', 'rgba(53, 162, 235, 0.3)'],
      borderColor: ['rgba(209, 52, 62, 1)', 'rgba(53, 162, 235, 1)'],
      borderWidth: 1,
    },
  ],
}

const PieChartForMobile = () => {
  return <Pie data={data} style={{ marginTop: '35px' }} options={options}></Pie>
}

export default PieChartForMobile
