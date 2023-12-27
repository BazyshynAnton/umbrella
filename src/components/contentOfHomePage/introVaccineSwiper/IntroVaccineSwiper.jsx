import {
  Suspense,
  lazy,
  useState,
} from '../shared/ui/reactImports/reactImports'
import { useMediaQuery } from '../shared/ui/MUI/mui'
import {
  Swiper,
  SwiperSlide,
  Autoplay,
} from '../shared/ui/swiperImports/swiperImports'

import CustomPaginationForIntroSwiper from './contentOfIntroVaccineSlider/CustomPaginationForIntroSwiper'
import ReusableSlide from './contentOfIntroVaccineSlider/ReusableSlide'
import LeftRightNavigationIntro from './contentOfIntroVaccineSlider/LeftRightNavigationIntro'

import { introVaccineSwiperData } from '../../../data/introVaccineSwiperData'

import 'swiper/css'

const SmallScreensLeftRightNavigationForIntroSwiper = lazy(() =>
  import(
    './contentOfIntroVaccineSlider/SmallScreensLeftRightNavigationForIntroSwiper'
  )
)

const IntroVaccineSlider = () => {
  const [pausedSwiper, setPausedSwiper] = useState(true)
  const isSmallScreen = useMediaQuery('(min-width: 900px)')

  return (
    <Swiper
      spaceBetween={30}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      className="mySwiper"
      style={{
        margin: '0px 0px 30px 0px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {introVaccineSwiperData.map((el) => (
        <SwiperSlide key={el.id}>
          <ReusableSlide
            img={el.img}
            text={el.text}
            buttonText={el.buttonText}
          />
        </SwiperSlide>
      ))}
      {isSmallScreen ? (
        <>
          <LeftRightNavigationIntro />

          <CustomPaginationForIntroSwiper
            pausedSwiper={pausedSwiper}
            setPausedSwiper={setPausedSwiper}
          />
        </>
      ) : (
        <Suspense>
          <SmallScreensLeftRightNavigationForIntroSwiper
            pausedSwiper={pausedSwiper}
            setPausedSwiper={setPausedSwiper}
          />
        </Suspense>
      )}
    </Swiper>
  )
}

export default IntroVaccineSlider
