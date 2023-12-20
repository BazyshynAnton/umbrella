import { Box, Typography } from '@mui/material'
import { fontStyleOpenSans } from '../../../../../context/variables'

const TheScienceOfMrnaForSmallScreens = () => {
  return (
    <Box
      sx={{
        mt: '100px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography
        variant="h3"
        sx={{
          color: '#053f68',
          fontSize: { md: '3rem', sm: '2rem', xs: '1.5rem' },
          textAlign: 'center',
          fontWeight: '600',
          ...fontStyleOpenSans,
        }}
      >
        Your cells are protein factories
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: '#376586',
          textAlign: 'center',
          ...fontStyleOpenSans,
        }}
      >
        Proteins are made in a process called <b>protein synthesis</b>.
        <br /> And that's where mRNA comes in.
      </Typography>
    </Box>
  )
}

export default TheScienceOfMrnaForSmallScreens
