import { Box, Typography, useMediaQuery } from '@mui/material'
import smilingScientists from '../../../pictures/smilingScientists.jpg'
import ReusableButtonWithAnimation from '../../reusableButtonForHomeAndAboutPages/ReusableButtonWithAnimation'
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined'
import { useButtonContext } from '../../../context/ButtonContext'
import LifePicture from './contentOfLifeOfUmbrella/LifePicture'
import ReusableLinkBlockWithPicture from '../../reusableButtonForHomeAndAboutPages/ReusableLinkBlockWithPicture'

const headerText = 'Join us and change the world of medicine'

const LifeAtUmbrella = ({ isSmallScreen }) => {
  const {
    handleMouseEnterFive,
    handleMouseLeaveFive,
    animationForUnderLineFive,
  } = useButtonContext()

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        mt: '30px',
        position: 'relative',
      }}
    >
      <ReusableLinkBlockWithPicture
        textForButton={'life at Umbrella'}
        animationFor={animationForUnderLineFive}
        mainPicture={smilingScientists}
        buttonWidth={'183.39px'}
        headerText={headerText}
        handleEnter={handleMouseEnterFive}
        handleLeave={handleMouseLeaveFive}
      />

      {isSmallScreen && <LifePicture />}
      {/* change  {isSmallScreen && <LifePicture />} */}
    </Box>
  )
}

export default LifeAtUmbrella
