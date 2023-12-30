import { Box, Button } from '../../../../shared/ui/MUIglobal/muiGlobal'
import { useSwiper } from '../../../../shared/ui/swiperImportsGlobal/swiperImportsGlobal'
import { fontStyleOpenSans } from '../../../../shared/ui/fontStyles/openSans'

import arrowForward from '../../../../../assets/pictures/app-icons/arrowForward.webp'
import arrowBack from '../../../../../assets/pictures/app-icons/arrowBack.webp'

const SwiperNavBtns = () => {
  const swiper = useSwiper()

  return (
    <Box
      sx={{
        width: '80px',
        height: '30px',
        position: 'absolute',
        bottom: { sm: '20px', xs: '17px' },
        left: '10px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        zIndex: '100000',
        button: {
          cursor: 'pointer',
        },
      }}
    >
      <Button
        onClick={() => swiper.slidePrev()}
        sx={{
          minWidth: '20px',
          padding: '2px',
          borderRadius: '8px',
          color: '#376586',
          fontWeight: '600',
          lineHeight: '0',

          ':hover': {
            background: '#d6e5eb',
          },
          ...fontStyleOpenSans,
        }}
      >
        <img
          style={{ width: '35px', height: '35px' }}
          src={arrowBack}
          alt="arrow-back"
        />
      </Button>
      <Button
        onClick={() => swiper.slideNext()}
        sx={{
          minWidth: '20px',
          padding: '2px',
          borderRadius: '8px',
          color: '#376586',
          fontWeight: '600',
          lineHeight: '0',

          ':hover': {
            background: '#d6e5eb',
          },
          ...fontStyleOpenSans,
        }}
      >
        <img
          style={{ width: '35px', height: '35px' }}
          src={arrowForward}
          alt="arrow-forward"
        />
      </Button>
    </Box>
  )
}

export default SwiperNavBtns
