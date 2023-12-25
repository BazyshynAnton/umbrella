import { useSwiper } from '../../shared/ui/swiperImports/swiperImports'
import { useState } from '../../shared/ui/reactImports/reactImports'
import {
  Button,
  PlayArrowRoundedIcon,
  PauseIcon,
} from '../../shared/ui/MUI/mui'

const CustomAutoPlayForIntroVaccineSwiper = ({
  stylesForIcons,
  stylesForPlayPauseBtn,
  setPausedSwiper,
}) => {
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
        <Button onClick={handlePauseClick} sx={stylesForPlayPauseBtn}>
          <PauseIcon sx={stylesForIcons} />
        </Button>
      ) : (
        <Button onClick={handlePLayClick} sx={stylesForPlayPauseBtn}>
          <PlayArrowRoundedIcon sx={stylesForIcons} />
        </Button>
      )}
    </>
  )
}

export default CustomAutoPlayForIntroVaccineSwiper
