import { Box, Typography } from '../../MUIcomponents/MUIcomponents'
import {
  EffectCreative,
  Autoplay,
  Pagination,
  Navigation,
  Swiper,
  SwiperSlide,
} from '../../swiperComponents/swiperComponents'
import { animated } from '../../reactSpringComponents/reactSpringComponents'
import { usePropagandaSwiperContext } from '../../../context/PropagandaSwiperContext'

import slideForHomePageOne from '../../../assets/pictures/slideForHomePageOne.webp'
import slideForHomePageTwo from '../../../assets/pictures/slideForHomePageTwo.webp'
import slideForHomePageThree from '../../../assets/pictures/slideForHomePageThree.webp'
import slideForHomePageFour from '../../../assets/pictures/slideForHomePageFour.webp'
import quote from '../../../assets/pictures/quote.webp'

import 'swiper/css'
import 'swiper/css/effect-creative'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const PropagandaSwiper = () => {
  const {
    stylesForPictures,
    stylesForQuotes,
    stylesForTextInSlides,
    animatedStyles,
    textAnimation1,
    textAnimation2,
    textAnimation3,
    textAnimation4,
    handleSlideChange,
  } = usePropagandaSwiperContext()

  return (
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
      modules={[EffectCreative, Pagination, Navigation, Autoplay]}
      style={{ height: '100%' }}
    >
      <SwiperSlide style={{ position: 'relative', background: '#fff' }}>
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
          }}
        >
          <animated.div
            style={{
              ...textAnimation1,
            }}
          >
            <img style={stylesForQuotes} src={quote} alt="quotes" />
            <Typography variant="body1" sx={stylesForTextInSlides.blueText}>
              Protect Yourself
              <br />
              <Typography
                variant="caption"
                sx={stylesForTextInSlides.yellowText}
              >
                and Others:
              </Typography>
              <br />
              Vaccination - the key
              <br /> to a safer tomorrow!
            </Typography>
          </animated.div>
        </Box>
      </SwiperSlide>
      <SwiperSlide style={{ position: 'relative', background: '#fff' }}>
        <animated.img
          style={{ ...stylesForPictures, ...animatedStyles }}
          src={slideForHomePageTwo}
          alt="slide-2"
        />
        <Box
          sx={{
            position: 'absolute',
            top: { lg: '150px', md: '100px', xs: '30px' },
            left: '85px',
            pointerEvents: 'none',
          }}
        >
          <animated.div
            style={{
              ...textAnimation2,
            }}
          >
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
                sx={stylesForTextInSlides.yellowText}
              >
                and your loved
              </Typography>
              <br />
              ones with the vaccine!
            </Typography>
          </animated.div>
        </Box>
      </SwiperSlide>
      <SwiperSlide style={{ position: 'relative', background: '#fff' }}>
        <animated.img
          style={{ ...stylesForPictures, ...animatedStyles }}
          src={slideForHomePageThree}
          alt="slide-3"
        />
        <Box
          sx={{
            position: 'absolute',
            top: { lg: '150px', md: '100px', xs: '30px' },
            left: '85px',
            pointerEvents: 'none',
          }}
        >
          <animated.div
            style={{
              ...textAnimation3,
            }}
          >
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
                sx={stylesForTextInSlides.yellowText}
              >
                the immune system
              </Typography>
            </Typography>
          </animated.div>
        </Box>
      </SwiperSlide>
      <SwiperSlide style={{ position: 'relative', background: '#fff' }}>
        <animated.img
          style={{ ...stylesForPictures, ...animatedStyles }}
          src={slideForHomePageFour}
          alt="slide-4"
        />
        <Box
          sx={{
            position: 'absolute',
            top: { lg: '150px', md: '100px', xs: '30px' },
            left: '85px',
            pointerEvents: 'none',
          }}
        >
          <animated.div
            style={{
              ...textAnimation4,
            }}
          >
            <img style={stylesForQuotes} src={quote} alt="quotes" />
            <Typography variant="body1" sx={stylesForTextInSlides.blueText}>
              Umbrella:
              <br />
              Innovations
              <br />
              <Typography
                variant="caption"
                sx={stylesForTextInSlides.yellowText}
              >
                with
              </Typography>
              <br />
              Responsibility
            </Typography>
          </animated.div>
        </Box>
      </SwiperSlide>
    </Swiper>
  )
}

export default PropagandaSwiper
