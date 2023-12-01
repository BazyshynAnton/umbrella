import YellowButton from '../../yellowButton/YellowButton'
import { Box, Typography } from '@mui/material'

import { fontStyleOpenSans } from '../../../../context/variables'

const StayUpToDateBigScreens = () => {
  return (
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
          sx={{
            color: '#376586',
            fontWeight: '600',
            ...fontStyleOpenSans,
          }}>
          Stay up to date
        </Typography>
        <Box>
          <Typography
            variant="body1"
            sx={{
              color: '#376586',
              fontWeight: '400',
              ...fontStyleOpenSans,
            }}>
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

export default StayUpToDateBigScreens
