import { Button } from '@mui/material'
import { useSwiper } from 'swiper/react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import PauseIcon from '@mui/icons-material/Pause'
import { useState } from 'react'

const CustomAutoPlay = () => {
  const swiper = useSwiper()

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
    <>
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
    </>
  )
}

export default CustomAutoPlay
