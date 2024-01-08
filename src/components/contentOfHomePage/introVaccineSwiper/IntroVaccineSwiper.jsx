import {
  Suspense,
  lazy,
  useState,
} from '../../shared/ui/reactImportsGlobal/reactImportsGlobal'
import { useMediaQuery } from '../../shared/ui/MUIglobal/muiGlobal'
import {
  Swiper,
  SwiperSlide,
  Autoplay,
} from '../../shared/ui/swiperImportsGlobal/swiperImportsGlobal'
import { useHeaderContext } from '../../../context/HeaderContext'

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
  const { setChangeLang } = useHeaderContext()
  const [pausedSwiper, setPausedSwiper] = useState(true)
  const isSmallScreen = useMediaQuery('(min-width: 900px)')

  return (
    <Swiper
      onClick={() => setChangeLang(false)}
      spaceBetween={30}
      autoplay={true}
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
            fontSize={el.fontSize}
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
