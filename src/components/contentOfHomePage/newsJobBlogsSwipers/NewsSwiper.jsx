import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import ReusableSlideForNewsJobBlogsSwipers from './ReusableSlideForNewsJobBlogsSwipers'
import { news } from '../../../data/newsData'
import NavigationButtonForNewsJobBlogsSwiper from './NavigationButtonForNewsJobBlogsSwiper'

const NewsSwiper = () => {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={3}
      className='mySwiper'
      style={{ marginBottom: '50px' }}
    >
      {news.map((el) => (
        <SwiperSlide key={el.id} style={{ cursor: 'pointer' }}>
          <ReusableSlideForNewsJobBlogsSwipers text={el.text} date={el.date} />
        </SwiperSlide>
      ))}
      <NavigationButtonForNewsJobBlogsSwiper />
    </Swiper>
  )
}

export default NewsSwiper
