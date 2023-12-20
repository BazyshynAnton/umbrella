import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Box } from '@mui/material'

import ReusableButtonWithAnimation from '../../reusableButtonForHomeAndAboutPages/ReusableButtonWithAnimation'
import NavigationButtonForNewsJobBlogsSwiper from './NavigationButtonForNewsJobBlogsSwiper'
import ReusableSlideForNewsJobBlogsSwipers from './ReusableSlideForNewsJobBlogsSwipers'

import 'swiper/css'

const ReusableSwiper = ({
  iterableInfo,
  buttonText,
  handleMouseEnter,
  handleMouseLeave,
  animationForUnderLine,
  icon,
}) => {
  const [slidesPerView, setSlidesPerView] = useState(3)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 600) setSlidesPerView(1)
      else if (window.innerWidth <= 940) setSlidesPerView(2)
      else setSlidesPerView(3)
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={slidesPerView}
      style={{ marginBottom: '50px' }}
    >
      {iterableInfo.map((el) => (
        <SwiperSlide key={el.id} style={{ cursor: 'pointer' }}>
          <ReusableSlideForNewsJobBlogsSwipers text={el.text} date={el.date} />
        </SwiperSlide>
      ))}
      <Box
        sx={{
          mt: '15px',
          p: '0px 10px',
          width: '100%',
          display: 'flex',
          flexDirection: { sm: 'row', xs: 'column' },
          alignItems: { sm: 'center', xs: 'flex-start' },
          justifyContent: { sm: 'space-between' },
        }}
      >
        <NavigationButtonForNewsJobBlogsSwiper />
        <Box onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <ReusableButtonWithAnimation
            animation={animationForUnderLine}
            buttonText={buttonText}
            icon={icon}
          />
        </Box>
      </Box>
    </Swiper>
  )
}

export default ReusableSwiper
