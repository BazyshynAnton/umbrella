import { Container } from '@mui/system'
import VaccineEfficacyChart from './vaccineEfficacyChart/VaccineEfficacyChart'
import VaccineEfficacyChartSmallScreen from './vaccineEfficacyChart/VaccineEfficacyChartSmallScreen'
import BrowseVaccineContent from './browseVaccineContent/BrowseVaccineContent'
import ChartData from './chartData/ChartData'
import { useMediaQuery } from '@mui/material'
import ChartDataSmallScreen from './chartData/ChartDataSmallScreen'
import PieChartForMobile from './vaccineEfficacyChart/PieChartForMobile'

const ContentOfVaccinePage = () => {
  const isSmallScreen = useMediaQuery('(min-width: 825px)')
  const isSmallScreenTwo = useMediaQuery('(min-width: 450px)')
  return (
    <Container>
      {isSmallScreen ? (
        <VaccineEfficacyChart />
      ) : isSmallScreenTwo ? (
        <VaccineEfficacyChartSmallScreen />
      ) : (
        <PieChartForMobile />
      )}
      {isSmallScreen ? <ChartData /> : <ChartDataSmallScreen />}
      <BrowseVaccineContent />
    </Container>
  )
}

export default ContentOfVaccinePage
