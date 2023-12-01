import { useMediaQuery } from '@mui/material'

import StayUpToDateBigScreens from './contentOfStayUpToDate/StayUpToDateBigScreens'
import StayUpToDateSmallScreens from './contentOfStayUpToDate/StayUpToDateSmallScreens'

const StayUpToDate = () => {
  const isSmallScreen = useMediaQuery('(min-width: 1200px)')
  return (
    <>
      {isSmallScreen ? (
        <StayUpToDateBigScreens />
      ) : (
        <StayUpToDateSmallScreens />
      )}
    </>
  )
}

export default StayUpToDate
