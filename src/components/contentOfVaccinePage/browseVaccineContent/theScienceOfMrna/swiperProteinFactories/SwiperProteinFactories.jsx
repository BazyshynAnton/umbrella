import { Box, Typography } from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules'

import firstSlideSwiperProtein from '../../../../../pictures/firstSlideSwiperProtein.jfif'
import secondSlideSwiperProtein from '../../../../../pictures/secondSlideSwiperProtein.jfif'
import thirdSlideSwiperProtein from '../../../../../pictures/thirdSlideSwiperProtein.jfif'
import lastSlideSwiperProtein from '../../../../../pictures/lastSlideSwiperProtein.jfif'

import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'

const styleForImage = { objectFit: 'cover', width: '350px', height: '350px' }
const fontStyle = { fontFamily: "'Open Sans', sans-serif" }
const colorForImportant = { color: '#FF0000' }

const SwiperProteinFactories = () => {
  return (
    <>
      <Swiper
        effect={'fade'}
        direction={'vertical'}
        slidesPerView={1}
        loop={false}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        style={{ width: '100%', height: '350px', marginTop: '20px' }}>
        <SwiperSlide>
          <Box
            sx={{
              background: '#fff',
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: { lg: '3rem', md: '2rem' },
            }}>
            <img
              style={styleForImage}
              src={firstSlideSwiperProtein}
              alt="first-slide"
            />
            <Box sx={{ width: '50%' }}>
              <Typography variant="h5" sx={{ ...fontStyle }}>
                What is mRNA?
              </Typography>
              <Typography variant="body1" sx={{ ...fontStyle }}>
                <b style={colorForImportant}>Messenger RNA–or mRNA</b>–exists in
                all of the cells in your
                <br /> body. It is an essential component of all living
                organisms and
                <br />
                has been in cells for{' '}
                <b style={colorForImportant}>billions of years</b>.
              </Typography>
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            sx={{
              background: '#fff',
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '3rem',
            }}>
            <img
              style={styleForImage}
              src={secondSlideSwiperProtein}
              alt="second-slide"
            />
            <Box sx={{ width: '50%' }}>
              <Typography variant="h5" sx={{ ...fontStyle }}>
                What does it do?
              </Typography>
              <Typography variant="body1" sx={{ ...fontStyle }}>
                Just like its name suggests, mRNA is a{' '}
                <b style={colorForImportant}>messenger</b>.
                <br /> It interacts with other components in cells that help
                create proteins.
              </Typography>
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            sx={{
              background: '#fff',
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '3rem',
            }}>
            <img
              style={styleForImage}
              src={thirdSlideSwiperProtein}
              alt="third-slide"
            />
            <Box sx={{ width: '50%' }}>
              <Typography variant="h5" sx={{ ...fontStyle }}>
                How does it help make a protein?
              </Typography>
              <Typography variant="body1" sx={{ ...fontStyle }}>
                Each mRNA carries instructions to make a specific protein.
                <br /> These instructions are like a{' '}
                <b style={colorForImportant}>“blueprint.”</b>
                <br /> mRNA delivers these instructions, and cells put the
                protein together.
              </Typography>
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            sx={{
              background: '#fff',
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '3rem',
            }}>
            <img
              style={styleForImage}
              src={lastSlideSwiperProtein}
              alt="last-slide"
            />
            <Box sx={{ width: '50%' }}>
              <Typography variant="h5" sx={{ ...fontStyle }}>
                What happens after a protein is made?
              </Typography>
              <Typography variant="body1" sx={{ ...fontStyle }}>
                Once its job is done, an mRNA is{' '}
                <b style={colorForImportant}>broken down</b> by the body.
                <br /> It doesn’t stick around for very long.
              </Typography>
            </Box>
          </Box>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default SwiperProteinFactories
