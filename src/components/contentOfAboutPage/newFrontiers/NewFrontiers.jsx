import { Box, Typography } from '@mui/material'
import ReusableButtonWithAnimation from '../../reusableButtonForHomeAndAboutPages/ReusableButtonWithAnimation'
import newFrontiers from '../../../pictures/newFrontiersPic.jpeg'
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined'
import { useButtonContext } from '../../../context/ButtonContext'

import { fontStyleOpenSans } from '../../../context/variables'

const NewFrontiers = () => {
  const {
    handleMouseEnterSeven,
    handleMouseLeaveSeven,
    animationForUnderLineSeven,
  } = useButtonContext()

  return (
    <Box
      onMouseEnter={handleMouseEnterSeven}
      onMouseLeave={handleMouseLeaveSeven}
      sx={{
        mt: '60px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: '300px',
        cursor: 'pointer',
        ':hover': {
          img: {
            transform: 'scale(1.1)',
          },
        },
      }}
    >
      <Box sx={{ width: '100%', p: '0px 20px 0px 0px' }}>
        <Box>
          <Typography
            sx={{
              fontWeight: '600',
              fontSize: '2rem',
              color: '#053f68',
              ...fontStyleOpenSans,
            }}
          >
            Exploring new frontiers of mRNA
          </Typography>
          <Typography
            sx={{
              fontWeight: '500',
              fontSize: '1rem',
              color: '#376586',
              ...fontStyleOpenSans,
            }}
          >
            With our mRNA Design Studio™ that allows our scientists to design,
            research and test mRNA within days and our internal incubator for
            ongoing exploration, we are boldly going where no biotech company
            has gone before.
          </Typography>
        </Box>
        <Box sx={{ width: '137.5px' }}>
          <ReusableButtonWithAnimation
            buttonText={'learn more'}
            icon={<ArrowCircleRightOutlinedIcon sx={{ color: '#d1343e' }} />}
            animation={animationForUnderLineSeven}
          />
        </Box>
      </Box>
      <Box
        sx={{
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          borderTopRightRadius: '20px',
          borderBottomRightRadius: '20px',
        }}
      >
        <img
          style={{
            objectFit: 'cover',
            width: '100%',
            height: '100%',
            borderTopRightRadius: '20px',
            borderBottomRightRadius: '20px',
            transition: 'all 0.3s ease-in-out',
          }}
          src={newFrontiers}
          alt="scientists"
        />
      </Box>
    </Box>
  )
}

export default NewFrontiers
