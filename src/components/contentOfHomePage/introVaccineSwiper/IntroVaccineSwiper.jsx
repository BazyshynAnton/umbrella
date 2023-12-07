import { Swiper, SwiperSlide } from 'swiper/react'

import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import ReusableSlide from './contentOfIntroVaccineSlider/reusableSlide'

import umbrellaVaccineSlide1 from '../../../pictures/umbrellaVaccineSlide1.png'
import getVaccinatedThisSeasonSlide2 from '../../../pictures/getVaccinatedThisSeasonSlide2.png'
import holidaysVaccineSlide3 from '../../../pictures/holidaysVaccineSlide3.png'

import LeftRightNavigationForIntroSwiper from './contentOfIntroVaccineSlider/LeftRightNavigationForIntroSwiper'

import {
  buttonText1,
  buttonText2,
  buttonText3,
  textForSlide1,
  textForSlide2,
  textForSlide3,
} from './contentOfIntroVaccineSlider/textForSlides'

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import CustomPaginationForIntroSwiper from './contentOfIntroVaccineSlider/CustomPaginationForIntroSwiper'

import CustomAutoplay from '../../contentOfVaccinePage/browseVaccineContent/theScienceOfMrna/swiperProteinFactories/CustomAutoPlay'

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
        margin: '30px 0px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
      <SwiperSlide>
        <ReusableSlide
          img={umbrellaVaccineSlide1}
          text={textForSlide1}
          buttonText={buttonText1}
        />
      </SwiperSlide>
      <SwiperSlide>
        <ReusableSlide
          img={getVaccinatedThisSeasonSlide2}
          text={textForSlide2}
          buttonText={buttonText2}
        />
      </SwiperSlide>
      <SwiperSlide>
        <ReusableSlide
          img={holidaysVaccineSlide3}
          text={textForSlide3}
          buttonText={buttonText3}
        />
      </SwiperSlide>
      <LeftRightNavigationForIntroSwiper
        stylesForBtn={stylesForArrowBtn.left}
        id={20}>
        <ArrowBackIosNewIcon />
      </LeftRightNavigationForIntroSwiper>
      <LeftRightNavigationForIntroSwiper
        stylesForBtn={stylesForArrowBtn.right}
        id={10}>
        <ArrowForwardIosIcon />
      </LeftRightNavigationForIntroSwiper>
      <CustomAutoplay />
      <CustomPaginationForIntroSwiper />
    </Swiper>
  )
}

export default IntroVaccineSlider
