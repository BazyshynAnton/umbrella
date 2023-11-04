import { Box, Container, Typography } from '@mui/material'
import chair from '../../../pictures/chair.jpg'
const ConnectWithUs = () => {
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
          <Typography variant="h3">Connect with us</Typography>
          <Typography variant="body1">
            Questions about our products, services or clinical trials? Find the
            right contact person at our Service Center.
          </Typography>
        </Box>

        <Box
          variant="body1"
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            cursor: 'pointer',
            width: '145px',
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
          <Typography variant="body1">Contact Us</Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default ConnectWithUs
