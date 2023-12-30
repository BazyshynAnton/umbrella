import { useState } from '../../../../shared/ui/reactImportsGlobal/reactImportsGlobal'

import { useSwiper } from '../../../../shared/ui/swiperImportsGlobal/swiperImportsGlobal'
import { Button } from '../../../../shared/ui/MUIglobal/muiGlobal'

import play from '../../../../../assets/pictures/app-icons/play.webp'
import pauseIcon from '../../../../../assets/pictures/app-icons/pauseIcon.webp'

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
          <img
            style={{ width: '35px', height: '35px' }}
            src={pauseIcon}
            alt="play"
          />
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
          <img
            style={{ width: '35px', height: '35px' }}
            src={play}
            alt="play"
          />
        </Button>
      )}
    </>
  )
}

export default CustomAutoPlay
