import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import ReusableSlideForNewsJobBlogsSwipers from './ReusableSlideForNewsJobBlogsSwipers'
import { jobData } from '../../../data/jobData'
import NavigationButtonForNewsJobBlogsSwiper from './NavigationButtonForNewsJobBlogsSwiper'
import ReusableButtonWithAnimation from '../reusableButtonWithAnimation/ReusableButtonWithAnimation'
import { Box } from '@mui/material'

import OpenInNewOutlinedIcon from '@mui/icons-material/OpenInNewOutlined'

import { useButtonContext } from '../../../context/ButtonContext'

const JobSwiper = () => {
  const { handleMouseEnterTwo, handleMouseLeaveTwo, animationForUnderLineTwo } =
    useButtonContext()

  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={3}
      className='mySwiper'
      style={{ marginBottom: '50px' }}
    >
      {jobData.map((el) => (
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
          onMouseEnter={handleMouseEnterTwo}
          onMouseLeave={handleMouseLeaveTwo}
        >
          <ReusableButtonWithAnimation
            animation={animationForUnderLineTwo}
            buttonText={'View all job opportunities'}
            icon={<OpenInNewOutlinedIcon sx={{ color: '#d1343e' }} />}
          />
        </Box>
      </Box>
    </Swiper>
  )
}

export default JobSwiper
