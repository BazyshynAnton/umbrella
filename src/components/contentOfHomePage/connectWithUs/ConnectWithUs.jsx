import { useMediaQuery } from '../../shared/ui/MUIglobal/muiGlobal'
import {
  Suspense,
  lazy,
} from '../../shared/ui/reactImportsGlobal/reactImportsGlobal'

import ContentForBigScreens from '../shared/Blocks/ContentForBigScreens'

import chair from '../../../assets/pictures/chair.webp'
import phoneIcon from '../../../assets/pictures/phoneIcon.webp'
import mailIcon from '../../../assets/pictures/mailIcon.webp'
import { useTranslation } from 'react-i18next'

const ContentForSmallScreens = lazy(() =>
  import('../shared/Blocks/ContentForSmallScreens')
)
const headerText = 'Connect with us'
const text = 'Questions about our'
const buttonText = 'Contact Us'

const positionForPicture = { right: '-150px' }
const position = { left: '0px' }

const ConnectWithUs = () => {
  const isSmallScreen = useMediaQuery('(min-width: 1200px)')

  const { t } = useTranslation()
  return (
    <>
      {isSmallScreen ? (
        <ContentForBigScreens
          headerText={t(headerText)}
          text={t(text)}
          buttonText={t(buttonText)}
          picture={chair}
          height={'600px'}
          positionForPicture={positionForPicture}
        />
      ) : (
        <Suspense>
          <ContentForSmallScreens
            picture1={mailIcon}
            picture2={phoneIcon}
            headerText={t(headerText)}
            text={t(text)}
            buttonText={t(buttonText)}
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
