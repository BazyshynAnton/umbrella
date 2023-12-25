import { Box } from '../shared/ui/MUI/mui.js'
import { useSwiper } from '../shared/ui/swiperImports/swiperImports.js'
import { fontStyleOpenSans } from '../shared/ui/font/openSans.js'

import NavigationLeftButtonForSwipers from '../shared/Button/NavigationLeftButtonForSwipers.jsx'
import NavigationRightButtonForSwipers from '../shared/Button/NavigationRightButtonForSwipers.jsx'

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
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '80px',
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
    </Box>
  )
}

export default NavigationButtonForNewsJobBlogsSwiper
