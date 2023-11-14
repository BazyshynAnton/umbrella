import { Box, Typography } from '@mui/material'
import YellowButton from '../yellowButton/YellowButton'
import redbook from '../../../pictures/redbook.png'
const CareersAtUmbrella = () => {
  return (
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
          height: '100%',
          width: '100%',
          position: 'absolute',
          left: '-150px',
        }}
        src={redbook}
        alt="pic"
      />

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
            sx={{ fontFamily: "'Open Sans', sans-serif", fontWeight: '600' }}>
            Careers at Umbrella
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontFamily: "'Open Sans', sans-serif", fontWeight: '400' }}>
            Our mission is clear: translating science into survival to improve
            the health of people worldwide. We are always on the lookout for
            dedicated and curious new talents supporting our team of
            visionaries, entrepreneurs, scientists, engineers and business
            professionals. Join us and be part of our unique pioneering spirit.
          </Typography>
        </Box>
        <YellowButton>Careers Portal</YellowButton>
      </Box>
    </Box>
  )
}

export default CareersAtUmbrella
