import { Box } from '../../shared/ui/MUIglobal/muiGlobal'
import { useButtonContext } from '../../../context/ButtonContext'

import ReusableLInkBlock from '../../shared/globalBlocks/ReusableLInkBlock'
import ReusablePictureForLink from '../../shared/globalBlocks/ReusablePictureForLinkBlock'

import picOfHuman from '../../../assets/pictures/picOfHuman.png'

const headerText = 'Our Mindsets'
const description = 'Alongside our Values'

const OurMindsets = ({ isSmallScreen, t }) => {
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
        text={t(description)}
        headerText={t(headerText)}
        textForButton={t('See our mindsets')}
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
