import { Box, Container, Typography } from '@mui/material'
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
          <Typography variant="h3">Careers at Umbrella</Typography>
          <Typography variant="body1">
            Our mission is clear: translating science into survival to improve
            the health of people worldwide. We are always on the lookout for
            dedicated and curious new talents supporting our team of
            visionaries, entrepreneurs, scientists, engineers and business
            professionals. Join us and be part of our unique pioneering spirit.
          </Typography>
        </Box>

        <Box
          variant="body1"
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            cursor: 'pointer',
            width: '170px',
            justifyContent: 'space-between',
          }}>
          <Box
            sx={{
              background: '#FFFF00',
              width: '50px',
              height: '50px',
              borderRadius: '100px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {'>'}
          </Box>
          <Typography variant="body1">Careers Portal</Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default CareersAtUmbrella
