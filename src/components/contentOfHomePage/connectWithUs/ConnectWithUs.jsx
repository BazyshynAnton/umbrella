import { useMediaQuery } from '../shared/ui/MUI/mui'
import { Suspense, lazy } from '../shared/ui/reactImports/reactImports'

import ContentForBigScreens from '../shared/Blocks/ContentForBigScreens'

import chair from '../../../assets/pictures/chair.webp'
import phoneIcon from '../../../assets/pictures/phoneIcon.webp'
import mailIcon from '../../../assets/pictures/mailIcon.webp'

const headerText = 'Connect with us'
const text =
  'Questions about our products, services or clinical trials? Find the right contact person at our Service Center.'
const buttonText = 'Contact Us'

const rightStyles = { right: { xl: '-150px', lg: '0px' } }

const ContentForSmallScreens = lazy(() =>
  import('../shared/Blocks/ContentForSmallScreens')
)

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
          rightStyles={rightStyles}
        />
      ) : (
        <Suspense>
          <ContentForSmallScreens
            picture1={mailIcon}
            picture2={phoneIcon}
            buttonText={buttonText}
            headerText={headerText}
            text={text}
          />
        </Suspense>
      )}
    </>
  )
}

export default ConnectWithUs
