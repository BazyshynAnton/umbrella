import { useState } from 'react'

import { useSwiper } from 'swiper/react'
import { Button } from '@mui/material'

import PauseIcon from '@mui/icons-material/Pause'
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded'

const styleForPauseAndPLayIcon = { fontSize: '2.5rem', color: '#376586' }

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
          }}
        >
          <PauseIcon sx={styleForPauseAndPLayIcon} />
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
          }}
        >
          <PlayArrowRoundedIcon sx={styleForPauseAndPLayIcon} />
        </Button>
      )}
    </>
  )
}

export default CustomAutoPlay
