import {
  useSpring,
  animated,
} from '../../shared/ui/reactSpringImports/reactSpringImports'
import { useEffect, useState } from '../../shared/ui/reactImports/reactImports'
import { useSwiper } from '../../shared/ui/swiperImports/swiperImports'
import { Box } from '../../shared/ui/MUI/mui'

import CustomAutoPlayForIntroVaccineSwiper from './CustomAutoPlayForIntroVaccineSwiper'

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

const stylesForBlocksWithAnimatedLine = {
  position: 'relative',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  width: '40px',
  height: '40px',
  cursor: 'pointer',
}
const pausedStyles = {
  width: '40px',
  height: '2px',
  background: 'rgb(55, 101, 134)',
}

const CustomPaginationForIntroSwiper = ({ pausedSwiper, setPausedSwiper }) => {
  const swiper = useSwiper()

  const allSlidesNavigation = swiper.slides

  const [activeIndex, setActiveIndex] = useState(swiper.activeIndex)

  useEffect(() => {
    const handleSlideChange = () => {
      setActiveIndex(swiper.activeIndex)
    }

    swiper.on('slideChange', handleSlideChange)

    return () => {
      swiper.off('slideChange', handleSlideChange)
    }
  }, [swiper])

  const animationWidth = useSpring({
    from: { width: '0px' },
    to: { width: '40px' },
    reset: true,
    config: { duration: 5000 },
  })

  return (
    <Box
      sx={{
        mt: '12px',

        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.5rem',
      }}
    >
      <CustomAutoPlayForIntroVaccineSwiper
        stylesForPlayPauseBtn={stylesForPauseAndPlayBtn.blocks}
        stylesForIcons={stylesForPauseAndPlayBtn.icons}
        setPausedSwiper={setPausedSwiper}
      />
      {allSlidesNavigation.map((_, index) => (
        <Box
          key={index}
          sx={stylesForBlocksWithAnimatedLine}
          onClick={() => swiper.slideTo(index)}
        >
          <animated.div
            style={
              activeIndex === index && pausedSwiper
                ? {
                    height: '2px',
                    background: 'rgb(55, 101, 134)',
                    ...animationWidth,
                  }
                : activeIndex === index && !pausedSwiper
                ? pausedStyles
                : {}
            }
          />
          <Box
            sx={{
              position: 'absolute',
              left: '0px',
              top: '19px',
              width: '40px',
              height: '2px',
              background: 'rgba(55, 101, 134, 0.4)',
              zIndex: '-1',
            }}
          />
        </Box>
      ))}
    </Box>
  )
}

export default CustomPaginationForIntroSwiper
