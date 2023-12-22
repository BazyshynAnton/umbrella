import { Box } from '@mui/material'
import { useButtonContext } from '../../../context/ButtonContext'

import ReusableLInkBlock from '../../reusableComponents/ReusableLInkBlock'
import ReusablePictureForLink from '../../reusableComponents/ReusablePictureForLinkBlock'

import picOfHuman from '../../../pictures/picOfHuman.png'

const headerText = 'Our Mindsets'
const description =
  'Alongside our Values, our Mindsets allow us to overcome challenges together. We are working to build the best possible version of Umbrella 20 years from now. These Mindsets are tools we are using to build it, together.'

const OurMIndsets = ({ isSmallScreen }) => {
  const {
    handleMouseEnterEight,
    handleMouseLeaveEight,
    animationForUnderLineEight,
  } = useButtonContext()
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        position: 'relative',
        width: '100%',
        height: '400px',
      }}
    >
      <ReusableLInkBlock
        text={description}
        headerText={headerText}
        buttonWidth={'187.7px'}
        textForButton={'See our mindsets'}
        handleEnter={handleMouseEnterEight}
        handleLeave={handleMouseLeaveEight}
        animationFor={animationForUnderLineEight}
      />
      {isSmallScreen && (
        <ReusablePictureForLink
          topPosition={'49.5px'}
          rightPosition={'0px'}
          picture={picOfHuman}
        />
      )}
    </Box>
  )
}

export default OurMIndsets
