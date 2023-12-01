import { createContext, useContext, useState } from 'react'
import { useSpring, config } from '@react-spring/web'

const SlidesForHomePageContext = createContext()

export const useSlidesForHomePageContext = () => {
  const context = useContext(SlidesForHomePageContext)
  if (!context) {
    throw new Error(
      'useSlidesForHomePageContext must be used within an SlidesForHomePageProvider'
    )
  }
  return context
}

export const SlidesForHomePageProvider = ({ children }) => {
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
  const animatedStyles1 = useSpring({
    from: { transform: scaleFrom },
    to: { transform: scaleTo },

    config: { duration: animationDuration },

    reset: activeIndex !== 1,
  })
  const animatedStyles2 = useSpring({
    from: { transform: scaleFrom },
    to: { transform: scaleTo },

    config: { duration: animationDuration },

    reset: activeIndex !== 2,
  })
  const animatedStyles3 = useSpring({
    from: { transform: scaleFrom },
    to: { transform: scaleTo },

    config: { duration: animationDuration },

    reset: activeIndex !== 3,
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

  const animationForAllSwiper = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  })

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex)
  }

  const contextValue = {
    stylesForPictures,
    stylesForQuotes,
    stylesForTextInSlides,
    animatedStyles,
    animatedStyles1,
    animatedStyles2,
    animatedStyles3,
    textAnimation1,
    textAnimation2,
    textAnimation3,
    textAnimation4,
    animationForAllSwiper,
    handleSlideChange,
  }

  return (
    <SlidesForHomePageContext.Provider value={contextValue}>
      {children}
    </SlidesForHomePageContext.Provider>
  )
}
