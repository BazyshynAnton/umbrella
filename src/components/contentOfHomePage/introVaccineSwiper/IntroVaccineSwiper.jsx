import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'

import LeftRightNavigationForIntroSwiper from './contentOfIntroVaccineSlider/LeftRightNavigationForIntroSwiper'
import CustomPaginationForIntroSwiper from './contentOfIntroVaccineSlider/CustomPaginationForIntroSwiper'
import ReusableSlide from './contentOfIntroVaccineSlider/ReusableSlide'

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

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

  return (
    <Swiper
      spaceBetween={30}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      className='mySwiper'
      style={{
        margin: '30px 0px',
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
    </Swiper>
  )
}

export default IntroVaccineSlider
