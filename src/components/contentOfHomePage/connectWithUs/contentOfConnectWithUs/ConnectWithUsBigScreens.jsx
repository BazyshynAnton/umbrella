import { Box, Typography } from '../../../MUIcomponents/MUIcomponents'
import { fontStyleOpenSans } from '../../../../context/variables'

import YellowButton from '../../yellowButton/YellowButton'

import chair from '../../../../pictures/chair.jpg'

const ConnectWithUsBigScreens = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        marginTop: '60px',
        width: '100%',
        height: '600px',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          right: { xl: '-150px', lg: '0px' },
          width: '100%',
          height: '600px',
        }}
      >
        <img
          style={{
            objectFit: 'cover',
            width: '100%',
            height: '100%',
          }}
          src={chair}
          alt="pic"
        />
      </Box>

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
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '2rem',
          }}
        >
          <Typography
            variant="h3"
            sx={{
              color: '#376586',
              fontWeight: '600',
              ...fontStyleOpenSans,
            }}
          >
            Connect with us
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: '#376586',
              fontWeight: '400',
              ...fontStyleOpenSans,
            }}
          >
            Questions about our products, services or clinical trials? Find the
            right contact person at our Service Center.
          </Typography>
        </Box>

        <YellowButton>Contact Us</YellowButton>
      </Box>
    </Box>
  )
}

export default ConnectWithUsBigScreens
