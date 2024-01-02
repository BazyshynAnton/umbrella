import { Container, useMediaQuery } from '../shared/ui/MUIglobal/muiGlobal'
import { ButtonContextProvider } from '../../context/ButtonContext'
import { useTranslation } from '../shared/translations/translationsImports'

import AboutUsOurMission from './aboutUsOurMission/AboutUsOurMission'
import Delivering from './delivering/Delivering'
import ChangingTheWorld from './changingTheWorld/ChangingTheWorld'
import NewFrontiers from './newFrontiers/NewFrontiers'
import OurValues from './ourValues/OurValues'
import OurMindsets from './ourMindsets/OurMindsets'
import Leadership from './leadership/Leadership'
import Headquarters from './headquarters/Headquarters'

const ContentOfAboutPage = () => {
  const isSmallScreen = useMediaQuery('(min-width:930px)')
  const { t } = useTranslation()
  return (
    <ButtonContextProvider>
      <Container>
        <AboutUsOurMission t={t} />
        <Delivering t={t} isSmallScreen={isSmallScreen} />
        <ChangingTheWorld t={t} isSmallScreen={isSmallScreen} />
        <NewFrontiers t={t} />
        <OurValues t={t} />
        <OurMindsets t={t} isSmallScreen={isSmallScreen} />
        <Leadership t={t} isSmallScreen={isSmallScreen} />
        <Headquarters t={t} />
      </Container>
    </ButtonContextProvider>
  )
}

export default ContentOfAboutPage
