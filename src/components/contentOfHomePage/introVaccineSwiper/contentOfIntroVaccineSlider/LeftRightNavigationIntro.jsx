import { useSwiper } from '../../shared/ui/swiperImports/swiperImports'
import NavigationLeftButtonForSwipers from '../../shared/Button/NavigationLeftButtonForSwipers'
import NavigationRightButtonForSwipers from '../../shared/Button/NavigationRightButtonForSwipers'

const stylesForArrowBtn = {
  left: {
    position: 'absolute',
    top: '50%',
    left: '0px',
  },
  right: {
    position: 'absolute',
    top: '50%',
    right: '0px',
  },
  stylesForAll: {
    minWidth: '20px',
    padding: '2px',
    borderRadius: '8px',
    color: '#376586',
    fontWeight: '600',
    lineHeight: '0',
    zIndex: '10',
    ':hover': {
      background: '#d6e5eb',
    },
  },
}

const LeftRightNavigationIntro = () => {
  const swiper = useSwiper()

  const handlePrev = () => {
    swiper.slidePrev()
  }

  const handleNext = () => {
    swiper.slideNext()
  }

  return (
    <>
      <NavigationLeftButtonForSwipers
        styles={{
          ...stylesForArrowBtn.stylesForAll,
          ...stylesForArrowBtn.left,
        }}
        handleClick={handlePrev}
      />
      <NavigationRightButtonForSwipers
        styles={{
          ...stylesForArrowBtn.stylesForAll,
          ...stylesForArrowBtn.right,
        }}
        handleClick={handleNext}
      />
    </>
  )
}

export default LeftRightNavigationIntro
