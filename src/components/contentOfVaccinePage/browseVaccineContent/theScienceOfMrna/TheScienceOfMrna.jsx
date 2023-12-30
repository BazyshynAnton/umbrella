import { useMediaQuery } from '../../../shared/ui/MUIglobal/muiGlobal'

import ReusableComponentForIntroduce from '../../../shared/globalBlocks/ReusableComponentForIntroduce'
import ReusableComponentMrnaPicture from '../../../shared/globalBlocks/ReusableComponentMrnaPicture'
import RevolutionizeMedicine from './revolutionizeMedicine/RevolutionizeMedicine'
import YouAreMadeOfProteins from './youAreMadeOfProteins/YouAreMadeOfProteins'
import SwiperProteinFactories from './swiperProteinFactories/SwiperProteinFactories'
import TheScienceOfMrnaForSmallScreens from './theScienceOfMrnaForSmallScreens/TheScienceOfMrnaForSmallScreens'

import demoImgOne from '../../../../assets/pictures/demoImgOne.png'
import demoImgTwo from '../../../../assets/pictures/demoImgTwo.png'

const text =
  'At Umbrella, we are delivering on the promise of mRNA science to create a new generation of transformative medicines for patients.'

const TheScienceOfMrna = () => {
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
        text={text}
        img1={demoImgOne}
        img2={demoImgTwo}
      />
      <ReusableComponentMrnaPicture />
      <RevolutionizeMedicine />
      <YouAreMadeOfProteins />
      {isSmallScreen && (
        <>
          <TheScienceOfMrnaForSmallScreens />
          <SwiperProteinFactories />
        </>
      )}
    </div>
  )
}

export default TheScienceOfMrna
