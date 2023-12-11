import { Container } from '@mui/material'
import PropagandaSwiper from './propagandaSwiper/PropagandaSwiper'
import CareersAtUmbrella from './careersAtUmbrella/CareersAtUmbrella'
import ConnectWithUs from './connectWithUs/ConnectWithUs'
import StayUpToDate from './stayUpToDate/StayUpToDate'

import { PropagandaSwiperProvider } from '../../context/PropagandaSwiperContext'
import IntroVaccineSwiper from './introVaccineSwiper/IntroVaccineSwiper'
import NewsJobBlogsSwipers from './newsJobBlogsSwipers/NewsJobBlogsSwipers'
import MeetUmbrella from './meetUmbrella/MeetUmbrella'
import { ButtonContextProvider } from '../../context/ButtonContext'

const ContentOfHomePage = () => {
  return (
    <PropagandaSwiperProvider>
      <ButtonContextProvider>
        <Container>
          <IntroVaccineSwiper />
          <NewsJobBlogsSwipers />
          <MeetUmbrella />
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
