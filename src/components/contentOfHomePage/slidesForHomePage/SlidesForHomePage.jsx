import { useSpring, animated, config } from '@react-spring/web'
import { useState } from 'react'
import { Box, Typography } from '@mui/material'

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
  blueText: {
    color: '#376586',
    fontFamily: "'Tilt Warp', sans-serif",
    fontSize: { md: '1.5rem', sm: '1rem', xs: '0.8rem' },
    letterSpacing: '0.07em',
    lineHeight: '1em',
    textAlign: 'left',
    textTransform: 'uppercase',
    cursor: 'default',
  },

  yellowText: {
    fontFamily: "'Figtree', sans-serif",
    fontWeight: '600',
    fontSize: { md: '1.2rem', sm: '1rem', xs: '0.8rem' },
    color: '#DAA520',
    cursor: 'default',
  },
}

const SlidesForHomePage = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const animatedStyles = useSpring({
    from: { transform: 'scale(1)' },
    to: { transform: 'scale(2)' },

    config: { duration: 50000 },

    reset: activeIndex !== 0,
  })
  const animatedStyles1 = useSpring({
    from: { transform: 'scale(1)' },
    to: { transform: 'scale(2)' },

    config: { duration: 50000 },

    reset: activeIndex !== 1,
  })
  const animatedStyles2 = useSpring({
    from: { transform: 'scale(1)' },
    to: { transform: 'scale(2)' },

    config: { duration: 50000 },

    reset: activeIndex !== 2,
  })
  const animatedStyles3 = useSpring({
    from: { transform: 'scale(1)' },
    to: { transform: 'scale(2)' },

    config: { duration: 50000 },

    reset: activeIndex !== 3,
  })

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

  const animationForAllSwiper = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  })

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex)
  }

  return (
    <animated.div style={{ ...animationForAllSwiper }}>
      <Swiper
        className="my-swiper"
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
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[EffectCreative, Pagination, Navigation, Autoplay]}>
        <SwiperSlide style={{ position: 'relative' }}>
          <animated.img
            style={{
              ...stylesForPictures,
              ...animatedStyles,
            }}
            src={slideForHomePageOne}
            alt="slide-1"
          />
          <Box
            sx={{
              position: 'absolute',
              top: { lg: '150px', md: '100px', xs: '30px' },
              left: '85px',
              pointerEvents: 'none',
            }}>
            <animated.div
              style={{
                ...textAnimation1,
              }}>
              <img style={stylesForQuotes} src={quote} alt="quotes" />
              <Typography variant="body1" sx={stylesForTextInSlides.blueText}>
                Protect Yourself
                <br />
                <Typography
                  variant="caption"
                  sx={stylesForTextInSlides.yellowText}>
                  and Others:
                </Typography>
                <br />
                Vaccination - the key
                <br /> to a safer tomorrow!
              </Typography>
            </animated.div>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <animated.img
            style={{ ...stylesForPictures, ...animatedStyles1 }}
            src={slideForHomePageTwo}
            alt="slide-2"
          />
          <Box
            sx={{
              position: 'absolute',
              top: { lg: '150px', md: '100px', xs: '30px' },
              left: '85px',
              pointerEvents: 'none',
            }}>
            <animated.div
              style={{
                ...textAnimation2,
              }}>
              <img style={stylesForQuotes} src={quote} alt="quotes" />
              <Typography variant="body1" sx={stylesForTextInSlides.blueText}>
                Together
                <br />
                we are stronger:
                <br />
                protect yourself
                <br />
                <Typography
                  variant="caption"
                  sx={stylesForTextInSlides.yellowText}>
                  and your loved
                </Typography>
                <br />
                ones with the vaccine!
              </Typography>
            </animated.div>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <animated.img
            style={{ ...stylesForPictures, ...animatedStyles2 }}
            src={slideForHomePageThree}
            alt="slide-3"
          />
          <Box
            sx={{
              position: 'absolute',
              top: { lg: '150px', md: '100px', xs: '30px' },
              left: '85px',
              pointerEvents: 'none',
            }}>
            <animated.div
              style={{
                ...textAnimation3,
              }}>
              <img style={stylesForQuotes} src={quote} alt="quotes" />
              <Typography variant="body1" sx={stylesForTextInSlides.blueText}>
                Take
                <br />
                the Umbrella vaccine
                <br />
                to strengthen
                <br />
                <Typography
                  variant="caption"
                  sx={stylesForTextInSlides.yellowText}>
                  the immune system
                </Typography>
              </Typography>
            </animated.div>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <animated.img
            style={{ ...stylesForPictures, ...animatedStyles3 }}
            src={slideForHomePageFour}
            alt="slide-4"
          />
          <Box
            sx={{
              position: 'absolute',
              top: { lg: '150px', md: '100px', xs: '30px' },
              left: '85px',
              pointerEvents: 'none',
            }}>
            <animated.div
              style={{
                ...textAnimation4,
              }}>
              <img style={stylesForQuotes} src={quote} alt="quotes" />
              <Typography variant="body1" sx={stylesForTextInSlides.blueText}>
                Umbrella:
                <br />
                Innovations
                <br />
                <Typography
                  variant="caption"
                  sx={stylesForTextInSlides.yellowText}>
                  with
                </Typography>
                <br />
                Responsibility
              </Typography>
            </animated.div>
          </Box>
        </SwiperSlide>
      </Swiper>
    </animated.div>
  )
}

export default SlidesForHomePage
