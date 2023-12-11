import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import ReusableSlideForNewsJobBlogsSwipers from './ReusableSlideForNewsJobBlogsSwipers'
import { blogsData } from '../../../data/blogsData'
import NavigationButtonForNewsJobBlogsSwiper from './NavigationButtonForNewsJobBlogsSwiper'
import { Box } from '@mui/material'
import ReusableButtonWithAnimation from '../reusableButtonWithAnimation/ReusableButtonWithAnimation'
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined'
const JobSwiper = () => {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={3}
      className='mySwiper'
      style={{ marginBottom: '50px' }}
    >
      {blogsData.map((el) => (
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
        <ReusableButtonWithAnimation
          buttonText={'View blog posts'}
          icon={<ArrowCircleRightOutlinedIcon sx={{ color: '#d1343e' }} />}
        />
      </Box>
    </Swiper>
  )
}

export default JobSwiper
