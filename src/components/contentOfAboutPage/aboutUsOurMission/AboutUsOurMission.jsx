import { Box, Typography } from '@mui/material'

import ReusableComponentForIntroduce from '../../reusableComponentsForVaccineAndAboutPages/ReusableComponentForIntroduce'
import ReusableComponentMrnaPicture from '../../reusableComponentsForVaccineAndAboutPages/ReusableComponentMrnaPicture'

import microscope from '../../../pictures/microscope.png'
import umbrellaGuyWithLaptop from '../../../pictures/umbrellaGuyWithLaptop.png'

import { fontStyleOpenSans } from '../../../context/variables'

const textForReusableComponent =
  'Our mission is to deliver the greatest possible impact to people through mRNA medicines.'

const AboutUsOurMission = () => {
  return (
    <Box sx={{ mt: '80px' }}>
      <Typography
        sx={{
          color: '#053f68',
          fontSize: '3.5rem',
          fontWeight: '700',
          mb: '30px',
          ...fontStyleOpenSans,
        }}
      >
        About us
      </Typography>
      <Box sx={{ position: 'relative' }}>
        <ReusableComponentForIntroduce
          text={textForReusableComponent}
          img1={umbrellaGuyWithLaptop}
          img2={microscope}
        />
        <ReusableComponentMrnaPicture />
      </Box>
    </Box>
  )
}

export default AboutUsOurMission
