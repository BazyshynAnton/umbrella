import {
  useEffect,
  useState,
} from '../../../shared/ui/reactImportsGlobal/reactImportsGlobal'
import { useSwiper } from '../../../shared/ui/swiperImportsGlobal/swiperImportsGlobal'
import { Typography } from '../../../shared/ui/MUIglobal/muiGlobal'
import { fontStyleOpenSans } from '../../../shared/ui/fontStyles/openSans'

import NavigationLeftButtonForSwipers from '../../../shared/globalButtons/NavigationLeftButtonForSwipers'
import NavigationRightButtonForSwipers from '../../../shared/globalButtons/NavigationRightButtonForSwipers'
import CustomAutoPlayForIntroVaccineSwiper from './CustomAutoPlayForIntroVaccineSwiper'

const styleForBtns = {
  play: {
    minWidth: '0',
    p: '4px',
    borderRadius: '8px',
    border: '1px solid #507995',
  },
  leftAndRight: {
    minWidth: '0',
    p: '4px',
    borderRadius: '8px',
    border: '1px solid #507995',
  },
}

const SmallScreensLeftRightNavigationForIntroSwiper = ({ setPausedSwiper }) => {
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

  const handleSlideChangePrev = () => {
    swiper.slidePrev()
  }

  const handleSlideChangeNext = () => {
    swiper.slideNext()
  }

  return (
    <div
      style={{
        marginTop: '15px',
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

      <CustomAutoPlayForIntroVaccineSwiper
        stylesForPlayPauseBtn={styleForBtns.play}
        setPausedSwiper={setPausedSwiper}
      />

      <NavigationLeftButtonForSwipers
        styles={styleForBtns.leftAndRight}
        handleClick={handleSlideChangePrev}
      />
      <NavigationRightButtonForSwipers
        styles={styleForBtns.leftAndRight}
        handleClick={handleSlideChangeNext}
      />
    </div>
  )
}

export default SmallScreensLeftRightNavigationForIntroSwiper
