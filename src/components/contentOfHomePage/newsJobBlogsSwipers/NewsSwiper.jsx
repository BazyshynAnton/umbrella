import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import ReusableSlideForNewsJobBlogsSwipers from './ReusableSlideForNewsJobBlogsSwipers'
import { newsData } from '../../../data/newsData'
import NavigationButtonForNewsJobBlogsSwiper from './NavigationButtonForNewsJobBlogsSwiper'
import ReusableButtonWithAnimation from '../reusableButtonWithAnimation/ReusableButtonWithAnimation'
import { Box } from '@mui/material'

import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined'

import { useButtonContext } from '../../../context/ButtonContext'

const NewsSwiper = () => {
  const { handleMouseEnterOne, handleMouseLeaveOne, animationForUnderLineOne } =
    useButtonContext()
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={3}
      style={{ marginBottom: '50px' }}
    >
      {newsData.map((el) => (
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
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <NavigationButtonForNewsJobBlogsSwiper />
        <Box
          onMouseEnter={handleMouseEnterOne}
          onMouseLeave={handleMouseLeaveOne}
        >
          <ReusableButtonWithAnimation
            animation={animationForUnderLineOne}
            buttonText={'View all news'}
            icon={<ArrowCircleRightOutlinedIcon sx={{ color: '#d1343e' }} />}
          />
        </Box>
      </Box>
    </Swiper>
  )
}

export default NewsSwiper
