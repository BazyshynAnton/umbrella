import { useMediaQuery } from '../../MUIcomponents/MUIcomponents'

import ContentForBigScreens from './contentOfCareersAtUmbrella/ContentForBigScreens'
import ContentForSmallScreens from './contentOfCareersAtUmbrella/ContentForSmallScreens'

const CareersAtUmbrella = () => {
  const isSmallScreen = useMediaQuery('(min-width: 1200px)')

  return (
    <>{isSmallScreen ? <ContentForBigScreens /> : <ContentForSmallScreens />}</>
  )
}

export default CareersAtUmbrella
