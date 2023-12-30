import {
  useEffect,
  useState,
} from '../../../../shared/ui/reactImportsGlobal/reactImportsGlobal'
import { useSwiper } from '../../../../shared/ui/swiperImportsGlobal/swiperImportsGlobal'
import { fontStyleOpenSans } from '../../../../shared/ui/fontStyles/openSans'

import CustomAutoPlay from './CustomAutoPlay'

import arrowForward from '../../../../../assets/pictures/app-icons/arrowForward.webp'
import arrowBack from '../../../../../assets/pictures/app-icons/arrowBack.webp'

const CustomPaginationNavigationForSmallScreen = () => {
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

  return (
    <div
      style={{
        pt: '10px',
        position: 'absolute',
        bottom: '0px',
        zIndex: '100000',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        borderTop: '1px solid rgba(5, 63, 104, 0.5)',
      }}
    >
      <CustomAutoPlay />
      <div
        style={{
          width: '100px',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          color: '#376586',
          pl: '20px',
        }}
      >
        <div style={{ cursor: 'pointer' }} onClick={() => swiper.slidePrev()}>
          <img
            style={{ width: '40px', height: '40px' }}
            src={arrowBack}
            alt="arrow-back"
          />
        </div>
        <div style={{ cursor: 'pointer' }} onClick={() => swiper.slideNext()}>
          <img
            style={{ width: '40px', height: '40px' }}
            src={arrowForward}
            alt="arrow-forward"
          />
        </div>
      </div>
      <div
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          color: '#376586',
          fontWeight: '600',
          fontSize: '1.3rem',
          ...fontStyleOpenSans,
        }}
      >
        {activeIndex + 1}/4
      </div>
    </div>
  )
}

export default CustomPaginationNavigationForSmallScreen
