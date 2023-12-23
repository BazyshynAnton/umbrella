import { useState } from 'react'
import {
  ArrowBackIosNewIcon,
  ArrowForwardIosIcon,
  useMediaQuery,
} from '../../MUIcomponents/MUIcomponents'
import {
  Swiper,
  SwiperSlide,
  Autoplay,
} from '../../swiperComponents/swiperComponents'

import LeftRightNavigationForIntroSwiper from './contentOfIntroVaccineSlider/LeftRightNavigationForIntroSwiper'
import CustomPaginationForIntroSwiper from './contentOfIntroVaccineSlider/CustomPaginationForIntroSwiper'
import SmallScreensLeftRightNavigationForIntroSwiper from './contentOfIntroVaccineSlider/SmallScreensLeftRightNavigationForIntroSwiper'
import ReusableSlide from './contentOfIntroVaccineSlider/ReusableSlide'

import { introVaccineSwiperData } from '../../../data/introVaccineSwiperData'

import 'swiper/css'

const stylesForArrowBtn = {
  left: {
    position: 'absolute',
    top: '50%',
    left: '0px',
  },
  right: {
    position: 'absolute',
    top: '50%',
    right: '0px',
  },
}

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
          <LeftRightNavigationForIntroSwiper
            stylesForBtn={stylesForArrowBtn.left}
            id={20}
          >
            <ArrowBackIosNewIcon />
          </LeftRightNavigationForIntroSwiper>
          <LeftRightNavigationForIntroSwiper
            stylesForBtn={stylesForArrowBtn.right}
            id={10}
          >
            <ArrowForwardIosIcon />
          </LeftRightNavigationForIntroSwiper>

          <CustomPaginationForIntroSwiper
            pausedSwiper={pausedSwiper}
            setPausedSwiper={setPausedSwiper}
          />
        </>
      ) : (
        <SmallScreensLeftRightNavigationForIntroSwiper />
      )}
    </Swiper>
  )
}

export default IntroVaccineSlider
