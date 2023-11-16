import { Box, Typography, useMediaQuery } from '@mui/material'
import YellowButton from '../yellowButton/YellowButton'

const StayUpToDate = () => {
  const isSmallScreen = useMediaQuery('(min-width: 1200px)')
  return (
    <>
      {isSmallScreen ? (
        <Box
          sx={{
            marginTop: '60px',
            marginBottom: '60px',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
          }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <Typography
              variant="h3"
              sx={{ fontFamily: "'Open Sans', sans-serif", fontWeight: '600' }}>
              Stay up to date
            </Typography>
            <Box>
              <Typography
                variant="body1"
                sx={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontWeight: '400',
                }}>
                Looking for our latest news?
                <br />
                Sign-up for our alerts here.
              </Typography>
            </Box>
            <YellowButton>Subscribe</YellowButton>
          </Box>
        </Box>
      ) : (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '300px',
          }}>
          <Box
            sx={{
              border: '1px solid black',
              padding: '2pc',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
            }}>
            <Typography
              variant="h3"
              sx={{ fontFamily: "'Open Sans', sans-serif", fontWeight: '600' }}>
              Stay up to date
            </Typography>
            <Box>
              <Typography
                variant="body1"
                sx={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontWeight: '400',
                }}>
                Looking for our latest news?
                <br />
                Sign-up for our alerts here.
              </Typography>
            </Box>
            <YellowButton>Subscribe</YellowButton>
          </Box>
        </Box>
      )}
    </>
  )
}

export default StayUpToDate
