import { Box, Typography, useMediaQuery } from '@mui/material'

import { fontStyleOpenSans } from '../../../../context/variables'

import ReusableComponentForIntroduce from '../reusableComponents/ReusableComponentForIntroduce'
import ReusableComponentMrnaPicture from '../reusableComponents/ReusableComponentMrnaPicture'
import RevolutionizeMedicine from './revolutionizeMedicine/RevolutionizeMedicine'
import YouAreMadeOfProteins from './youAreMadeOfProteins/YouAreMadeOfProteins'
import SwiperProteinFactories from './swiperProteinFactories/SwiperProteinFactories'

import demoImgOne from '../../../../pictures/demoImgOne.jfif'
import demoImgTwo from '../../../../pictures/demoImgTwo.jfif'

const text =
  'At Umbrella, we are delivering on the promise of mRNA science to create a new generation of transformative medicines for patients.'

const TheScienceOfMrna = () => {
  const isSmallScreen = useMediaQuery('(min-width: 900px)')
  return (
    <Box
      sx={{
        mt: '20px',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
      }}>
      <ReusableComponentForIntroduce
        text={text}
        img1={demoImgOne}
        img2={demoImgTwo}
      />
      <ReusableComponentMrnaPicture />
      <RevolutionizeMedicine />
      <YouAreMadeOfProteins />

      {isSmallScreen && (
        <Box
          sx={{
            mt: '100px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <Typography
            variant="h3"
            sx={{
              color: '#376586',
              fontSize: '3rem',
              fontWeight: '600',
              ...fontStyleOpenSans,
            }}>
            Your cells are protein factories
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: '#376586',
              textAlign: 'center',
              ...fontStyleOpenSans,
            }}>
            Proteins are made in a process called <b>protein synthesis</b>.
            <br /> And that's where mRNA comes in.
          </Typography>

          <SwiperProteinFactories />
        </Box>
      )}
    </Box>
  )
}

export default TheScienceOfMrna
