import { EffectCreative } from 'swiper/modules'

import {
  Autoplay,
  Pagination,
  Navigation,
  Swiper,
  SwiperSlide,
} from '../../shared/ui/swiperImportsGlobal/swiperImportsGlobal'

import {
  TextForSlide1,
  TextForSlide2,
  TextForSlide3,
  TextForSlide4,
} from './TextForSlides'
import { LazyLoadImage } from '../../shared/ui/reactImportsGlobal/reactImportsGlobal'
import { usePropagandaSwiperContext } from '../../../context/PropagandaSwiperContext'

import ReusableSlidePropaganda from './ReusableSlidePropaganda'

import slideForHomePageOne from '../../../assets/pictures/slideForHomePageOne.webp'
import slideForHomePageTwo from '../../../assets/pictures/slideForHomePageTwo.webp'
import slideForHomePageThree from '../../../assets/pictures/slideForHomePageThree.webp'
import slideForHomePageFour from '../../../assets/pictures/slideForHomePageFour.webp'
import quote from '../../../assets/pictures/quote.webp'

import 'swiper/css'
import 'swiper/css/effect-creative'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const styleForSlide = { position: 'relative', background: '#fff' }

const PropagandaSwiper = () => {
  const {
    styles,
    scaleAnimation,
    textAnimation1,
    textAnimation2,
    textAnimation3,
    textAnimation4,
    handleSlideChange,
  } = usePropagandaSwiperContext()

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
      <SwiperSlide style={styleForSlide}>
        <ReusableSlidePropaganda
          stylesForPictures={styles.forPictures}
          scaleAnimation={scaleAnimation}
          picture={
            <LazyLoadImage
              style={styles.forPictures}
              src={slideForHomePageOne}
              alt="slide"
            />
          }
          textAnimation={textAnimation1}
          stylesForQuotes={styles.forQuotes}
          quote={quote}
          text={<TextForSlide1 />}
        />
      </SwiperSlide>
      <SwiperSlide style={styleForSlide}>
        <ReusableSlidePropaganda
          stylesForPictures={styles.forPictures}
          scaleAnimation={scaleAnimation}
          picture={
            <LazyLoadImage
              style={styles.forPictures}
              src={slideForHomePageTwo}
              alt="slide"
            />
          }
          textAnimation={textAnimation2}
          stylesForQuotes={styles.forQuotes}
          quote={quote}
          text={<TextForSlide2 />}
        />
      </SwiperSlide>
      <SwiperSlide style={styleForSlide}>
        <ReusableSlidePropaganda
          stylesForPictures={styles.forPictures}
          scaleAnimation={scaleAnimation}
          picture={
            <LazyLoadImage
              style={styles.forPictures}
              src={slideForHomePageThree}
              alt="slide"
            />
          }
          textAnimation={textAnimation3}
          stylesForQuotes={styles.forQuotes}
          quote={quote}
          text={<TextForSlide3 />}
        />
      </SwiperSlide>
      <SwiperSlide style={styleForSlide}>
        <ReusableSlidePropaganda
          stylesForPictures={styles.forPictures}
          scaleAnimation={scaleAnimation}
          picture={
            <LazyLoadImage
              style={styles.forPictures}
              src={slideForHomePageFour}
              alt="slide"
            />
          }
          textAnimation={textAnimation4}
          stylesForQuotes={styles.forQuotes}
          quote={quote}
          text={<TextForSlide4 />}
        />
      </SwiperSlide>
    </Swiper>
  )
}

export default PropagandaSwiper
