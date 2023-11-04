import { useSpring, animated, config } from '@react-spring/web'
import { useState } from 'react'

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
import quote from '../../../pictures/quote.png'

import 'swiper/css'
import 'swiper/css/effect-creative'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Typography } from '@mui/material'

const stylesForPictures = {
  objectFit: 'cover',
  width: '100%',
  height: '100%',
  transition: 'ease',
}

const stylesForQuotes = {
  objectFit: 'cover',
  width: '40px',
  height: '30px',
  position: 'absolute',
  top: '0',
  left: '-45px',
}

const stylesForTextInSlides = {
  redText: {
    color: 'red',
    fontFamily: "'Tilt Warp', sans-serif",
    fontSize: '1.5rem',
    letterSpacing: '0.07em',
    lineHeight: '1em',
    textAlign: 'left',
    textTransform: 'uppercase',
    cursor: 'default',
  },

  yellowText: {
    fontFamily: "'Figtree', sans-serif",
    fontWeight: '600',
    fontSize: '1.2rem',
    color: '#DAA520',
    cursor: 'default',
  },
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

  const [activeIndex, setActiveIndex] = useState(0)

  const textAnimation1 = useSpring({
    from: activeIndex === 0 ? { opacity: 0, x: -1000 } : { opacity: 0, x: 0 },
    to: activeIndex === 0 ? { opacity: 1, x: 0 } : { opacity: 0, x: -1000 },
    config: config.slow,
  })

  const textAnimation2 = useSpring({
    opacity: activeIndex === 1 ? 1 : 0,
    transform: activeIndex === 1 ? 'translateX(0px)' : 'translateX(-1000px)',
    config: config.slow,
  })

  const textAnimation3 = useSpring({
    opacity: activeIndex === 2 ? 1 : 0,
    transform: activeIndex === 2 ? 'translateX(0px)' : 'translateX(-1000px)',
    config: config.slow,
  })

  const textAnimation4 = useSpring({
    opacity: activeIndex === 3 ? 1 : 0,
    transform: activeIndex === 3 ? 'translateX(0px)' : 'translateX(-1000px)',
    config: config.slow,
  })

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex)
  }

  return (
    <Swiper
      onSlideChange={handleSlideChange}
      spaceBetween={50}
      slidesPerView={1}
      loop={false}
      effect={'creative'}
      speed={600}
      creativeEffect={{
        prev: {
          shadow: true,
          translate: [0, 0, -400],
        },
        next: {
          translate: ['100%', 0, 0],
        },
      }}
      // autoplay={{
      //   delay: 3000,
      //   disableOnInteraction: false,
      // }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[EffectCreative, Pagination, Navigation, Autoplay]}>
      <SwiperSlide style={{ position: 'relative' }}>
        <animated.img
          style={{ ...stylesForPictures, ...animatedStyles }}
          src={slideForHomePageOne}
          alt="slide-1"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
        <animated.div
          style={{
            position: 'absolute',
            top: '150px',
            left: '85px',
            pointerEvents: 'none',
            ...textAnimation1,
          }}>
          <img style={stylesForQuotes} src={quote} alt="quotes" />
          <Typography variant="body1" sx={stylesForTextInSlides.redText}>
            Protect Yourself
            <br />
            <Typography variant="caption" sx={stylesForTextInSlides.yellowText}>
              and Others:
            </Typography>
            <br />
            Vaccination - the key
            <br /> to a safer tomorrow!
          </Typography>
        </animated.div>
      </SwiperSlide>
      <SwiperSlide>
        <animated.img
          style={{ ...stylesForPictures, ...animatedStyles }}
          src={slideForHomePageTwo}
          alt="slide-2"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
        <animated.div
          style={{
            position: 'absolute',
            top: '150px',
            left: '85px',
            pointerEvents: 'none',
            ...textAnimation2,
          }}>
          <img style={stylesForQuotes} src={quote} alt="quotes" />
          <Typography variant="body1" sx={stylesForTextInSlides.redText}>
            Together
            <br />
            we are stronger:
            <br />
            protect yourself
            <br />
            <Typography variant="caption" sx={stylesForTextInSlides.yellowText}>
              and your loved
            </Typography>
            <br />
            ones with the vaccine!
          </Typography>
        </animated.div>
      </SwiperSlide>
      <SwiperSlide>
        <animated.img
          style={{ ...stylesForPictures, ...animatedStyles }}
          src={slideForHomePageThree}
          alt="slide-3"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
        <animated.div
          style={{
            position: 'absolute',
            top: '150px',
            left: '85px',
            pointerEvents: 'none',
            ...textAnimation3,
          }}>
          <img style={stylesForQuotes} src={quote} alt="quotes" />
          <Typography variant="body1" sx={stylesForTextInSlides.redText}>
            Take
            <br />
            the Umbrella vaccine
            <br />
            to strengthen
            <br />
            <Typography variant="caption" sx={stylesForTextInSlides.yellowText}>
              the immune system
            </Typography>
          </Typography>
        </animated.div>
      </SwiperSlide>
      <SwiperSlide>
        <animated.img
          style={{ ...stylesForPictures, ...animatedStyles }}
          src={slideForHomePageFour}
          alt="slide-4"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
        <animated.div
          style={{
            position: 'absolute',
            top: '150px',
            left: '85px',
            pointerEvents: 'none',
            ...textAnimation4,
          }}>
          <img style={stylesForQuotes} src={quote} alt="quotes" />
          <Typography variant="body1" sx={stylesForTextInSlides.redText}>
            Umbrella:
            <br />
            Innovations
            <br />
            <Typography variant="caption" sx={stylesForTextInSlides.yellowText}>
              with
            </Typography>
            <br />
            Responsibility
          </Typography>
        </animated.div>
      </SwiperSlide>
    </Swiper>
  )
}

export default SlidesForHomePage
