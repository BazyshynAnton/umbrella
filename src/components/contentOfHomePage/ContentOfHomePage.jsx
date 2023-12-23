import { Container, useMediaQuery } from '../MUIcomponents/MUIcomponents'
import { PropagandaSwiperProvider } from '../../context/PropagandaSwiperContext'
import { ButtonContextProvider } from '../../context/ButtonContext'

import PropagandaSwiper from './propagandaSwiper/PropagandaSwiper'
import CareersAtUmbrella from './careersAtUmbrella/CareersAtUmbrella'
import ConnectWithUs from './connectWithUs/ConnectWithUs'
import StayUpToDate from './stayUpToDate/StayUpToDate'
import IntroVaccineSwiper from './introVaccineSwiper/IntroVaccineSwiper'
import NewsJobBlogsSwipers from './newsJobBlogsSwipers/NewsJobBlogsSwipers'
import OurMission from './ourMission/OurMission'
import LifeAtUmbrella from './lifeAtUmbrella/LifeAtUmbrella'

const ContentOfHomePage = () => {
  const isSmallScreen = useMediaQuery('(min-width:930px)')
  return (
    <PropagandaSwiperProvider>
      <ButtonContextProvider>
        <Container>
          <IntroVaccineSwiper />
          <NewsJobBlogsSwipers />
          <OurMission isSmallScreen={isSmallScreen} />
          <LifeAtUmbrella isSmallScreen={isSmallScreen} />
          <PropagandaSwiper />
          <CareersAtUmbrella />
          <ConnectWithUs />
          <StayUpToDate />
        </Container>
      </ButtonContextProvider>
    </PropagandaSwiperProvider>
  )
}

export default ContentOfHomePage
