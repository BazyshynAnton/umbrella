import {
  Box,
  Typography,
  useMediaQuery,
} from '../../../../shared/ui/MUIglobal/muiGlobal'
import {
  LazyLoadImage,
  Suspense,
  lazy,
} from '../../../../shared/ui/reactImportsGlobal/reactImportsGlobal'
import {
  Swiper,
  SwiperSlide,
  Navigation,
  Pagination,
  Autoplay,
} from '../../../../shared/ui/swiperImportsGlobal/swiperImportsGlobal'
import { useTranslation } from '../../../../shared/translations/translationsImports'
import { fontStyleOpenSans } from '../../../../shared/ui/fontStyles/openSans'
import { EffectFade } from 'swiper/modules'
import { useHeaderContext } from '../../../../../context/HeaderContext'

import SwiperCore from 'swiper/core'

import CustomPaginationForSwiper from './CustomPaginationForSwiper'

import firstSlideSwiperProtein from '../../../../../assets/pictures/firstSlideSwiperProtein.png'
import secondSlideSwiperProtein from '../../../../../assets/pictures/secondSlideSwiperProtein.png'
import thirdSlideSwiperProtein from '../../../../../assets/pictures/thirdSlideSwiperProtein.png'
import lastSlideSwiperProtein from '../../../../../assets/pictures/lastSlideSwiperProtein.png'

import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'

const CustomPaginationNavigationForSmallScreen = lazy(() =>
  import('./CustomPaginationNavigationForSmallScreen')
)

SwiperCore.use([Pagination])

const SwiperProteinFactories = () => {
  const { setChangeLang } = useHeaderContext()

  const isSmallScreen = useMediaQuery('(min-width: 1200px)')
  const isSmallScreenStyle = useMediaQuery('(min-width: 900px)')
  const isSmallScreenStyleTwo = useMediaQuery('(min-width: 530px)')

  const styleForImage = {
    objectFit: 'cover',
    width: `${isSmallScreen ? '300px' : '200px'}`,
    height: `${isSmallScreen ? '300px' : '200px'}`,
    borderRadius: '20px',
  }

  const { t } = useTranslation()

  return (
    <Swiper
      onClick={() => setChangeLang(false)}
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
        <CustomPaginationForSwiper t={t} />
      ) : (
        <Suspense>
          <CustomPaginationNavigationForSmallScreen />
        </Suspense>
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
          <LazyLoadImage
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
              {t('What is mRNA?')}
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: '#376586', ...fontStyleOpenSans }}
            >
              <b>{t('Messenger RNA–or mRNA')}</b> – {t('exists in all of')}{' '}
              <b>{t('billions of years')}</b>.
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
          <LazyLoadImage
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
              {t('What does it do?')}
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: '#376586', ...fontStyleOpenSans }}
            >
              {t('Just like its')} <b>{t('messenger')}</b>
              {t('It interacts with')}
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
          <LazyLoadImage
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
              {t('How does it help')}
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: '#376586', ...fontStyleOpenSans }}
            >
              {t('Each mRNA carries instructions')}
              <br /> {t('These instructions are like a')}
              <b>“{t('blueprint')}.”</b>
              <br /> {t('mRNA delivers these')}
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
          <LazyLoadImage
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
              {t('What happens after')}
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: '#376586', ...fontStyleOpenSans }}
            >
              {t('Once its job')} <b>{t('broken down')}</b> {t('by the body')}.{' '}
              {t('It doesn’t stick')}.
            </Typography>
          </Box>
        </Box>
      </SwiperSlide>
    </Swiper>
  )
}

export default SwiperProteinFactories
