import { Button } from '@mui/material'
import { fontStyleOpenSans } from '../../../../context/variables'
import { useSwiper } from 'swiper/react'

const LeftRightNavigationForIntroSwiper = ({ children, stylesForBtn, id }) => {
  const swiper = useSwiper()

  return (
    <Button
      onClick={() => {
        if (id === 10) swiper.slideNext()
        else swiper.slidePrev()
      }}
      sx={{
        minWidth: '20px',
        padding: '2px',
        borderRadius: '8px',
        color: '#376586',
        fontWeight: '600',
        lineHeight: '0',
        zIndex: '10',
        ':hover': {
          background: '#d6e5eb',
        },
        ...stylesForBtn,
        ...fontStyleOpenSans,
      }}>
      {children}
    </Button>
  )
}

export default LeftRightNavigationForIntroSwiper
