import { Box, Typography } from '@mui/material'
import DateBlock from './DateBlock'
import ReusableButtonWithAnimation from '../../reusableButtonWithAnimation/ReusableButtonWithAnimation'
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined'
import { useButtonContext } from '../../../../context/ButtonContext'
const OurMission = () => {
  const { handleMouseEnterTwo, handleMouseLeaveTwo } = useButtonContext()

  return (
    <Box
      onMouseEnter={handleMouseEnterTwo}
      onMouseLeave={handleMouseLeaveTwo}
      sx={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}
    >
      <Box sx={{ display: 'flex', gap: '2rem' }}>
        <DateBlock integer={43} text={'Years of progress'} />
        <DateBlock integer={48} text={'Products in pipeline'} />
        <DateBlock integer={35} text={'Ongoing clinical trials'} />
      </Box>
      <Box>
        <Typography
          sx={{ fontWeight: '700', fontSize: '2rem', color: '#053f68' }}
        >
          Meet Umbrella
        </Typography>
        <Typography sx={{ fontSize: '18px', color: '#053f68' }}>
          Umbrella’s goal is to deliver on the promise of mRNA science to create
          a new generation of transformative medicines for patients.
        </Typography>
        <Box sx={{ width: '172.55px', mt: '10px' }}>
          <ReusableButtonWithAnimation
            buttonText={'See our mission'}
            icon={<ArrowCircleRightOutlinedIcon sx={{ color: '#d1343e' }} />}
          />
        </Box>
      </Box>
    </Box>
  )
}

export default OurMission
