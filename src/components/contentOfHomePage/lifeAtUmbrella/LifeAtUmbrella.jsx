import { Box } from '@mui/material'
import { useButtonContext } from '../../../context/ButtonContext'

import ReusableLinkBlockWithPicture from '../../reusableComponents/ReusableLinkBlockWithPicture'
import ReusablePictureForLinkBlock from '../../reusableComponents/ReusablePictureForLinkBlock'

import lifeAtUmbrellaPicture from '../../../pictures/lifeAtUmbrellaPicture.png'
import smilingScientists from '../../../pictures/smilingScientists.jpg'

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

      {isSmallScreen && (
        <ReusablePictureForLinkBlock
          topPosition={'13.5px'}
          leftPosition={'0px'}
          picture={lifeAtUmbrellaPicture}
        />
      )}
    </Box>
  )
}

export default LifeAtUmbrella
