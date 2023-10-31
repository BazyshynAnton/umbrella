import { Box, Button, Typography } from '@mui/material'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useSpring, animated } from '@react-spring/web'

import umbrellaVaccinePic from '../../../pictures/umbrellaVaccinePic.png'
import coronaVirusOne from '../../../pictures/coronaVirusOne.png'

const AboutVaccine = () => {
  const [isButtonHovered, setIsButtonHovered] = useState(false)

  const animationForAd = useSpring({
    from: { opacity: 0, x: 1000 },
    to: { opacity: 1, x: 0 },
  })
  const animationForCovidPicOne = useSpring({
    to: { transform: 'rotate(360deg)' },
    from: { transform: 'rotate(0deg)' },
    config: { duration: 5000 },
    reset: true,
    loop: true,
  })
  const animationForCovidPicTwo = useSpring({
    to: { transform: 'rotate(360deg)' },
    from: { transform: 'rotate(0deg)' },
    config: { duration: 5000 },
    reset: true,
    loop: true,
  })
  const animationForCovidPicThree = useSpring({
    to: { transform: 'rotate(0deg)' },
    from: { transform: 'rotate(360deg)' },
    config: { duration: 5000 },
    reset: true,
    loop: true,
  })

  const fadeInOutAnimation = useSpring({
    opacity: isButtonHovered ? 0 : 1,
    config: { duration: 300 },
  })

  return (
    <Box sx={{ width: '100%', display: 'flex', position: 'relative' }}>
      <Box sx={{ width: '100%' }}>
        <img
          style={{ objectFit: 'cover', width: '100%', height: '100%' }}
          src={umbrellaVaccinePic}
          alt="umbrella-vaccine"
        />
      </Box>
      <animated.div
        style={{
          position: 'absolute',
          bottom: '-45px',
          width: '58%',
          right: '0',
          ...animationForAd,
        }}>
        <Box
          sx={{
            height: '70px',
            width: '100%',
            background: '#c3221c',

            '::before': {
              content: '""',
              position: 'absolute',
              left: '-35px',
              background: '#c3221c',
              transform: 'skewX(-45deg)',
              width: '70px',
              height: '100%',
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
            style={{
              position: 'absolute',
              top: '18px',
              left: '30px',
              color: '#fff',
              zIndex: '90',
              fontStyle: 'italic',
              textTransform: 'uppercase',
              cursor: 'default',
              fontFamily: "'Oswald', sans-serif",
              fontWeight: '500',
            }}>
            a new product from umbrella corporation
          </Typography>
        </Box>
      </animated.div>
      <Box
        sx={{
          position: 'absolute',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.5rem',
          top: '15%',
          left: '50%',
        }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1.5rem',
          }}>
          <Typography
            variant="h2"
            sx={{
              color: '#808080',
              cursor: 'default',
              fontFamily: "'Oswald', sans-serif",
              fontWeight: '400',
            }}>
            Covid-19
          </Typography>
          <Box
            sx={{
              height: '80px',
              position: 'relative',
              width: '10px',
              background: '#808080',
              clipPath: 'polygon(0 0, 100% 10%, 100% 80%, 100% 89%, 0% 100%)',
            }}
          />
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
            }}>
            <Typography
              variant="h1"
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
                  top: '0',
                  right: '-15px',
                  cursor: 'default',
                }}>
                TM
              </Typography>
            </Typography>
            <Typography
              variant="h2"
              sx={{
                color: 'red',
                cursor: 'default',
                fontFamily: "'Teko', sans-serif",
                fontWeight: '400',
              }}>
              Vaccine
            </Typography>
          </Box>
        </Box>
        <NavLink to="">
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
        <animated.div
          style={{
            position: 'absolute',
            bottom: '8%',
            left: '35%',
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
        <animated.div
          style={{
            position: 'absolute',
            bottom: '0',
            right: '36%',
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
        <animated.div
          style={{
            position: 'absolute',
            bottom: '-5%',
            left: '43%',
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
    </Box>
  )
}

export default AboutVaccine
