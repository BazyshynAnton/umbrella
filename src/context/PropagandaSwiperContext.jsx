import { createContext, useContext, useState } from 'react'
import { useSpring, config } from '@react-spring/web'
import { useSwiper } from 'swiper/react'

const PropagandaSwiperContext = createContext()

export const usePropagandaSwiperContext = () => {
  const context = useContext(PropagandaSwiperContext)

  return context
}

export const PropagandaSwiperProvider = ({ children }) => {
  const stylesForPictures = {
    objectFit: 'contain',
    width: '100%',
    height: '100%',
    transition: 'ease',
  }

  const stylesForQuotes = {
    objectFit: 'cover',
    width: '40px',
    height: '30px',
    position: 'absolute',
    top: '0',
    left: '-45px',
  }

  const stylesForTextInSlides = {
    blueText: {
      color: '#376586',
      fontFamily: "'Tilt Warp', sans-serif",
      fontSize: { md: '1.5rem', sm: '1rem', xs: '0.8rem' },
      letterSpacing: '0.07em',
      lineHeight: '1em',
      textAlign: 'left',
      textTransform: 'uppercase',
      cursor: 'default',
    },

    yellowText: {
      fontFamily: "'Figtree', sans-serif",
      fontWeight: '600',
      fontSize: { md: '1.2rem', sm: '1rem', xs: '0.8rem' },
      color: '#DAA520',
      cursor: 'default',
    },
  }

  const animationDuration = 50000
  const scaleFrom = 'scale(1)'
  const scaleTo = 'scale(2)'
  const [activeIndex, setActiveIndex] = useState(0)

  const animatedStyles = useSpring({
    from: { transform: scaleFrom },
    to: { transform: scaleTo },

    config: { duration: animationDuration },

    reset: activeIndex !== 0,
  })

  const textAnimation1 = useSpring({
    from: activeIndex === 0 ? { opacity: 0, x: -1000 } : { opacity: 0, x: 0 },
    to: activeIndex === 0 ? { opacity: 1, x: 0 } : { opacity: 0, x: -1000 },
    config: config.slow,
  })

  const textAnimation2 = useSpring({
    opacity: activeIndex === 1 ? 1 : 0,
    transform: activeIndex === 1 ? 'translateX(0px)' : 'translateX(-1000px)',
    config: config.slow,
  })

  const textAnimation3 = useSpring({
    opacity: activeIndex === 2 ? 1 : 0,
    transform: activeIndex === 2 ? 'translateX(0px)' : 'translateX(-1000px)',
    config: config.slow,
  })

  const textAnimation4 = useSpring({
    opacity: activeIndex === 3 ? 1 : 0,
    transform: activeIndex === 3 ? 'translateX(0px)' : 'translateX(-1000px)',
    config: config.slow,
  })

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex)
  }

  const contextValue = {
    stylesForPictures,
    stylesForQuotes,
    stylesForTextInSlides,
    animatedStyles,
    textAnimation1,
    textAnimation2,
    textAnimation3,
    textAnimation4,
    handleSlideChange,
  }

  return (
    <PropagandaSwiperContext.Provider value={contextValue}>
      {children}
    </PropagandaSwiperContext.Provider>
  )
}
