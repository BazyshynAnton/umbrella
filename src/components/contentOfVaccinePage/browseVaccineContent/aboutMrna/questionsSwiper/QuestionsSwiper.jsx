import {
  Swiper,
  SwiperSlide,
  Autoplay,
} from '../../../../shared/ui/swiperImportsGlobal/swiperImportsGlobal'
import {
  useEffect,
  useState,
} from '../../../../shared/ui/reactImportsGlobal/reactImportsGlobal'
import { Box } from '../../../../shared/ui/MUIglobal/muiGlobal'
import { infoForQuestionsSwiper } from '../../../../../data/infoForQuestionsSwiper'

import CardForQuestionsSwiper from './CardForQuestionsSwiper'
import SwiperNavBtns from './SwiperNavBtns'

import 'swiper/css'
import 'swiper/css/navigation'

const QuestionsSwiper = () => {
  const [slidesPerView, setSlidesPerView] = useState(3)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 380) {
        setSlidesPerView(1)
      } else if (window.innerWidth <= 680) {
        setSlidesPerView(1)
      } else if (window.innerWidth <= 1000) {
        setSlidesPerView(2)
      } else {
        setSlidesPerView(3)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <Box
      sx={{
        width: '100%',
        height: '300px',
        margin: ' 50px 0px',
      }}
    >
      <Swiper
        spaceBetween={60}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={slidesPerView}
        modules={[Autoplay]}
        style={{ height: '380px', position: 'relative' }}
      >
        {infoForQuestionsSwiper.map((cardInfo) => (
          <SwiperSlide
            key={cardInfo.id}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '300px',
              position: 'relative',
            }}
          >
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
