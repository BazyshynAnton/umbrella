import { Box, Typography } from '../ui/MUI/mui'
import { fontStyleOpenSans } from '../ui/font/openSans'
import { LazyLoadImage } from '../ui/reactImports/reactImports'

import ReusableButtonWithAnimation from '../Button/ReusableButtonWithAnimation'

import arrowCircleRightOutlinedIcon from '../../../../assets/pictures/app-icons/arrowCircleRightOutlinedIcon.webp'

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
            icon={
              <LazyLoadImage
                style={{
                  width: '18x',
                  height: '18px',
                  padding: '0px 0px 1px 0px',
                }}
                src={arrowCircleRightOutlinedIcon}
                alt="arrow"
              />
            }
            animation={animationFor}
          />
        </Box>
      )}
    </Box>
  )
}

export default ReusableLInkBlock
