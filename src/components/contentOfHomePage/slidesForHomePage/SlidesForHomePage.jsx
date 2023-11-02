import { useSpring, animated } from '@react-spring/web'
import { useEffect, useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import {
  EffectCreative,
  Autoplay,
  Pagination,
  Navigation,
} from 'swiper/modules'

import slideForHomePageOne from '../../../pictures/slideForHomePageOne.jpg'
import slideForHomePageTwo from '../../../pictures/slideForHomePageTwo.jpg'
import slideForHomePageThree from '../../../pictures/slideForHomePageThree.jpg'
import slideForHomePageFour from '../../../pictures/slideForHomePageFour.jpg'

import 'swiper/css'
import 'swiper/css/effect-creative'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const stylesForPictures = {
  objectFit: 'cover',
  width: '100%',
  height: '100%',
  transition: 'ease-in-out',
}

const SlidesForHomePage = () => {
  const [isHovered, setHovered] = useState(false)

  const handleMouseEnter = () => {
    setHovered(true)
  }

  const handleMouseLeave = () => {
    setHovered(false)
  }

  const animatedStyles = useSpring({
    transform: isHovered ? 'scale(1.2)' : 'scale(1)',
  })
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      effect={'creative'}
      creativeEffect={{
        prev: {
          shadow: true,
          translate: [0, 0, -400],
        },
        next: {
          translate: ['100%', 0, 0],
        },
      }}
      //   autoplay={{
      //     delay: 2500,
      //     disableOnInteraction: false,
      //   }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[EffectCreative, Pagination, Navigation]}>
      <SwiperSlide>
        <animated.img
          style={{ ...stylesForPictures, ...animatedStyles }}
          src={slideForHomePageOne}
          alt="slide-1"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      </SwiperSlide>
      <SwiperSlide>
        <animated.img
          style={{ ...stylesForPictures, ...animatedStyles }}
          src={slideForHomePageTwo}
          alt="slide-2"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      </SwiperSlide>
      <SwiperSlide>
        <animated.img
          style={{ ...stylesForPictures, ...animatedStyles }}
          src={slideForHomePageThree}
          alt="slide-3"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      </SwiperSlide>
      <SwiperSlide>
        <animated.img
          style={{ ...stylesForPictures, ...animatedStyles }}
          src={slideForHomePageFour}
          alt="slide-4"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      </SwiperSlide>
    </Swiper>
  )
}

export default SlidesForHomePage
