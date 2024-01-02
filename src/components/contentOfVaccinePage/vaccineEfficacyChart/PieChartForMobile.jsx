import { useTranslation } from '../../shared/translations/translationsImports'
import {
  ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from '../shared/chartComponents/chartComponents'

import { Pie } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend)

const PieChartForMobile = () => {
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
  }

  const data = {
    labels: ['T-VAX', t('Placebo')],
    datasets: [
      {
        label: t('% efficiency'),
        data: [94.1, 5.9],
        backgroundColor: ['rgba(209, 52, 62, 0.3)', 'rgba(53, 162, 235, 0.3)'],
        borderColor: ['rgba(209, 52, 62, 1)', 'rgba(53, 162, 235, 1)'],
        borderWidth: 1,
      },
    ],
  }

  return <Pie data={data} style={{ marginTop: '35px' }} options={options}></Pie>
}

export default PieChartForMobile
