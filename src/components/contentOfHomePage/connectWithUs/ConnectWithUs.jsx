import { useMediaQuery } from '../../shared/ui/MUIglobal/muiGlobal'
import {
  Suspense,
  lazy,
} from '../../shared/ui/reactImportsGlobal/reactImportsGlobal'

import ContentForBigScreens from '../shared/Blocks/ContentForBigScreens'

import chair from '../../../assets/pictures/chair.webp'
import phoneIcon from '../../../assets/pictures/phoneIcon.webp'
import mailIcon from '../../../assets/pictures/mailIcon.webp'

const ContentForSmallScreens = lazy(() =>
  import('../shared/Blocks/ContentForSmallScreens')
)
const headerText = 'Connect with us'
const text =
  'Questions about our products, services or clinical trials? Find the right contact person at our Service Center.'
const buttonText = 'Contact Us'

const positionForPicture = { right: '-150px' }
const position = { left: '0px' }

const ConnectWithUs = () => {
  const isSmallScreen = useMediaQuery('(min-width: 1200px)')
  return (
    <>
      {isSmallScreen ? (
        <ContentForBigScreens
          headerText={headerText}
          text={text}
          buttonText={buttonText}
          picture={chair}
          height={'600px'}
          positionForPicture={positionForPicture}
        />
      ) : (
        <Suspense>
          <ContentForSmallScreens
            picture1={mailIcon}
            picture2={phoneIcon}
            buttonText={buttonText}
            headerText={headerText}
            text={text}
            height1={'300px'}
            height2={'350px'}
            position={position}
          />
        </Suspense>
      )}
    </>
  )
}

export default ConnectWithUs
