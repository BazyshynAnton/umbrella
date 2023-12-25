import { Box, Typography } from '@mui/material'

import ReusableComponentForIntroduce from '../../reusableComponents/ReusableComponentForIntroduce'
import ReusableComponentMrnaPicture from '../../reusableComponents/ReusableComponentMrnaPicture'

import microscope from '../../../assets/pictures/microscope.webp'
import umbrellaGuyWithLaptop from '../../../assets/pictures/umbrellaGuyWithLaptop.webp'

import { fontStyleOpenSans } from '../../../context/variables'

const textForReusableComponent =
  'Our mission is to deliver the greatest possible impact to people through mRNA medicines.'

const AboutUsOurMission = () => {
  return (
    <Box sx={{ mt: { lg: '80px', md: '120px' } }}>
      <Typography
        sx={{
          color: '#053f68',
          fontSize: { sm: '3.5rem', xs: '2.8rem' },
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
