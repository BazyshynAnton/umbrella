import { useSwiper } from '../../shared/ui/swiperImports/swiperImports'
import {
  useState,
  LazyLoadImage,
} from '../../shared/ui/reactImports/reactImports'
import { Button } from '../../shared/ui/MUI/mui'
import play from '../../../../assets/pictures/app-icons/play.webp'
import pauseIcon from '../../../../assets/pictures/app-icons/pauseIcon.webp'

const CustomAutoPlayForIntroVaccineSwiper = ({
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
          <LazyLoadImage
            style={{ width: '35px', height: '35px' }}
            src={pauseIcon}
            alt="play"
          />
        </Button>
      ) : (
        <Button onClick={handlePLayClick} sx={stylesForPlayPauseBtn}>
          <LazyLoadImage
            style={{ width: '35px', height: '35px' }}
            src={play}
            alt="pause"
          />
        </Button>
      )}
    </>
  )
}

export default CustomAutoPlayForIntroVaccineSwiper
