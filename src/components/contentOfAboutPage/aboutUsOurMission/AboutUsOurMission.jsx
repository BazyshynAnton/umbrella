import { Box, Typography } from '../../shared/ui/MUIglobal/muiGlobal'
import { fontStyleOpenSans } from '../../shared/ui/fontStyles/openSans'

import ReusableComponentForIntroduce from '../../shared/globalBlocks/ReusableComponentForIntroduce'
import ReusableComponentMrnaPicture from '../../shared/globalBlocks/ReusableComponentMrnaPicture'

import microscope from '../../../assets/pictures/microscope.png'
import umbrellaGuyWithLaptop from '../../../assets/pictures/umbrellaGuyWithLaptop.png'

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
