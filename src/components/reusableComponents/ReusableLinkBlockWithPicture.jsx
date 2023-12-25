import {
  Box,
  Typography,
  ArrowCircleRightOutlinedIcon,
} from '../MUIcomponents/MUIcomponents'
import { fontStyleOpenSans } from '../../context/variables'

import ReusableButtonWithAnimation from '../contentOfHomePage/shared/Button/ReusableButtonWithAnimation'

const ReusableLinkBlockWithPicture = ({
  text,
  headerText,
  handleEnter,
  handleLeave,
  buttonWidth,
  mainPicture,
  animationFor,
  textForButton,
}) => {
  return (
    <Box
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      sx={{
        mt: { md: '0px', xs: '20px' },
        mb: { md: '0px', xs: '20px' },
        width: '600px',
        overflow: 'hidden',
        borderTopRightRadius: '10px',
        borderTopLeftRadius: '10px',
        cursor: 'pointer',
        ':hover': {
          img: {
            transform: 'scale(1.1)',
          },
        },
      }}
    >
      <Box
        sx={{
          width: '100%',
          height: { md: '200px', xs: '300px' },
          overflow: 'hidden',
        }}
      >
        <img
          style={{
            objectFit: 'cover',
            width: '100%',
            height: '100%',
            borderTopRightRadius: '10px',
            borderTopLeftRadius: '10px',
            transition: '0.3s ease-out',
          }}
          src={mainPicture}
          alt="join-us"
        />
      </Box>
      <Box sx={{ p: '15px' }}>
        <Typography
          sx={{ fontWeight: '700', fontSize: '1.6rem', color: '#053f68' }}
        >
          {headerText}
        </Typography>
        {text && (
          <Typography
            sx={{
              fontWeight: '500',
              fontSize: '1rem',
              color: '#376586',
              pt: '10px',
              ...fontStyleOpenSans,
            }}
          >
            {text}
          </Typography>
        )}
        <Box sx={{ width: buttonWidth, mt: '20px' }}>
          <ReusableButtonWithAnimation
            animation={animationFor}
            buttonText={textForButton}
            icon={<ArrowCircleRightOutlinedIcon sx={{ color: '#d1343e' }} />}
          />
        </Box>
      </Box>
    </Box>
  )
}

export default ReusableLinkBlockWithPicture
