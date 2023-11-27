import { Box, Typography } from '@mui/material'

import { fontStyleOpenSans } from '../../../../../context/variables'

const CardForQuestionsSwiper = ({ img, header, text, id }) => {
  return (
    <Box
      sx={{
        width: '300px',
        height: '260px',
        borderRadius: '8px',
        cursor: 'pointer',
        transition: '0.3s ease-out',
        zIndex: '99999',
        ':hover': {
          boxShadow: ' 0px 0px 30px black',
          img: {
            transform: 'scale(1.1)',
          },
        },
      }}>
      <Box
        sx={{
          width: '300px',
          height: '150px',
          overflow: 'hidden',
          borderTopRightRadius: '8px',
          borderTopLeftRadius: '8px',
        }}>
        <img
          style={{
            objectFit: 'cover',
            width: '100%',
            height: '100%',
            borderTopRightRadius: '8px',
            borderTopLeftRadius: '8px',
            transition: '0.3s ease-out',
          }}
          src={img}
          alt={id}
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          padding: '8px',
        }}>
        <Typography
          variant="h7"
          sx={{ fontWeight: '600', height: '45px', ...fontStyleOpenSans }}>
          {header}
        </Typography>
        <Typography variant="body2" sx={{ ...fontStyleOpenSans }}>
          {text}
        </Typography>
      </Box>
    </Box>
  )
}

export default CardForQuestionsSwiper
