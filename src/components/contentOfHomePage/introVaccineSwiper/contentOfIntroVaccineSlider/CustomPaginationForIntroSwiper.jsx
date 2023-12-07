import { Box } from '@mui/material'
import { useSpring, animated } from '@react-spring/web'
import { useEffect, useState } from 'react'
import { useSwiper } from 'swiper/react'

const stylesForBlocksWithAnimatedLine = {
  position: 'relative',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  width: '40px',
  height: '40px',
  cursor: 'pointer',
}
const qqq = {
  width: '40px',
  height: '2px',
  background: 'red',
}

const CustomPaginationForIntroSwiper = () => {
  const swiper = useSwiper()

  const allSlides = swiper.slides
  const [activeIndex, setActiveIndex] = useState(swiper.activeIndex)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const handleSlideChange = () => {
      setActiveIndex(swiper.activeIndex)
      setIsPaused(swiper.autoplay && swiper.autoplay.running ? false : true)
    }

    swiper.on('slideChange', handleSlideChange)

    return () => {
      swiper.off('slideChange', handleSlideChange)
    }
  }, [swiper])

  const animationWidth = useSpring({
    from: { width: '0px' },
    to: { width: isPaused ? '0px' : '40px' },
    reset: true,
    config: { duration: 5000 },
  })

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        gap: '0.5rem',
      }}>
      {allSlides.map((_, index) => (
        <Box
          key={index}
          sx={stylesForBlocksWithAnimatedLine}
          onClick={() => swiper.slideTo(index)}>
          <animated.div
            style={
              activeIndex === index && !isPaused
                ? {
                    height: '2px',
                    background: 'rgb(55, 101, 134)',
                    ...animationWidth,
                  }
                : { qqq }
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
