import { Container, useMediaQuery } from '@mui/material'
import AboutUsOurMission from './aboutUsOurMission/AboutUsOurMission'
import Delivering from './delivering/Delivering'
import { ButtonContextProvider } from '../../context/ButtonContext'
import ChangingTheWorld from './changingTheWorld/ChangingTheWorld'

const ContentOfAboutPage = () => {
  const isSmallScreen = useMediaQuery('(min-width:930px)')
  return (
    <ButtonContextProvider>
      <Container>
        <AboutUsOurMission />
        <Delivering isSmallScreen={isSmallScreen} />
        <ChangingTheWorld isSmallScreen={isSmallScreen} />
      </Container>
    </ButtonContextProvider>
  )
}

export default ContentOfAboutPage
