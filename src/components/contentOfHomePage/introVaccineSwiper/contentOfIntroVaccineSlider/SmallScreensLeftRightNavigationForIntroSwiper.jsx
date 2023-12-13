import { Box, Button, Typography } from '@mui/material'
import { useSwiper } from 'swiper/react'
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded'
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded'
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded'
import { useEffect, useState } from 'react'
import { fontStyleOpenSans } from '../../../../context/variables'
import PauseIcon from '@mui/icons-material/Pause'
const styleForBtns = {
  play: {
    minWidth: '0',
    p: '0px',
    borderRadius: '8px',
    border: '1px solid #507995',
  },
  leftAndRight: {
    minWidth: '0',
    p: '4px',
    borderRadius: '8px',
    border: '1px solid #507995',
  },

  iconPlay: {
    fontSize: '2.5rem',
    color: '#507995',
  },
  iconLeftAndRight: { fontSize: '2rem', color: '#507995' },
}

const SmallScreensLeftRightNavigationForIntroSwiper = () => {
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

  const [isPlayTrue, setIsPlayTrue] = useState(true)
  const handlePauseClick = () => {
    swiper.autoplay.stop()
    setIsPlayTrue(false)
  }
  const handlePLayClick = () => {
    swiper.autoplay.start()
    setIsPlayTrue(true)
  }

  const handleSlideChangePrev = () => {
    swiper.slidePrev()
  }

  const handleSlideChangeNext = () => {
    swiper.slideNext()
  }

  return (
    <Box
      sx={{
        mt: '15px',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        gap: '1rem',
      }}
    >
      <Typography
        sx={{ fontSize: '1.3rem', color: '#053f68', ...fontStyleOpenSans }}
      >
        {activeIndex + 1}/3
      </Typography>

      {!isPlayTrue ? (
        <Button onClick={handlePLayClick} sx={styleForBtns.play}>
          <PlayArrowRoundedIcon sx={styleForBtns.iconPlay} />
        </Button>
      ) : (
        <Button onClick={handlePauseClick} sx={styleForBtns.play}>
          <PauseIcon sx={styleForBtns.iconPlay} />
        </Button>
      )}

      <Button onClick={handleSlideChangePrev} sx={styleForBtns.leftAndRight}>
        <ArrowBackIosRoundedIcon sx={styleForBtns.iconLeftAndRight} />
      </Button>
      <Button onClick={handleSlideChangeNext} sx={styleForBtns.leftAndRight}>
        <ArrowForwardIosRoundedIcon sx={styleForBtns.iconLeftAndRight} />
      </Button>
    </Box>
  )
}

export default SmallScreensLeftRightNavigationForIntroSwiper
