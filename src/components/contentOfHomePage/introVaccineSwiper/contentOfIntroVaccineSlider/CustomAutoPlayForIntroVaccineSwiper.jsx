import { useState } from 'react'

import { Button } from '@mui/material'
import { useSwiper } from 'swiper/react'

import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded'
import PauseIcon from '@mui/icons-material/Pause'

const stylesForPauseAndPlayBtn = {
  blocks: {
    width: '35px',
    minWidth: '35px',
    height: '35px',

    ':hover': {
      background: '#d6e5eb',
    },
  },
  icons: { fontSize: '2.5rem', color: '#376586' },
}

const CustomAutoPlayForIntroVaccineSwiper = ({ setPausedSwiper }) => {
  const swiper = useSwiper()

  const [isPlayTrue, setIsPlayTrue] = useState(true)
  const handlePauseClick = () => {
    swiper.autoplay.stop()
    setIsPlayTrue(false)
    setPausedSwiper(false)
  }
  const handlePLayClick = () => {
    swiper.autoplay.start()
    setIsPlayTrue(true)
    setPausedSwiper(true)
  }
  return (
    <>
      {isPlayTrue ? (
        <Button onClick={handlePauseClick} sx={stylesForPauseAndPlayBtn.blocks}>
          <PauseIcon sx={stylesForPauseAndPlayBtn.icons} />
        </Button>
      ) : (
        <Button onClick={handlePLayClick} sx={stylesForPauseAndPlayBtn.blocks}>
          <PlayArrowRoundedIcon sx={stylesForPauseAndPlayBtn.icons} />
        </Button>
      )}
    </>
  )
}

export default CustomAutoPlayForIntroVaccineSwiper
