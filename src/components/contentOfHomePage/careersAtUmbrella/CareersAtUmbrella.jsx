import { useMediaQuery } from '@mui/material'

import ContentForBigScreens from './contentOfCareersAtUmbrella/ContentForBigScreens'
import ContentForSmallSrceens from './contentOfCareersAtUmbrella/ContentForSmallSrceens'

const CareersAtUmbrella = () => {
  const isSmallScreen = useMediaQuery('(min-width: 1200px)')

  return (
    <>{isSmallScreen ? <ContentForBigScreens /> : <ContentForSmallSrceens />}</>
  )
}

export default CareersAtUmbrella
