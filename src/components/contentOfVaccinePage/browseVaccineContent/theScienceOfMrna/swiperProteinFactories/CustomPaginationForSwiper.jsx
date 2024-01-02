import { Box, Typography } from '../../../../shared/ui/MUIglobal/muiGlobal'
import { useSwiper } from '../../../../shared/ui/swiperImportsGlobal/swiperImportsGlobal'
import { fontStyleOpenSans } from '../../../../shared/ui/fontStyles/openSans'
import {
  useEffect,
  useState,
} from '../../../../shared/ui/reactImportsGlobal/reactImportsGlobal'

import CustomAutoPlay from './CustomAutoPlay'

const CustomPaginationForSwiper = ({ t }) => {
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

  const handleSlideClick = (index) => {
    swiper.slideTo(index)
  }

  return (
    <Box
      sx={{
        minWidth: '32%',
        height: '100%',
        color: '#376586',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: '1rem',
      }}
    >
      <Box
        onClick={() => handleSlideClick(0)}
        className={`swiper-pagination-bullet-two ${
          activeIndex === 0 ? 'swiper-pagination-bullet-active-two' : ''
        }`}
      >
        <Typography
          variant="body1"
          sx={{ fontWeight: '700', cursor: 'pointer', ...fontStyleOpenSans }}
        >
          {t('What is mRNA?')}
        </Typography>
      </Box>
      <Box
        onClick={() => handleSlideClick(1)}
        className={`swiper-pagination-bullet-two ${
          activeIndex === 1 ? 'swiper-pagination-bullet-active-two' : ''
        }`}
      >
        <Typography
          variant="body1"
          sx={{ fontWeight: '700', cursor: 'pointer', ...fontStyleOpenSans }}
        >
          {t('What does it do?')}
        </Typography>
      </Box>
      <Box
        onClick={() => handleSlideClick(2)}
        className={`swiper-pagination-bullet-two ${
          activeIndex === 2 ? 'swiper-pagination-bullet-active-two' : ''
        }`}
      >
        <Typography
          variant="body1"
          sx={{ fontWeight: '700', cursor: 'pointer', ...fontStyleOpenSans }}
        >
          {t('How does it help')}
        </Typography>
      </Box>
      <Box
        onClick={() => handleSlideClick(3)}
        className={`swiper-pagination-bullet-two ${
          activeIndex === 3 ? 'swiper-pagination-bullet-active-two' : ''
        }`}
      >
        <Typography
          variant="body1"
          sx={{ fontWeight: '700', cursor: 'pointer', ...fontStyleOpenSans }}
        >
          {t('What happens after')}
        </Typography>
      </Box>
      <CustomAutoPlay />
    </Box>
  )
}

export default CustomPaginationForSwiper
