import { Container } from '@mui/material'
import AboutVaccine from './aboutVaccine/AboutVaccine'
import SlidesForHomePage from './slidesForHomePage/SlidesForHomePage'
import CareersAtUmbrella from './careersAtUmbrella/CareersAtUmbrella'
import ConnectWithUs from './connectWithUs/ConnectWithUs'
import StayUpToDate from './stayUpToDate/StayUpToDate'

import { AboutVaccineProvider } from '../../context/AboutVaccineContext'
import { SlidesForHomePageProvider } from '../../context/SlidesForHomePageContext'
import IntroVaccineSwiper from './introVaccineSwiper/IntroVaccineSwiper'
import NewsSwiper from './newsJobBlogsSwipers/NewsSwiper'

const ContentOfHomePage = () => {
  return (
    <AboutVaccineProvider>
      <SlidesForHomePageProvider>
        <Container>
          <IntroVaccineSwiper />
          <NewsSwiper />
          {/* <AboutVaccine /> */}
          <SlidesForHomePage />
          <CareersAtUmbrella />
          <ConnectWithUs />
          <StayUpToDate />
        </Container>
      </SlidesForHomePageProvider>
    </AboutVaccineProvider>
  )
}

export default ContentOfHomePage
