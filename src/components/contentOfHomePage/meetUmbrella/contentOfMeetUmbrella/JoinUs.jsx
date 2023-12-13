import { Box, Typography } from '@mui/material'
import smilingScientists from '../../../../pictures/smilingScientists.jpg'
import ReusableButtonWithAnimation from '../../reusableButtonWithAnimation/ReusableButtonWithAnimation'
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined'
import { useButtonContext } from '../../../../context/ButtonContext'

const JoinUs = () => {
  const {
    handleMouseEnterFive,
    handleMouseLeaveFive,
    animationForUnderLineFive,
  } = useButtonContext()
  return (
    <Box
      onMouseEnter={handleMouseEnterFive}
      onMouseLeave={handleMouseLeaveFive}
      sx={{
        mt: { md: '0px', xs: '20px' },
        mb: { md: '0px', xs: '20px' },
        width: '100%',
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
          widows: '100%',
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
          src={smilingScientists}
          alt='join-us'
        />
      </Box>
      <Box sx={{ p: '15px' }}>
        <Typography
          sx={{ fontWeight: '700', fontSize: '1.6rem', color: '#053f68' }}
        >
          Join us and change the world of medicine
        </Typography>
        <Box sx={{ width: '183.39px', mt: '20px' }}>
          <ReusableButtonWithAnimation
            animation={animationForUnderLineFive}
            buttonText={'life at Umbrella'}
            icon={<ArrowCircleRightOutlinedIcon sx={{ color: '#d1343e' }} />}
          />
        </Box>
      </Box>
    </Box>
  )
}

export default JoinUs
