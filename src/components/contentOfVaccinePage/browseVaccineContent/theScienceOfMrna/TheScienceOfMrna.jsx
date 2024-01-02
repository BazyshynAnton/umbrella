import { useMediaQuery } from '../../../shared/ui/MUIglobal/muiGlobal'
import { useTranslation } from '../../../shared/translations/translationsImports'
import {
  lazy,
  Suspense,
} from '../../../shared/ui/reactImportsGlobal/reactImportsGlobal'

import ReusableComponentForIntroduce from '../../../shared/globalBlocks/ReusableComponentForIntroduce'
import ReusableComponentMrnaPicture from '../../../shared/globalBlocks/ReusableComponentMrnaPicture'
import RevolutionizeMedicine from './revolutionizeMedicine/RevolutionizeMedicine'
import YouAreMadeOfProteins from './youAreMadeOfProteins/YouAreMadeOfProteins'

import demoImgOne from '../../../../assets/pictures/demoImgOne.png'
import demoImgTwo from '../../../../assets/pictures/demoImgTwo.png'

const TheScienceOfMrnaForSmallScreens = lazy(() =>
  import('./theScienceOfMrnaForSmallScreens/TheScienceOfMrnaForSmallScreens')
)
const SwiperProteinFactories = lazy(() =>
  import('./swiperProteinFactories/SwiperProteinFactories')
)

const text = 'At Umbrella, we are'

const TheScienceOfMrna = () => {
  const { t } = useTranslation()
  const isSmallScreen = useMediaQuery('(min-width: 325px)')
  return (
    <div
      style={{
        marginTop: '20px',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
      }}
    >
      <ReusableComponentForIntroduce
        text={t(text)}
        img1={demoImgOne}
        img2={demoImgTwo}
      />
      <ReusableComponentMrnaPicture />
      <RevolutionizeMedicine t={t} />
      <YouAreMadeOfProteins t={t} />
      {isSmallScreen && (
        <Suspense>
          <TheScienceOfMrnaForSmallScreens t={t} />
          <SwiperProteinFactories />
        </Suspense>
      )}
    </div>
  )
}

export default TheScienceOfMrna
