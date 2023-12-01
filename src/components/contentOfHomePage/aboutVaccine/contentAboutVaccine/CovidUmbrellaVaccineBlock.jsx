import { Box, Typography } from '@mui/material'
import { animated } from '@react-spring/web'
import { useAnimationContextAboutVaccine } from '../../../../context/AboutVaccineContext'

const CovidUmbrellaVaccineBlock = () => {
  const {
    animationForCovidText,
    animationForStorageDiv,
    animationHeight,
    animationForUmbrellaVaccine,
  } = useAnimationContextAboutVaccine()

  return (
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
              color: '#376586',
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
            background: '#376586',
            clipPath: 'polygon(0 0, 100% 10%, 100% 80%, 100% 89%, 0% 100%)',
            ...animationForStorageDiv,
            ...animationHeight,
          }}>
          <Box
            sx={{
              height: '80px',
              position: 'relative',
              width: '10px',
              background: '#376586',
              clipPath: 'polygon(0 0, 100% 10%, 100% 80%, 100% 89%, 0% 100%)',
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
              color: '#376586',
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
              color: '#e31837',
              cursor: 'default',
              fontFamily: "'Teko', sans-serif",
              fontWeight: '400',
            }}>
            Vaccine
          </Typography>
        </Box>
      </animated.div>
    </Box>
  )
}

export default CovidUmbrellaVaccineBlock
