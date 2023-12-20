import { Button } from '@mui/material'
import { animated } from '@react-spring/web'
import { fontStyleOpenSans } from '../../../context/variables'

const ReusableButtonWithAnimation = ({ buttonText, icon, animation }) => {
  return (
    <>
      <Button
        sx={{
          p: '6px 0px',
          display: 'flex',
          gap: '0.3rem',
          fontSize: '16px',
          fontWeight: '700',
          color: '#053f68',
          ...fontStyleOpenSans,
        }}
      >
        {buttonText} {icon}
      </Button>
      <animated.div
        style={{
          height: '1px',
          background: '#376586',
          ...animation,
        }}
      />
    </>
  )
}

export default ReusableButtonWithAnimation
