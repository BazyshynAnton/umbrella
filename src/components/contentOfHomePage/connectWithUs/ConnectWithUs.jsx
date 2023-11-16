import { Box, Typography, useMediaQuery } from '@mui/material'
import YellowButton from '../yellowButton/YellowButton'
import chair from '../../../pictures/chair.jpg'
const ConnectWithUs = () => {
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
          <img
            style={{
              objectFit: 'cover',
              width: '100%',
              height: '100%',
              position: 'absolute',
              right: '-150px',
            }}
            src={chair}
            alt="pic"
          />

          <Box
            sx={{
              position: 'absolute',
              top: '26%',
              left: '0',
              background: '#fff',
              width: '550px',
              height: '300px',
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
                Connect with us
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontWeight: '400',
                }}>
                Questions about our products, services or clinical trials? Find
                the right contact person at our Service Center.
              </Typography>
            </Box>

            <YellowButton>Contact Us</YellowButton>
          </Box>
        </Box>
      ) : (
        <Box
          sx={{
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
              width: '550px',
              height: '300px',
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
                Connect with us
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontWeight: '400',
                }}>
                Questions about our products, services or clinical trials? Find
                the right contact person at our Service Center.
              </Typography>
            </Box>

            <YellowButton>Contact Us</YellowButton>
          </Box>
        </Box>
      )}
    </>
  )
}

export default ConnectWithUs
