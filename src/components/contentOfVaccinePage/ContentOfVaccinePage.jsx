import { Container } from '@mui/system'
import VaccineEfficacyChart from './vaccineEfficacyChart/VaccineEfficacyChart'
import VaccineEfficacyChartSmallScreen from './vaccineEfficacyChart/VaccineEfficacyChartSmallScreen'
import BrowseVaccineContent from './browseVaccineContent/BrowseVaccineContent'
import ChartData from './chartData/ChartData'
import { useMediaQuery } from '@mui/material'
import ChartDataSmallScreen from './chartData/ChartDataSmallScreen'

const ContentOfVaccinePage = () => {
  const isSmallScreen = useMediaQuery('(min-width: 825px)')
  return (
    <Container>
      {isSmallScreen ? (
        <VaccineEfficacyChart />
      ) : (
        <VaccineEfficacyChartSmallScreen />
      )}
      {isSmallScreen ? <ChartData /> : <ChartDataSmallScreen />}
      <BrowseVaccineContent />
    </Container>
  )
}

export default ContentOfVaccinePage
