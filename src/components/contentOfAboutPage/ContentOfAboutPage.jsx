import { Container, useMediaQuery } from '@mui/material'
import { ButtonContextProvider } from '../../context/ButtonContext'

import AboutUsOurMission from './aboutUsOurMission/AboutUsOurMission'
import Delivering from './delivering/Delivering'
import ChangingTheWorld from './changingTheWorld/ChangingTheWorld'
import NewFrontiers from './newFrontiers/NewFrontiers'
import OurValues from './ourValues/OurValues'
import OurMIndsets from './ourMIndsets/OurMIndsets'
import Leadership from './leadership/Leadership'
import Headquarters from './headquarters/Headquarters'

const ContentOfAboutPage = () => {
  const isSmallScreen = useMediaQuery('(min-width:930px)')

  return (
    <ButtonContextProvider>
      <Container>
        <AboutUsOurMission />
        <Delivering isSmallScreen={isSmallScreen} />
        <ChangingTheWorld isSmallScreen={isSmallScreen} />
        <NewFrontiers />
        <OurValues />
        <OurMIndsets isSmallScreen={isSmallScreen} />
        <Leadership isSmallScreen={isSmallScreen} />
        <Headquarters />
      </Container>
    </ButtonContextProvider>
  )
}

export default ContentOfAboutPage
