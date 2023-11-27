import { Box, Button } from '@mui/material'
import { useSwiper } from 'swiper/react'

import { fontStyleOpenSans } from '../../../../../context/variables'

const SwiperNavBtns = () => {
  const swiper = useSwiper()

  return (
    <Box
      sx={{
        width: '65px',
        height: '20px',
        position: 'absolute',
        bottom: '0px',
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
          border: ' 2px solid #FF0000',
          borderRadius: '8px',
          color: '#FF0000',
          fontWeight: '600',
          lineHeight: '0',

          ':hover': {
            background: 'rgba(255, 0, 0, 0.5)',
            color: '#000',
          },
          ...fontStyleOpenSans,
        }}>
        {'<'}
      </Button>
      <Button
        onClick={() => swiper.slideNext()}
        sx={{
          minWidth: '20px',
          border: ' 2px solid #FF0000',
          borderRadius: '8px',
          color: '#FF0000',
          fontWeight: '600',
          lineHeight: '0',

          ':hover': {
            background: 'rgba(255, 0, 0, 0.5)',
            color: '#000',
          },
          ...fontStyleOpenSans,
        }}>
        {'>'}
      </Button>
    </Box>
  )
}

export default SwiperNavBtns
