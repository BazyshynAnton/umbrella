import { Box, Typography } from '../../../shared/ui/MUIglobal/muiGlobal'
import { LazyLoadImage } from '../../../shared/ui/reactImportsGlobal/reactImportsGlobal'
import { fontStyleOpenSans } from '../../../shared/ui/fontStyles/openSans'

import ReusableButtonWithAnimation from '../../../shared/globalButtons/ReusableButtonWithAnimation'

import arrowCircleRightOutlinedIcon from '../../../../assets/pictures/app-icons/arrowCircleRightOutlinedIcon.webp'

const ReusableLeftInfoRightPictureBlock = ({
  headerText,
  text,
  animationFor,
  picture,
  buttonText,
  blockButtonWidth,
  mouseEnter,
  mouseLeave,
  isMouseOver,
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
      </Box>
      <Box
        sx={{
          width: '100%',
          height: '320px',
          overflow: 'hidden',
          borderTopRightRadius: { md: '20px' },
          borderBottomRightRadius: '20px',
          borderBottomLeftRadius: { md: '0px', xs: '20px' },
        }}
      >
        <LazyLoadImage
          style={{
            objectFit: 'cover',
            width: '100%',
            height: '100%',
            transition: 'all 0.3s ease-in-out',
            transform: isMouseOver ? 'scale(1.1)' : '',
          }}
          src={picture}
          alt="scientists"
        />
      </Box>
    </Box>
  )
}

export default ReusableLeftInfoRightPictureBlock
