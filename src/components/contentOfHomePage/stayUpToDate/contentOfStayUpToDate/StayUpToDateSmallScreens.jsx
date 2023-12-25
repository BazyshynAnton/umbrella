import { Box, Typography } from '../../../MUIcomponents/MUIcomponents'
import { fontStyleOpenSans } from '../../../../context/variables'

import YellowButton from '../../shared/Button/YellowButton'

const StayUpToDateSmallScreens = () => {
  return (
    <Box
      sx={{
        mt: { sm: '20px', xs: '80px' },
        mb: { sm: '20px', xs: '80px' },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '300px',
      }}
    >
      <Box
        sx={{
          width: { sm: '450px', xs: '300px' },
          height: { xs: '300px' },
          border: '1px solid #376586',
          padding: '2pc',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: '1rem',
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
          Stay up to date
        </Typography>
        <Box>
          <Typography
            variant="body1"
            sx={{
              color: '#376586',
              fontWeight: '400',
              ...fontStyleOpenSans,
            }}
          >
            Looking for our latest news?
            <br />
            Sign-up for our alerts here.
          </Typography>
        </Box>
        <YellowButton>Subscribe</YellowButton>
      </Box>
    </Box>
  )
}

export default StayUpToDateSmallScreens
