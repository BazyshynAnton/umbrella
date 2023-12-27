import { useEffect, useState } from '../../shared/ui/reactImports/reactImports'
import { useSwiper } from '../../shared/ui/swiperImports/swiperImports'
import { Box, Typography } from '../../shared/ui/MUI/mui'
import { fontStyleOpenSans } from '../../shared/ui/font/openSans'
import NavigationLeftButtonForSwipers from '../../shared/Button/NavigationLeftButtonForSwipers'
import NavigationRightButtonForSwipers from '../../shared/Button/NavigationRightButtonForSwipers'
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
    </Box>
  )
}

export default SmallScreensLeftRightNavigationForIntroSwiper
