import { useMediaQuery } from '../../shared/ui/MUIglobal/muiGlobal'

import StayUpToDateBigSmall from './contentOfStayUpToDate/StayUpToDateBigSmall'

const stylesForBigScreens = {
  first: {
    mt: '60px',
    mb: '60px',
    display: 'flex',
    alignItems: 'flex-end',
    width: '100%',
    flexDirection: 'column',
    pr: { xl: '0px', lg: '32px' },
  },
  second: { display: 'flex', flexDirection: 'column', gap: '1rem' },
}
const stylesForSmallScreens = {
  first: {
    mt: { sm: '20px', xs: '80px' },
    mb: { sm: '20px', xs: '80px' },
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '300px',
  },
  second: {
    width: { sm: '450px', xs: '300px' },
    height: { xs: '300px' },
    border: '1px solid #376586',
    borderRadius: '10px',
    padding: '2pc',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '1rem',
  },
}

const StayUpToDate = () => {
  const isSmallScreen = useMediaQuery('(min-width: 1200px)')
  return (
    <>
      {isSmallScreen ? (
        <StayUpToDateBigSmall
          stylesForBigScreensFirst={stylesForBigScreens.first}
          stylesForBigScreensSecond={stylesForBigScreens.second}
        />
      ) : (
        <StayUpToDateBigSmall
          stylesForSmallScreensFirst={stylesForSmallScreens.first}
          stylesForSmallScreensSecond={stylesForSmallScreens.second}
        />
      )}
    </>
  )
}

export default StayUpToDate
