import { Container } from '@mui/system'
import VaccineEfficacyChart from './vaccineEfficacyChart/VaccineEfficacyChart'
import BrowseVaccineContent from './browseVaccineContent/BrowseVaccineContent'

const ContentOfVaccinePage = () => {
  return (
    <Container>
      <VaccineEfficacyChart />
      <BrowseVaccineContent />
    </Container>
  )
}

export default ContentOfVaccinePage
