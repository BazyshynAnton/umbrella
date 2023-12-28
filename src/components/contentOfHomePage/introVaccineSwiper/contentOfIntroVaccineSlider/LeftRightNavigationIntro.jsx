import { useSwiper } from '../../../shared/ui/swiperImportsGlobal/swiperImportsGlobal'

import NavigationLeftButtonForSwipers from '../../../shared/globalButtons/NavigationLeftButtonForSwipers'
import NavigationRightButtonForSwipers from '../../../shared/globalButtons/NavigationRightButtonForSwipers'

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
    zIndex: '10',
    ':hover': {
      background: 'rgb(55 101 134 / 40%)',
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
