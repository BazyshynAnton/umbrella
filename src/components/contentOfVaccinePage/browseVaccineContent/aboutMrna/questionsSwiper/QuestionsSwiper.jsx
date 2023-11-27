import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'

import { Box } from '@mui/material'
import { inforForQuestionsSwiper } from '../../../../../data/inforForQuestionsSwiper'
import CardForQuestionsSwiper from './CardForQuestionsSwiper'
import SwiperNavBtns from './SwiperNavBtns'

import { Autoplay } from 'swiper/modules'

const QuestionsSwiper = () => {
  return (
    <Box sx={{ width: '100%', height: '300px', margin: ' 50px 0px' }}>
      <Swiper
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={3}
        modules={[Autoplay]}
        style={{ height: '330px', position: 'relative' }}>
        {inforForQuestionsSwiper.map((cardInfo) => (
          <SwiperSlide
            key={cardInfo.id}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '300px',
              position: 'relative',
            }}>
            <CardForQuestionsSwiper
              img={cardInfo.img}
              header={cardInfo.header}
              text={cardInfo.text}
            />
          </SwiperSlide>
        ))}
        <SwiperNavBtns />
      </Swiper>
    </Box>
  )
}

export default QuestionsSwiper
