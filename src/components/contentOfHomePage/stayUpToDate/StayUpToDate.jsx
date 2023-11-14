import { Box, Typography } from '@mui/material'
import YellowButton from '../yellowButton/YellowButton'

const StayUpToDate = () => {
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
          sx={{ fontFamily: "'Open Sans', sans-serif", fontWeight: '600' }}>
          Stay up to date
        </Typography>
        <Box>
          <Typography
            variant="body1"
            sx={{ fontFamily: "'Open Sans', sans-serif", fontWeight: '400' }}>
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

export default StayUpToDate
