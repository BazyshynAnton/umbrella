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

import slideForHomePageOne from '../../../assets/pictures/slideForHomePageOne.jpg'
import slideForHomePageTwo from '../../../assets/pictures/slideForHomePageTwo.jpg'
import slideForHomePageThree from '../../../assets/pictures/slideForHomePageThree.jpg'
import slideForHomePageFour from '../../../assets/pictures/slideForHomePageFour.jpg'
import quote from '../../../assets/pictures/quote.webp'

import 'swiper/css'
import 'swiper/css/effect-creative'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { useHeaderContext } from '../../../context/HeaderContext'

const styleForSlide = { position: 'relative', background: '#fff' }

const PropagandaSwiper = () => {
  const { setChangeLang } = useHeaderContext()

  const {
    styles,
    scaleAnimation,
    textAnimation1,
    textAnimation2,
    textAnimation3,
    textAnimation4,
    handleSlideChange,
  } = usePropagandaSwiperContext()

  const slides = [
    {
      src: slideForHomePageOne,
      textAnimation: textAnimation1,
      text: <TextForSlide1 />,
    },
    {
      src: slideForHomePageTwo,
      textAnimation: textAnimation2,
      text: <TextForSlide2 />,
    },
    {
      src: slideForHomePageThree,
      textAnimation: textAnimation3,
      text: <TextForSlide3 />,
    },
    {
      src: slideForHomePageFour,
      textAnimation: textAnimation4,
      text: <TextForSlide4 />,
    },
  ]

  return (
    <Swiper
      onClick={() => setChangeLang(false)}
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
      {slides.map((slide, index) => (
        <SwiperSlide key={index} style={styleForSlide}>
          <ReusableSlidePropaganda
            stylesForPictures={styles.forPictures}
            scaleAnimation={scaleAnimation}
            picture={
              <LazyLoadImage
                style={styles.forPictures}
                src={slide.src}
                alt={`slide ${index + 1}`}
              />
            }
            textAnimation={slide.textAnimation}
            stylesForQuotes={styles.forQuotes}
            quote={quote}
            text={slide.text}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default PropagandaSwiper
