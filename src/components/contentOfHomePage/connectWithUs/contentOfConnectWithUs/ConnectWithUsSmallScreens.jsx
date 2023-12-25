import { Box, Typography } from '../../../MUIcomponents/MUIcomponents'
import { fontStyleOpenSans } from '../../../../context/variables'

import YellowButton from '../../shared/Button/YellowButton'

import phoneIcon from '../../../../assets/pictures/phoneIcon.webp'
import mailIcon from '../../../../assets/pictures/mailIcon.webp'

const ConnectWithUsSmallScreens = () => {
  return (
    <Box
      sx={{
        mt: { sm: '20px', xs: '80px' },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '450px',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          border: '1px solid #376586',
          background: '#fff',
          width: { md: '600px', sm: '500px', xs: '300px' },
          height: { xs: '400px' },
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
              fontSize: { md: '3rem', sm: '2.5rem', xs: '1.5rem' },
              fontWeight: '600',
              color: '#376586',
              ...fontStyleOpenSans,
            }}
          >
            Connect with us
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontWeight: '400',
              color: '#376586',
              ...fontStyleOpenSans,
            }}
          >
            Questions about our products, services or clinical trials? Find the
            right contact person at our Service Center.
          </Typography>
        </Box>

        <YellowButton>Contact Us</YellowButton>
        <Box
          sx={{
            position: 'absolute',
            top: { md: '-70px', sm: '-60px', xs: '-35px' },
            left: { md: '-70px', sm: '-50px', xs: '-9px' },
            width: { md: '150px', sm: '120px', xs: '100px' },
            height: { md: '150px', sm: '120px', xs: '100px' },
          }}
        >
          <img
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            src={mailIcon}
            alt="animated-mail-icon"
          />
        </Box>
        <Box
          sx={{
            position: 'absolute',
            bottom: { md: '-70px', sm: '-20px', xs: '-20px' },
            right: { md: '-70px', sm: '-40px', xs: '-0px' },
            width: { md: '150px', sm: '120px', xs: '100px' },
            height: { md: '150px', sm: '120px', xs: '100px' },
          }}
        >
          <img
            style={{ objectFit: 'contain', width: '100%', height: '100%' }}
            src={phoneIcon}
            alt="animated-phone-icon"
          />
        </Box>
      </Box>
    </Box>
  )
}

export default ConnectWithUsSmallScreens
