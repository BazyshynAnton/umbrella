import {
  createContext,
  useContext,
  useState,
} from '../components/shared/ui/reactImportsGlobal/reactImportsGlobal'

import {
  useSpring,
  config,
} from '../components/shared/ui/reactSpringImportsGlobal/reactSpringImportsGlobal'

import { fontStyleOpenSans } from '../components/shared/ui/fontStyles/openSans'

const PropagandaSwiperContext = createContext()

export const usePropagandaSwiperContext = () => {
  const context = useContext(PropagandaSwiperContext)

  return context
}

// Custom hook to create text animations
const useTextAnimation = (activeIndex, index) => {
  return useSpring({
    opacity: activeIndex === index ? 1 : 0,
    transform:
      activeIndex === index ? 'translateX(0px)' : 'translateX(-1000px)',
    config: config.slow,
  })
}

export const PropagandaSwiperProvider = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0)

  const styles = {
    forPictures: {
      objectFit: 'contain',
      width: '100%',
      height: '100%',
      transition: 'ease',
    },
    forQuotes: {
      objectFit: 'cover',
      width: '40px',
      height: '30px',
      position: 'absolute',
      top: '0',
      left: '-45px',
    },
    forTextInSlides: {
      blueText: {
        color: '#376586',
        fontWeight: '600',
        fontSize: { md: '1.5rem', sm: '1rem', xs: '0.8rem' },
        letterSpacing: '0.07em',
        lineHeight: '1em',
        textAlign: 'left',
        textTransform: 'uppercase',
        cursor: 'default',
        ...fontStyleOpenSans,
      },

      yellowText: {
        fontWeight: '600',
        fontSize: { md: '1.2rem', sm: '1rem', xs: '0.8rem' },
        color: '#DAA520',
        cursor: 'default',
        ...fontStyleOpenSans,
      },
    },
  }

  // Animations
  const scaleAnimation = useSpring({
    from: { transform: 'scale(1)' },
    to: { transform: 'scale(2)' },
    config: { duration: 50000 },
    reset: activeIndex !== 0,
  })

  const textAnimation1 = useTextAnimation(activeIndex, 0)
  const textAnimation2 = useTextAnimation(activeIndex, 1)
  const textAnimation3 = useTextAnimation(activeIndex, 2)
  const textAnimation4 = useTextAnimation(activeIndex, 3)

  const contextValue = {
    styles,
    scaleAnimation,
    textAnimation1,
    textAnimation2,
    textAnimation3,
    textAnimation4,
    handleSlideChange: (swiper) => setActiveIndex(swiper.activeIndex),
  }

  return (
    <PropagandaSwiperContext.Provider value={contextValue}>
      {children}
    </PropagandaSwiperContext.Provider>
  )
}
