import { Box } from '@mui/material'
import { animated } from '@react-spring/web'
import { useAnimationContextAboutVaccine } from '../../../../context/AboutVaccineContext'

import coronaVirusOne from '../../../../pictures/coronavirusOne.png'

const CovidAnimatedPictures = () => {
  const {
    fadeInOutAnimation,
    animationForCovidPicOne,
    animationForCovidPicTwo,
    animationForCovidPicThree,
    animationLearnMoreBtn,
  } = useAnimationContextAboutVaccine()

  return (
    <>
      <animated.div
        style={{
          position: 'relative',
          zIndex: '20',
          ...animationLearnMoreBtn,
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            pointerEvents: 'none',
            top: { lg: '-80px', sm: '-55px', xs: '-55px' },
            left: { md: '-65px', xs: '-85px' },
            zIndex: '20',
          }}
        >
          <animated.div
            style={{
              ...animationForCovidPicOne,
              ...fadeInOutAnimation,
            }}
          >
            <Box sx={{ width: '40px', height: '40px' }}>
              <img
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                src={coronaVirusOne}
                alt='covid-19'
              />
            </Box>
          </animated.div>
        </Box>
      </animated.div>

      <animated.div style={{ position: 'relative', ...animationLearnMoreBtn }}>
        <Box
          sx={{
            position: 'absolute',
            bottom: { lg: '40px', xs: '0px' },
            right: { md: '-90px', xs: '-70px' },
            pointerEvents: 'none',
          }}
        >
          <animated.div
            style={{
              ...animationForCovidPicTwo,
              ...fadeInOutAnimation,
            }}
          >
            <Box sx={{ width: '20px', height: '20px' }}>
              <img
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                src={coronaVirusOne}
                alt='covid-19'
              />
            </Box>
          </animated.div>
        </Box>
      </animated.div>

      <animated.div style={{ position: 'relative', ...animationLearnMoreBtn }}>
        <Box
          sx={{
            position: 'absolute',
            bottom: { lg: '55px', xs: '-15px' },
            left: { xs: '-35px' },
            pointerEvents: 'none',
          }}
        >
          <animated.div
            style={{
              ...animationForCovidPicThree,
              ...fadeInOutAnimation,
            }}
          >
            <Box sx={{ width: '25px', height: '25px' }}>
              <img
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                src={coronaVirusOne}
                alt='covid-19'
              />
            </Box>
          </animated.div>
        </Box>
      </animated.div>
    </>
  )
}

export default CovidAnimatedPictures
