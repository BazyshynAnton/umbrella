import { Box, Typography } from '@mui/material'
import { fontStyleOpenSans } from '../../../../context/variables'
const DateBlock = ({ integer, text }) => {
  return (
    <Box>
      <Typography
        sx={{
          fontWeight: '700',
          fontSize: '4.5rem',
          color: '#5793bf',
          ...fontStyleOpenSans,
        }}
      >
        {integer}
      </Typography>
      <Typography
        sx={{
          fontWeight: '600',
          fontSize: '16px',
          color: '#053f68',
          ...fontStyleOpenSans,
        }}
      >
        {text}
      </Typography>
    </Box>
  )
}

export default DateBlock
