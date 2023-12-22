import { Box, Typography } from '@mui/material'
import { fontStyleOpenSans } from '../../context/variables'
const DateBlock = ({ integer, text, smallPlus }) => {
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
        <span style={{ fontSize: '3.3rem' }}>{smallPlus}</span>
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
