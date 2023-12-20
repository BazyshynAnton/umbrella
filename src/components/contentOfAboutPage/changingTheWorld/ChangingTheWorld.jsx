import { Box, Typography, useMediaQuery } from '@mui/material'
import { useButtonContext } from '../../../context/ButtonContext'

import ReusableButtonWithAnimation from '../../reusableButtonForHomeAndAboutPages/ReusableButtonWithAnimation'
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined'

import umbrellaGuy from '../../../pictures/umbrellaGuy.png'
import ChangingTheWorldPicture from './ChangingTheWorldPicture'

const ChangingTheWorld = ({ isSmallScreen }) => {
  const { handleMouseEnterSix, handleMouseLeaveSix, animationForUnderLineSix } =
    useButtonContext()

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        mt: '30px',
        position: 'relative',
      }}
    >
      <Box
        onMouseEnter={handleMouseEnterSix}
        onMouseLeave={handleMouseLeaveSix}
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
            src={umbrellaGuy}
            alt="join-us"
          />
        </Box>
        <Box sx={{ p: '15px' }}>
          <Typography
            sx={{ fontWeight: '700', fontSize: '1.6rem', color: '#053f68' }}
          >
            We are creating a new category of medicines and harnessing the power
            of mRNA.
          </Typography>
          <Typography
            sx={{
              fontWeight: '500',
              fontSize: '1rem',
              color: '#053f68',
              pt: '10px',
            }}
          >
            We are creating a new category of medicines and harnessing the power
            of mRNA.
          </Typography>
          <Box sx={{ width: '183.39px', mt: '20px' }}>
            <ReusableButtonWithAnimation
              animation={animationForUnderLineSix}
              buttonText={'life at Umbrella'}
              icon={<ArrowCircleRightOutlinedIcon sx={{ color: '#d1343e' }} />}
            />
          </Box>
        </Box>
      </Box>
      {isSmallScreen && <ChangingTheWorldPicture />}
    </Box>
  )
}

export default ChangingTheWorld
