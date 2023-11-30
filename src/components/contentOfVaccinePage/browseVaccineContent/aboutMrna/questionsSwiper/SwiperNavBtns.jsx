import { Box, Button } from '@mui/material'
import { useSwiper } from 'swiper/react'

import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'

import { fontStyleOpenSans } from '../../../../../context/variables'

const SwiperNavBtns = () => {
  const swiper = useSwiper()

  return (
    <Box
      sx={{
        width: '80px',
        height: '30px',
        position: 'absolute',
        bottom: { sm: '20px', xs: '17px' },
        left: '10px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        zIndex: '100000',
        button: {
          cursor: 'pointer',
        },
      }}>
      <Button
        onClick={() => swiper.slidePrev()}
        sx={{
          minWidth: '20px',
          padding: '2px',
          borderRadius: '8px',
          color: '#376586',
          fontWeight: '600',
          lineHeight: '0',

          ':hover': {
            background: '#d6e5eb',
          },
          ...fontStyleOpenSans,
        }}>
        <KeyboardArrowLeftIcon sx={{ fontSize: '30px' }} />
      </Button>
      <Button
        onClick={() => swiper.slideNext()}
        sx={{
          minWidth: '20px',
          padding: '2px',
          borderRadius: '8px',
          color: '#376586',
          fontWeight: '600',
          lineHeight: '0',

          ':hover': {
            background: '#d6e5eb',
          },
          ...fontStyleOpenSans,
        }}>
        <KeyboardArrowRightIcon sx={{ fontSize: '30px' }} />
      </Button>
    </Box>
  )
}

export default SwiperNavBtns
