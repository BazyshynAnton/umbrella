import { Box, Button, Typography } from '@mui/material'
import { useSwiper } from 'swiper/react'
import { fontStyleOpenSans } from '../../../../../context/variables'
import { useEffect, useState } from 'react'

import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import PauseIcon from '@mui/icons-material/Pause'

const CustomPaginationForSwiper = () => {
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

  const handleSlideClick = (index) => {
    swiper.slideTo(index)
  }

  const [isPlayTrue, setIsPlayTrue] = useState(true)
  const handlePauseClick = () => {
    swiper.autoplay.stop()
    setIsPlayTrue(false)
  }
  const handlePLayClick = () => {
    swiper.autoplay.start()
    setIsPlayTrue(true)
  }

  return (
    <Box
      sx={{
        width: '54%',
        height: '100%',
        color: '#376586',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: '1rem',
      }}>
      <Box
        onClick={() => handleSlideClick(0)}
        className={`swiper-pagination-bullet-two ${
          activeIndex === 0 ? 'swiper-pagination-bullet-active-two' : ''
        }`}>
        <Typography
          variant="body1"
          sx={{ fontWeight: '700', cursor: 'pointer', ...fontStyleOpenSans }}>
          What is mRNA?
        </Typography>
      </Box>
      <Box
        onClick={() => handleSlideClick(1)}
        className={`swiper-pagination-bullet-two ${
          activeIndex === 1 ? 'swiper-pagination-bullet-active-two' : ''
        }`}>
        <Typography
          variant="body1"
          sx={{ fontWeight: '700', cursor: 'pointer', ...fontStyleOpenSans }}>
          What does it do?
        </Typography>
      </Box>
      <Box
        onClick={() => handleSlideClick(2)}
        className={`swiper-pagination-bullet-two ${
          activeIndex === 2 ? 'swiper-pagination-bullet-active-two' : ''
        }`}>
        <Typography
          variant="body1"
          sx={{ fontWeight: '700', cursor: 'pointer', ...fontStyleOpenSans }}>
          How does it help make a protein?
        </Typography>
      </Box>
      <Box
        onClick={() => handleSlideClick(3)}
        className={`swiper-pagination-bullet-two ${
          activeIndex === 3 ? 'swiper-pagination-bullet-active-two' : ''
        }`}>
        <Typography
          variant="body1"
          sx={{ fontWeight: '700', cursor: 'pointer', ...fontStyleOpenSans }}>
          What happens after a protein is made?
        </Typography>
      </Box>
      {isPlayTrue ? (
        <Button
          onClick={handlePauseClick}
          sx={{
            width: '35px',
            minWidth: '35px',
            height: '35px',

            ':hover': {
              background: '#d6e5eb',
            },
          }}>
          <PauseIcon sx={{ fontSize: '2.5rem' }} />
        </Button>
      ) : (
        <Button
          onClick={handlePLayClick}
          sx={{
            width: '35px',
            minWidth: '35px',
            height: '35px',

            ':hover': {
              background: '#d6e5eb',
            },
          }}>
          <PlayArrowIcon sx={{ fontSize: '2.5rem' }} />
        </Button>
      )}
    </Box>
  )
}

export default CustomPaginationForSwiper
