import { useTranslation } from '../../shared/translations/translationsImports'

import {
  ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Line,
} from '../shared/chartComponents/chartComponents'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

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

const VaccineEfficacyChart = () => {
  const { t } = useTranslation()

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
        text: t('The efficiency'),
        font: {
          family: "'Open Sans', sans-serif",
          size: window.innerWidth > 930 ? 30 : 20,
        },
        color: '#053f68',
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: t('Time from Randomization (Day)'),
          font: {
            family: "'Open Sans', sans-serif",
            size: window.innerWidth > 930 ? 20 : 10,
          },
          color: '#376586',
        },
      },
      y: {
        title: {
          display: true,
          text: t('Cumulative'),
          font: {
            family: "'Open Sans', sans-serif",
            size: window.innerWidth > 930 ? 20 : 10,
          },
          color: '#376586',
        },
      },
    },
  }

  const data = {
    labels,
    datasets: [
      {
        label: 'T-Vax',
        data: [0, 0.1, 0.1, 0.1, 0.1, 0.2, 0.2, 0.2, 0.3, 0.3, 0.3],

        borderColor: 'rgb(255, 0, 0)',
        backgroundColor: 'rgba(255, 0, 0, 0.5)',
      },
      {
        label: t('Placebo'),
        data: [0, 0.1, 0.1, 0.3, 0.4, 0.5, 1, 1.5, 1.8, 2, 2.5],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  }

  return (
    <Line
      style={{ marginTop: '30px', height: '100%' }}
      options={options}
      data={data}
    />
  )
}

export default VaccineEfficacyChart
