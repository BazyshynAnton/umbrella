import { Box, Typography } from '@mui/material'

import { fontStyleOpenSans } from '../../../../../context/variables'

const CardForQuestionsSwiper = ({ img, header, text, id }) => {
  return (
    <Box
      sx={{
        width: { sm: '300px', xs: '240px' },
        height: { sm: '260px', xs: '240px' },
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
          width: { sm: '300px', xs: '240px' },
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
          sx={{
            fontSize: '16px',
            fontWeight: '600',
            height: '45px',
            color: '#376586',
            ...fontStyleOpenSans,
          }}>
          {header}
        </Typography>
        <Typography
          variant="body2"
          sx={{ fontSize: '14', color: '#376586', ...fontStyleOpenSans }}>
          {text}
        </Typography>
      </Box>
    </Box>
  )
}

export default CardForQuestionsSwiper
