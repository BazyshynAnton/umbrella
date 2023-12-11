import { Box, Typography } from '@mui/material'
import { fontStyleOpenSans } from '../../../context/variables'

const ReusableSlideForNewsJobBlogsSwipers = ({ text, date }) => {
  return (
    <Box
      sx={{
        width: '300px',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '2rem',
        padding: '10px 20px',

        ':before': {
          content: '""',
          position: 'absolute',
          width: '8px',
          height: 'calc(100% - 3px)',
          top: '0px',
          left: '0px',
          background:
            'linear-gradient(rgb(13, 89, 143) 0%, rgba(4, 75, 125, 0.58) 100%)',
          borderTopLeftRadius: '12px',
          borderBottomLeftRadius: '12px',
        },
      }}
    >
      <Typography
        variant='body1'
        sx={{
          fontSize: '17px',
          fontWeight: '600',
          color: 'rgb(5, 63, 104)',
          ...fontStyleOpenSans,
        }}
      >
        {text}
      </Typography>
      <Typography
        variant='body1'
        sx={{
          fontSize: '14px',
          color: 'rgb(80, 121, 149)',
          ...fontStyleOpenSans,
        }}
      >
        {date}
      </Typography>
    </Box>
  )
}

export default ReusableSlideForNewsJobBlogsSwipers
