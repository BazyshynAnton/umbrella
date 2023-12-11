import { Box, Button } from '@mui/material'
import { useSwiper } from 'swiper/react'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { fontStyleOpenSans } from '../../../context/variables'

const styleForBtn = {
  minWidth: '20px',
  padding: '5px',
  borderRadius: '8px',
  color: '#376586',
  fontWeight: '600',
  lineHeight: '0',
  zIndex: '10',
  background: '#d6e5eb',
  ':hover': {
    background: '#d6e5eb',
  },
  ...fontStyleOpenSans,
}

const NavigationButtonForNewsJobBlogsSwiper = () => {
  const swiper = useSwiper()
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '80px',
      }}
    >
      <Button sx={styleForBtn} onClick={() => swiper.slidePrev()}>
        <ArrowBackIosNewIcon />
      </Button>
      <Button sx={styleForBtn} onClick={() => swiper.slideNext()}>
        <ArrowForwardIosIcon />
      </Button>
    </Box>
  )
}

export default NavigationButtonForNewsJobBlogsSwiper
