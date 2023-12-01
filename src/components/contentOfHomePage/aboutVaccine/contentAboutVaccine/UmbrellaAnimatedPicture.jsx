import { Box } from '@mui/material'
import { animated } from '@react-spring/web'
import { useAnimationContextAboutVaccine } from '../../../../context/AboutVaccineContext'

import umbrellaVaccinePic from '../../../../pictures/umbrellaVaccinePic.jpg'

const UmbrellaAnimatedPicture = () => {
  const { animationImg } = useAnimationContextAboutVaccine()

  return (
    <animated.div style={animationImg}>
      <Box
        sx={{
          display: {
            md: 'block',
            xs: 'none',
          },
          position: 'relative',
          width: { lg: '420px', md: '340px' },
          height: { lg: '350px', md: '300px' },
          zIndex: '20',

          '&::before': {
            content: "''",
            background: '#fff',
            position: 'absolute',
            top: '0',
            right: '-40px',
            width: '80px',
            height: '80px',
            transform: 'skewX(45deg)',
          },
          '&::after': {
            content: "''",
            background: '#fff',
            position: 'absolute',
            bottom: '0',
            right: '-40px',
            width: '80px',
            height: '80px',
            transform: 'skewX(-45deg)',
          },
        }}>
        <img
          style={{ objectFit: 'cover', width: '100%', height: '100%' }}
          src={umbrellaVaccinePic}
          alt="umbrella-vaccine"
        />
      </Box>
    </animated.div>
  )
}

export default UmbrellaAnimatedPicture
