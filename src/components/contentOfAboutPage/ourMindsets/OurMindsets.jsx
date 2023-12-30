import { Box } from '../../shared/ui/MUIglobal/muiGlobal'
import { useButtonContext } from '../../../context/ButtonContext'

import ReusableLInkBlock from '../../shared/globalBlocks/ReusableLInkBlock'
import ReusablePictureForLink from '../../shared/globalBlocks/ReusablePictureForLinkBlock'

import picOfHuman from '../../../assets/pictures/picOfHuman.png'

const headerText = 'Our Mindsets'
const description =
  'Alongside our Values, our Mindsets allow us to overcome challenges together. We are working to build the best possible version of Umbrella 20 years from now. These Mindsets are tools we are using to build it, together.'

const OurMindsets = ({ isSmallScreen }) => {
  const { handleMouseEnter, handleMouseLeave, animations } = useButtonContext()
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
        buttonWidth={'188.3px'}
        textForButton={'See our mindsets'}
        handleEnter={handleMouseEnter(8)}
        handleLeave={handleMouseLeave(8)}
        animationFor={animations[8]}
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

export default OurMindsets
