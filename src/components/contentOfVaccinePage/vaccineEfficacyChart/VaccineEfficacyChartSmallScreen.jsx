import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

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
      color: '#376586',
    },
  },
}

const labels = [
  '0',
  '10',
  '20',
  '30',
  '40',
  '50',
  '70',
  '80',
  '90',
  '100',
  '110',
]

const data = {
  labels,
  datasets: [
    {
      label: 'Umbrella-Vaccine',
      data: [0, 0.1, 0.1, 0.1, 0.1, 0.2, 0.2, 0.2, 0.3, 0.3, 0.3],

      borderColor: 'rgb(255, 0, 0)',
      backgroundColor: 'rgba(255, 0, 0, 0.5)',
    },
    {
      label: 'Placebo',
      data: [0, 0.1, 0.1, 0.3, 0.4, 0.5, 1, 1.5, 1.8, 2, 2.5],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
}

const VaccineEfficacyChart = () => {
  return (
    <Line
      style={{ marginTop: '30px', height: '100%' }}
      options={options}
      data={data}
    />
  )
}

export default VaccineEfficacyChart
