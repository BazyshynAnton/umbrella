import { Container, useMediaQuery } from '../shared/ui/MUIglobal/muiGlobal'
import {
  lazy,
  Suspense,
} from '../shared/ui/reactImportsGlobal/reactImportsGlobal'

import VaccineEfficacyChart from './vaccineEfficacyChart/VaccineEfficacyChart'
import BrowseVaccineContent from './browseVaccineContent/BrowseVaccineContent'
import ChartData from './chartData/ChartData'

const ChartDataSmallScreen = lazy(() =>
  import('./chartData/ChartDataSmallScreen')
)
const PieChartForMobile = lazy(() =>
  import('./vaccineEfficacyChart/PieChartForMobile')
)
const VaccineEfficacyChartSmallScreen = lazy(() =>
  import('./vaccineEfficacyChart/VaccineEfficacyChartSmallScreen')
)

const ContentOfVaccinePage = () => {
  const isSmallScreen = useMediaQuery('(min-width: 825px)')
  const isSmallScreenTwo = useMediaQuery('(min-width: 450px)')
  return (
    <Container>
      {isSmallScreen ? (
        <VaccineEfficacyChart />
      ) : isSmallScreenTwo ? (
        <Suspense>
          <VaccineEfficacyChartSmallScreen />
        </Suspense>
      ) : (
        <Suspense>
          <PieChartForMobile />
        </Suspense>
      )}
      {isSmallScreen ? (
        <ChartData />
      ) : (
        <Suspense>
          <ChartDataSmallScreen />
        </Suspense>
      )}
      <BrowseVaccineContent />
    </Container>
  )
}

export default ContentOfVaccinePage
