import { useSwiper } from '../../shared/ui/swiperImportsGlobal/swiperImportsGlobal'
import { fontStyleOpenSans } from '../../shared/ui/fontStyles/openSans'

import NavigationLeftButtonForSwipers from '../../shared/globalButtons/NavigationLeftButtonForSwipers'
import NavigationRightButtonForSwipers from '../../shared/globalButtons/NavigationRightButtonForSwipers'

const styleForBtn = {
  minWidth: '20px',
  padding: '5px',
  borderRadius: '8px',
  color: '#376586',
  fontWeight: '600',
  lineHeight: '0',
  zIndex: '10',
  background: '#d6e5eb',
  ':hover': {
    background: '#d6e5eb',
  },
  ...fontStyleOpenSans,
}

const NavigationButtonForNewsJobBlogsSwiper = () => {
  const swiper = useSwiper()

  const handlePrev = () => {
    swiper.slidePrev()
  }

  const handleNext = () => {
    swiper.slideNext()
  }
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',

        justifyContent: 'space-between',
        width: '95px',
      }}
    >
      <NavigationLeftButtonForSwipers
        styles={styleForBtn}
        handleClick={handlePrev}
      />
      <NavigationRightButtonForSwipers
        styles={styleForBtn}
        handleClick={handleNext}
      />
    </div>
  )
}

export default NavigationButtonForNewsJobBlogsSwiper
