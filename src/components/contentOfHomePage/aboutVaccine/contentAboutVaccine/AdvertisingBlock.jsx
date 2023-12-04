import { Box, Typography, useMediaQuery } from '@mui/material'
import { animated } from '@react-spring/web'
import { useAnimationContextAboutVaccine } from '../../../../context/AboutVaccineContext'

const AdvertisingBlock = () => {
  const isSmallScreen = useMediaQuery('(min-width: 600px)')
  const { animationForAd } = useAnimationContextAboutVaccine()

  return (
    <Box
      sx={{
        position: 'absolute',
        bottom: { lg: '-45px', sm: '0px', xs: '70px' },
        width: { lg: '58%', md: '65%', sm: '80%', xs: '70%' },
        right: '0',
        zIndex: '99',
      }}>
      <animated.div
        style={{
          ...animationForAd,
        }}>
        <Box
          sx={{
            height: { sm: '70px', xs: '50px' },
            width: '100%',
            background: '#376586',
            '::before': {
              content: '""',
              position: 'absolute',
              top: '0px',
              left: '-35px',
              background: '#376586',
              transform: 'skewX(-45deg)',
              width: '70px',
              height: { sm: '70px', xs: '49.8px' },
              zIndex: { xs: '20' },
            },
          }}>
          <Typography
            variant="h5"
            fontSize={{ md: '1.5rem', sm: '1.2rem', xs: '1.2rem' }}
            sx={{
              position: 'absolute',
              top: { md: '18px', sm: '22px', xs: '13px' },
              left: '10px',
              color: '#fff',
              zIndex: '90',
              fontStyle: 'italic',
              textTransform: 'uppercase',
              cursor: 'default',
              fontFamily: "'Oswald', sans-serif",
              fontWeight: '500',
            }}>
            {!isSmallScreen
              ? 'a new product'
              : 'a new product from umbrella corporation'}
          </Typography>
        </Box>
      </animated.div>
    </Box>
  )
}

export default AdvertisingBlock
