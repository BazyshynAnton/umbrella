import { Box, Typography } from '@mui/material'
import { fontStyleOpenSans } from '../../context/variables'
import ReusableButtonWithAnimation from './ReusableButtonWithAnimation'
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined'

const ReusableLInkBlock = ({
  text,
  buttonWidth,
  headerText,
  handleEnter,
  handleLeave,
  animationFor,
  textForButton,
  padding,
}) => {
  return (
    <Box
      sx={{
        width: { md: '600px', sm: '500px', xs: '100%' },
        p: padding,
        cursor: 'pointer',
      }}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <Typography
        sx={{
          fontWeight: '700',
          fontSize: '2rem',
          color: '#053f68',
          ...fontStyleOpenSans,
        }}
      >
        {headerText}
      </Typography>
      <Typography
        sx={{
          fontSize: '1rem',
          color: '#376586',
          pt: '10px',
          ...fontStyleOpenSans,
        }}
      >
        {text}
      </Typography>
      {textForButton && (
        <Box sx={{ width: buttonWidth }}>
          <ReusableButtonWithAnimation
            buttonText={textForButton}
            icon={<ArrowCircleRightOutlinedIcon sx={{ color: '#d1343e' }} />}
            animation={animationFor}
          />
        </Box>
      )}
    </Box>
  )
}

export default ReusableLInkBlock
