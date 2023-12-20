import { Box, Typography, useMediaQuery } from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules'
import SwiperCore from 'swiper/core'

import { fontStyleOpenSans } from '../../../../../context/variables'

import firstSlideSwiperProtein from '../../../../../pictures/firstSlideSwiperProtein.jfif'

import secondSlideSwiperProtein from '../../../../../pictures/secondSlideSwiperProtein.jfif'
import thirdSlideSwiperProtein from '../../../../../pictures/thirdSlideSwiperProtein.jfif'
import lastSlideSwiperProtein from '../../../../../pictures/lastSlideSwiperProtein.jfif'

import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'
import CustomPaginationForSwiper from './CustomPaginationForSwiper'
import CustomPaginationNavigationForSmallScreen from './CustomPaginationNavigationForSmallScreen'

SwiperCore.use([Pagination])

const SwiperProteinFactories = () => {
  const isSmallScreen = useMediaQuery('(min-width: 1200px)')
  const isSmallScreenStyle = useMediaQuery('(min-width: 900px)')
  const isSmallScreenStyleTwo = useMediaQuery('(min-width: 530px)')

  const styleForImage = {
    objectFit: 'cover',
    width: `${isSmallScreen ? '300px' : '200px'}`,
    height: `${isSmallScreen ? '300px' : '200px'}`,
    borderRadius: '20px',
  }

  return (
    <>
      <Swiper
        allowTouchMove={true}
        effect={'fade'}
        slidesPerView={1}
        spaceBetween={30}
        loop={false}
        pagination={{
          clickable: true,
          el: '.swiper-pagination',
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        style={{
          width: '100%',
          height: `${
            isSmallScreen
              ? '350px'
              : isSmallScreenStyle
              ? '290px'
              : isSmallScreenStyleTwo
              ? '550px'
              : '500px'
          }`,
          marginTop: '20px',
          display: 'flex',
          justifyContent: 'flex-end',
          flexDirection: 'row-reverse',
          position: 'relative',
        }}
      >
        {isSmallScreen ? (
          <CustomPaginationForSwiper />
        ) : (
          <CustomPaginationNavigationForSmallScreen />
        )}

        <SwiperSlide>
          <Box
            sx={{
              position: 'relative',
              width: { lg: '700px', xs: '100%' },
              height: { md: '300px', xs: '100%' },
              pb: { lg: '0px', md: '50px' },
              display: 'flex',
              flexDirection: { md: 'row', xs: 'column' },
              justifyContent: { md: 'flex-start' },
              alignItems: 'center',
              gap: '1rem',
              border: { lg: '1px solid #0163ae' },
              borderRadius: '20px',
              background: '#fff',
            }}
          >
            <img
              style={styleForImage}
              src={firstSlideSwiperProtein}
              alt="first-slide"
            />
            <Box
              sx={{
                width: { lg: '50%', xs: '100%' },
                padding: { lg: '0px', xs: '5px' },
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  color: '#376586',
                  fontWeight: '700',
                  ...fontStyleOpenSans,
                }}
              >
                What is mRNA?
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: '#376586', ...fontStyleOpenSans }}
              >
                <b>Messenger RNA–or mRNA</b>–exists in all of the cells in your
                body. It is an essential component of all living organisms and
                has been in cells for <b>billions of years</b>.
              </Typography>
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            sx={{
              position: 'relative',
              width: { lg: '700px', xs: '100%' },
              height: { md: '300px', xs: '100%' },
              pb: { lg: '0px', md: '50px' },
              display: 'flex',
              flexDirection: { md: 'row', xs: 'column' },
              justifyContent: { md: 'flex-start' },
              alignItems: 'center',
              gap: '1rem',
              border: { lg: '1px solid #0163ae' },
              borderRadius: '20px',
              background: '#fff',
            }}
          >
            <img
              style={styleForImage}
              src={secondSlideSwiperProtein}
              alt="second-slide"
            />
            <Box
              sx={{
                width: { lg: '50%', xs: '100%' },
                padding: { lg: '0px', xs: '5px' },
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  color: '#376586',
                  fontWeight: '700',
                  ...fontStyleOpenSans,
                }}
              >
                What does it do?
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: '#376586', ...fontStyleOpenSans }}
              >
                Just like its name suggests, mRNA is a <b>messenger</b>. It
                interacts with other components in cells that help create
                proteins.
              </Typography>
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            sx={{
              position: 'relative',
              width: { lg: '700px', xs: '100%' },
              height: { md: '300px', xs: '100%' },
              pb: { lg: '0px', md: '50px' },
              display: 'flex',
              flexDirection: { md: 'row', xs: 'column' },
              justifyContent: { md: 'flex-start' },
              alignItems: 'center',
              gap: '1rem',
              border: { lg: '1px solid #0163ae' },
              borderRadius: '20px',
              background: '#fff',
            }}
          >
            <img
              style={styleForImage}
              src={thirdSlideSwiperProtein}
              alt="third-slide"
            />
            <Box
              sx={{
                width: { lg: '50%', xs: '100%' },
                padding: { lg: '0px', xs: '5px' },
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  color: '#376586',
                  fontWeight: '700',
                  ...fontStyleOpenSans,
                }}
              >
                How does it help make a protein?
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: '#376586', ...fontStyleOpenSans }}
              >
                Each mRNA carries instructions to make a specific protein.
                <br /> These instructions are like a <b>“blueprint.”</b>
                <br /> mRNA delivers these instructions, and cells put the
                protein together.
              </Typography>
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            sx={{
              position: 'relative',
              width: { lg: '700px', xs: '100%' },
              height: { md: '300px', xs: '100%' },
              pb: { lg: '0px', md: '50px' },
              display: 'flex',
              flexDirection: { md: 'row', xs: 'column' },
              justifyContent: { md: 'flex-start' },
              alignItems: 'center',
              gap: '1rem',
              border: { lg: '1px solid #0163ae' },
              borderRadius: '20px',
              background: '#fff',
            }}
          >
            <img
              style={styleForImage}
              src={lastSlideSwiperProtein}
              alt="last-slide"
            />
            <Box
              sx={{
                width: { lg: '50%', xs: '100%' },
                padding: { lg: '0px', xs: '5px' },
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  color: '#376586',
                  fontWeight: '700',
                  ...fontStyleOpenSans,
                }}
              >
                What happens after a protein is made?
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: '#376586', ...fontStyleOpenSans }}
              >
                Once its job is done, an mRNA is <b>broken down</b> by the body.
                It doesn’t stick around for very long.
              </Typography>
            </Box>
          </Box>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default SwiperProteinFactories
