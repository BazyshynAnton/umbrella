import { Box, Button, Typography, useMediaQuery } from '@mui/material'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useSpring, animated, config } from '@react-spring/web'

import umbrellaVaccinePic from '../../../pictures/umbrellaVaccinePic.jpg'
import coronaVirusOne from '../../../pictures/coronaVirusOne.png'

const AboutVaccine = () => {
  const isSmallScreen = useMediaQuery('(min-width: 600px)')
  const [isButtonHovered, setIsButtonHovered] = useState(false)

  const animationForAd = useSpring({
    from: { opacity: 0, x: 1000 },
    to: { opacity: 1, x: 0 },
    config: config.slow,
  })

  const animationForCovidPicOne = useSpring({
    from: { transform: 'rotate(0deg)' },
    to: { transform: 'rotate(360deg)' },
    config: { duration: 5000 },
    reset: true,
    loop: true,
  })
  const animationForCovidPicTwo = useSpring({
    from: { transform: 'rotate(0deg)' },
    to: { transform: 'rotate(360deg)' },
    config: { duration: 5000 },
    reset: true,
    loop: true,
  })
  const animationForCovidPicThree = useSpring({
    from: { transform: 'rotate(360deg)' },
    to: { transform: 'rotate(0deg)' },
    config: { duration: 5000 },
    reset: true,
    loop: true,
  })

  const fadeInOutAnimation = useSpring({
    opacity: isButtonHovered ? 0 : 1,
    config: { duration: 300 },
  })

  const animationForStorageDiv = useSpring({
    from: { opacity: 0, width: '0px', transformOrigin: 'left' },
    to: { opacity: 1, width: '10px', transformOrigin: 'left' },
    config: { duration: 500 },
  })
  const [animationHeight, setAnimationHeight] = useSpring(() => ({
    from: { height: '80px' },
    to: { height: '185px' },
    config: { duration: 500 },
    onRest: () => {
      setTimeout(() => {
        setAnimationHeight({ height: '80px' })
      }, 2000)
    },
    delay: 800,
  }))

  const animationForUmbrellaVaccine = useSpring({
    from: { opacity: 0, x: -280 },
    to: { opacity: 1, x: 20 },
    config: { duration: 1500 },
    delay: 1600,
  })
  const animationForCovidText = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1500 },
  })
  const animationLearnMoreBtn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1500 },
    delay: 3600,
  })
  const animationImg = useSpring({
    from: { opacity: 0, x: -10 },
    to: { opacity: 1, x: 0 },
    config: { duration: 1500 },
  })

  return (
    <Box
      sx={{
        mt: { sm: '10px', xs: '20px' },
        width: '100%',
        height: '350px',
        display: 'flex',
        position: 'relative',
        justifyContent: { md: 'unset', xs: 'center' },
      }}>
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
              background: '#c3221c',
              '::before': {
                content: '""',
                position: 'absolute',
                top: '0px',
                left: '-35px',
                background: '#c3221c',
                transform: 'skewX(-45deg)',
                width: '70px',
                height: { sm: '70px', xs: '49.8px' },
                zIndex: { xs: '20' },
              },
              '::after': {
                content: '""',
                position: 'absolute',
                right: '100',
                background: '#c3221c',
                width: '100vw',
                height: '100%',
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
            <Box
              sx={{
                position: ' absolute',
                left: { sm: '-65px', xs: '-50px' },
                bottom: '1px',
                width: '100vw',
                height: '10px',
                background: 'none',
                boxShadow: '5px 3px 5px #000',
                transform: 'skewX(-45deg)',
              }}
            />
          </Box>
        </animated.div>
      </Box>
      <Box
        sx={{
          position: { md: 'absolute', xs: 'static' },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { lg: '1.5rem', md: '0rem' },
          top: '15%',
          left: {
            xl: '40%',
            lg: '35%',
            md: '35%',
            sm: '-4%',
          },
          width: { lg: '620px', md: '500px', xs: '100%' },
          height: '250px',
        }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Box
            sx={{
              position: 'relative',
              width: { lg: '260px', sm: '200px', xs: '100%' },
              height: { lg: '184px', sm: '150px', xs: '150px' },
              background: '#fff',
              zIndex: '10',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-end',
              pr: '10px',

              '::before': {
                content: "''",
                position: 'absolute',
                left: '-100px',
                display: {
                  sm: 'none',
                  xs: 'block',
                },
                background: '#fff',
                width: '100px',
                height: '100px',
                zIndex: '-1',
              },
            }}>
            <animated.div style={{ ...animationForCovidText }}>
              <Typography
                variant="h2"
                fontSize={{ lg: 65, sm: 50, xs: 30 }}
                sx={{
                  color: '#808080',
                  cursor: 'default',
                  fontFamily: "'Oswald', sans-serif",
                  fontWeight: '400',
                }}>
                Covid-19
              </Typography>
            </animated.div>
          </Box>
          <Box
            sx={{
              width: '20px',
              height: { lg: '184px', sm: '150px', xs: '150px' },
              background: '#fff',
              zIndex: '10',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}>
            <animated.div
              style={{
                width: '10px',
                background: '#808080',
                clipPath: 'polygon(0 0, 100% 10%, 100% 80%, 100% 89%, 0% 100%)',
                ...animationForStorageDiv,
                ...animationHeight,
              }}>
              <Box
                sx={{
                  height: '80px',
                  position: 'relative',
                  width: '10px',
                  background: '#808080',
                  clipPath:
                    'polygon(0 0, 100% 10%, 100% 80%, 100% 89%, 0% 100%)',
                }}
              />
            </animated.div>
          </Box>
          <animated.div
            style={{
              ...animationForUmbrellaVaccine,
            }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
              }}>
              <Typography
                variant="h1"
                fontSize={{ lg: 80, sm: 60, xs: 40 }}
                sx={{
                  color: '#808080',
                  cursor: 'default',
                  fontFamily: "'Teko', sans-serif",
                  fontWeight: '500',
                }}>
                Umbrella
                <Typography
                  variant="body2"
                  sx={{
                    position: 'absolute',
                    top: { sm: '0', xs: '-10px' },
                    right: { sm: '-15px', xs: '-10px' },
                    cursor: 'default',
                  }}>
                  TM
                </Typography>
              </Typography>
              <Typography
                variant="h2"
                fontSize={{ lg: 70, sm: 50, xs: 35 }}
                sx={{
                  color: 'red',
                  cursor: 'default',
                  fontFamily: "'Teko', sans-serif",
                  fontWeight: '400',
                }}>
                Vaccine
              </Typography>
            </Box>
          </animated.div>
        </Box>
        <Box
          sx={{
            position: 'relative',
            left: { lg: '25px', md: '20px', xs: '0px' },
          }}>
          <animated.div style={{ ...animationLearnMoreBtn }}>
            <NavLink
              to="/vaccine/science-of-mrna"
              style={{
                borderRadius: '25px',
              }}>
              <Button
                onMouseEnter={() => {
                  setIsButtonHovered(true)
                }}
                onMouseLeave={() => setIsButtonHovered(false)}
                variant="outlined"
                sx={{
                  color: '#808080',
                  borderRadius: '25px',
                  borderColor: '#DAA520',
                  borderWidth: '2px',
                  fontWeight: 'bold',
                  ':hover': {
                    borderColor: '#FF0000',
                    borderWidth: '2px',
                    color: '#000000',
                  },
                }}>
                Learn More
              </Button>
            </NavLink>
          </animated.div>
        </Box>

        <animated.div
          style={{
            position: 'relative',
            zIndex: '20',
            ...animationLearnMoreBtn,
          }}>
          <Box
            sx={{
              position: 'absolute',
              pointerEvents: 'none',
              top: { lg: '-80px', sm: '-55px', xs: '-55px' },
              left: { md: '-65px', xs: '-85px' },
              zIndex: '20',
            }}>
            <animated.div
              style={{
                ...animationForCovidPicOne,
                ...fadeInOutAnimation,
              }}>
              <Box sx={{ width: '40px', height: '40px' }}>
                <img
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                  src={coronaVirusOne}
                  alt="covid-19"
                />
              </Box>
            </animated.div>
          </Box>
        </animated.div>

        <animated.div
          style={{ position: 'relative', ...animationLearnMoreBtn }}>
          <Box
            sx={{
              position: 'absolute',
              bottom: { lg: '40px', xs: '0px' },
              right: { md: '-90px', xs: '-70px' },
              pointerEvents: 'none',
            }}>
            <animated.div
              style={{
                ...animationForCovidPicTwo,
                ...fadeInOutAnimation,
              }}>
              <Box sx={{ width: '20px', height: '20px' }}>
                <img
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                  src={coronaVirusOne}
                  alt="covid-19"
                />
              </Box>
            </animated.div>
          </Box>
        </animated.div>
        <animated.div
          style={{ position: 'relative', ...animationLearnMoreBtn }}>
          <Box
            sx={{
              position: 'absolute',
              bottom: { lg: '55px', xs: '-15px' },
              left: { xs: '-35px' },
              pointerEvents: 'none',
            }}>
            <animated.div
              style={{
                ...animationForCovidPicThree,
                ...fadeInOutAnimation,
              }}>
              <Box sx={{ width: '25px', height: '25px' }}>
                <img
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                  src={coronaVirusOne}
                  alt="covid-19"
                />
              </Box>
            </animated.div>
          </Box>
        </animated.div>
      </Box>
    </Box>
  )
}

export default AboutVaccine
