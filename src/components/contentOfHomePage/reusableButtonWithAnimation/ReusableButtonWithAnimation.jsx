import { Box, Button } from '@mui/material'
import { animated, useSpring } from '@react-spring/web'
import { fontStyleOpenSans } from '../../../context/variables'
import { useState } from 'react'
import { useButtonContext } from '../../../context/ButtonContext'

const ReusableButtonWithAnimation = ({ buttonText, icon }) => {
  const {
    handleMouseEnter,
    handleMouseLeave,
    animationForUnderLine,
    animationForUnderLineTwo,
    animationForUnderLineThree,
  } = useButtonContext()

  return (
    <Box>
      <Button
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        sx={{
          p: '6px 0px',
          display: 'flex',
          gap: '0.3rem',
          fontSize: '16px',
          fontWeight: '600',
          color: '#376586',
          ...fontStyleOpenSans,
        }}
      >
        {buttonText} {icon}
      </Button>
      <animated.div
        style={{
          height: '1px',
          background: '#376586',
          ...animationForUnderLine,
          ...animationForUnderLineTwo,
        }}
      />
    </Box>
  )
}

export default ReusableButtonWithAnimation
