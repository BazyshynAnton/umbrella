import { Box, Typography } from '@mui/material'

import ItemsBlock from './ItemsBlock'

import { fontStyleOpenSans } from '../../../context/variables'

const OurValues = () => {
  return (
    <Box
      sx={{
        mt: '70px',
        display: 'flex',
        flexDirection: { md: 'row', xs: 'column' },
        alignItems: 'center',
      }}
    >
      <Box sx={{ width: '100%', p: '0px 20px 0px 0px' }}>
        <Typography
          sx={{
            fontWeight: '700',
            fontSize: '2.5rem',
            color: '#053f68',
            ...fontStyleOpenSans,
          }}
        >
          Our Values
        </Typography>
        <Typography
          sx={{
            fontWeight: '500',
            fontSize: '1rem',
            color: '#376586',
            ...fontStyleOpenSans,
          }}
        >
          Umbrella people hold a deep sense of responsibility for each other,
          patients, the environment and our local communities. Our people live
          our Values every day.
        </Typography>
      </Box>
      <ItemsBlock />
    </Box>
  )
}

export default OurValues
