import { useMediaQuery } from '../../MUIcomponents/MUIcomponents'

import ConnectWithUsBigScreens from './contentOfConnectWithUs/ConnectWithUsBigScreens'
import ConnectWithUsSmallScreens from './contentOfConnectWithUs/ConnectWithUsSmallScreens'

const ConnectWithUs = () => {
  const isSmallScreen = useMediaQuery('(min-width: 1200px)')
  return (
    <>
      {isSmallScreen ? (
        <ConnectWithUsBigScreens />
      ) : (
        <ConnectWithUsSmallScreens />
      )}
    </>
  )
}

export default ConnectWithUs
