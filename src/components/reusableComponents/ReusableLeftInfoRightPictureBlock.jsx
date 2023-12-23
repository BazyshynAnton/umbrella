import {
  Box,
  Typography,
  ArrowCircleRightOutlinedIcon,
} from '../MUIcomponents/MUIcomponents'
import { fontStyleOpenSans } from '../../context/variables'

import ReusableButtonWithAnimation from './ReusableButtonWithAnimation'

const ReusableLeftInfoRightPictureBlock = ({
  headerText,
  text,
  animationFor,
  picture,
  buttonText,
  blockButtonWidth,
  mouseEnter,
  mouseLeave,
}) => {
  return (
    <Box
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      sx={{
        mt: '60px',
        display: 'flex',
        flexDirection: { md: 'row', xs: 'column' },
        alignItems: 'center',
        height: { md: '300px', xs: '100%' },
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
          p: { md: '0px 20px 0px 0px', xs: '0px 0px 20px 0px' },
        }}
      >
        <Box>
          <Typography
            sx={{
              fontWeight: '600',
              fontSize: '2rem',
              color: '#053f68',
              ...fontStyleOpenSans,
            }}
          >
            {headerText}
          </Typography>
          <Typography
            sx={{
              fontWeight: '500',
              fontSize: '1rem',
              color: '#376586',
              ...fontStyleOpenSans,
            }}
          >
            {text}
          </Typography>
        </Box>
        <Box sx={{ width: blockButtonWidth }}>
          <ReusableButtonWithAnimation
            buttonText={buttonText}
            icon={<ArrowCircleRightOutlinedIcon sx={{ color: '#d1343e' }} />}
            animation={animationFor}
          />
        </Box>
      </Box>
      <Box
        sx={{
          width: '100%',
          height: '320px',
          overflow: 'hidden',
          borderTopRightRadius: { md: '20px' },
          borderBottomRightRadius: '20px',
          borderBottomLeftRadius: '20px',
        }}
      >
        <img
          style={{
            objectFit: 'cover',
            width: '100%',
            height: '100%',
            transition: 'all 0.3s ease-in-out',
          }}
          src={picture}
          alt="scientists"
        />
      </Box>
    </Box>
  )
}

export default ReusableLeftInfoRightPictureBlock
