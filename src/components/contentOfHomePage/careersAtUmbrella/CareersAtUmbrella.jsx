import { Box, Typography, useMediaQuery } from '@mui/material'
import YellowButton from '../yellowButton/YellowButton'
import redbook from '../../../pictures/redbook.png'
const CareersAtUmbrella = () => {
  const isSmallScreen = useMediaQuery('(min-width: 1200px)')

  return (
    <>
      {isSmallScreen ? (
        <Box
          sx={{
            position: 'relative',
            marginTop: '60px',
            width: '100%',
            height: '600px',
          }}>
          <Box
            sx={{
              position: 'absolute',
              left: { xl: '-150px', lg: '-100px' },
              width: '100%',
            }}>
            <img
              style={{
                objectFit: 'cover',
                height: '100%',
                width: '100%',
              }}
              src={redbook}
              alt="pic"
            />
          </Box>

          <Box
            sx={{
              position: 'absolute',
              top: '18%',
              right: '0',
              background: '#fff',
              width: '600px',
              height: '400px',
              padding: '2pc',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              gap: '1rem',
            }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                gap: '2rem',
              }}>
              <Typography
                variant="h3"
                sx={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontWeight: '600',
                }}>
                Careers at Umbrella
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontWeight: '400',
                }}>
                Our mission is clear: translating science into survival to
                improve the health of people worldwide. We are always on the
                lookout for dedicated and curious new talents supporting our
                team of visionaries, entrepreneurs, scientists, engineers and
                business professionals. Join us and be part of our unique
                pioneering spirit.
              </Typography>
            </Box>
            <YellowButton>Careers Portal</YellowButton>
          </Box>
        </Box>
      ) : (
        <Box
          sx={{
            mt: '60px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '450px',
          }}>
          <Box
            sx={{
              border: '1px solid black',
              background: '#fff',
              width: '600px',
              height: '400px',
              padding: '2pc',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              gap: '1rem',
            }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                gap: '2rem',
              }}>
              <Typography
                variant="h3"
                sx={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontWeight: '600',
                }}>
                Careers at Umbrella
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontWeight: '400',
                }}>
                Our mission is clear: translating science into survival to
                improve the health of people worldwide. We are always on the
                lookout for dedicated and curious new talents supporting our
                team of visionaries, entrepreneurs, scientists, engineers and
                business professionals. Join us and be part of our unique
                pioneering spirit.
              </Typography>
            </Box>
            <YellowButton>Careers Portal</YellowButton>
          </Box>
        </Box>
      )}
    </>
  )
}

export default CareersAtUmbrella
