import { Box, useMediaQuery } from '@mui/material'

import ReusableComponentForIntroduce from '../../../reusableComponentsForVaccineAndAboutPages/ReusableComponentForIntroduce'
import ReusableComponentMrnaPicture from '../../../reusableComponentsForVaccineAndAboutPages/ReusableComponentMrnaPicture'
import RevolutionizeMedicine from './revolutionizeMedicine/RevolutionizeMedicine'
import YouAreMadeOfProteins from './youAreMadeOfProteins/YouAreMadeOfProteins'
import SwiperProteinFactories from './swiperProteinFactories/SwiperProteinFactories'

import demoImgOne from '../../../../pictures/demoImgOne.jfif'
import demoImgTwo from '../../../../pictures/demoImgTwo.jfif'
import TheScienceOfMrnaForSmallScreens from './theScienceOfMrnaForSmallScreens/TheScienceOfMrnaForSmallScreens'

const text =
  'At Umbrella, we are delivering on the promise of mRNA science to create a new generation of transformative medicines for patients.'

const TheScienceOfMrna = () => {
  const isSmallScreen = useMediaQuery('(min-width: 325px)')
  return (
    <Box
      sx={{
        mt: '20px',
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
    </Box>
  )
}

export default TheScienceOfMrna
