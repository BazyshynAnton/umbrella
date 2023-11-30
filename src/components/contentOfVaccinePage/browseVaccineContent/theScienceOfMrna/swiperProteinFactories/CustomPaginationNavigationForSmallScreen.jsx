import { Box } from '@mui/material'
import CustomAutoPlay from './CustomAutoPlay'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { useSwiper } from 'swiper/react'
import { useEffect, useState } from 'react'

import { fontStyleOpenSans } from '../../../../../context/variables'

const CustomPaginationNavigationForSmallScreen = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const swiper = useSwiper()

  useEffect(() => {
    const handleSlideChange = () => {
      setActiveIndex(swiper.activeIndex)
    }

    swiper.on('slideChange', handleSlideChange)

    return () => {
      swiper.off('slideChange', handleSlideChange)
    }
  }, [swiper])

  return (
    <Box
      sx={{
        pt: '10px',
        position: 'absolute',
        bottom: '0px',
        zIndex: '100000',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        borderTop: '1px solid rgba(5, 63, 104, 0.5)',
      }}>
      <CustomAutoPlay />
      <Box
        sx={{
          widht: '100px',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          color: 'rgba(5, 63, 104, 1)',
          pl: '20px',
        }}>
        <ArrowBackIosIcon
          sx={{ cursor: 'pointer' }}
          onClick={() => swiper.slidePrev()}
        />
        <ArrowForwardIosIcon
          sx={{ cursor: 'pointer' }}
          onClick={() => swiper.slideNext()}
        />
      </Box>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          color: 'rgba(5, 63, 104, 1)',
          fontWeight: '600',
          fontSize: '1.3rem',
          ...fontStyleOpenSans,
        }}>
        {activeIndex + 1}/4
      </Box>
    </Box>
  )
}

export default CustomPaginationNavigationForSmallScreen
