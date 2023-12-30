import { Box } from '../../shared/ui/MUIglobal/muiGlobal'
import { useButtonContext } from '../../../context/ButtonContext'

import ReusableLinkBlockWithPicture from '../../shared/globalBlocks/ReusableLinkBlockWithPicture'
import ReusablePictureForLinkBlock from '../../shared/globalBlocks/ReusablePictureForLinkBlock'

import leadershipPicture from '../../../assets/pictures/leadershipPicture.jpg'
import leadershipLogo from '../../../assets/pictures/leadershipLogo.png'

const text =
  'Together, we are working to deliver on the promise of mRNA science for people around the world.'

const Leadership = ({ isSmallScreen }) => {
  const { handleMouseEnter, handleMouseLeave, animations, isMouseOver } =
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
      <ReusableLinkBlockWithPicture
        text={text}
        headerText={'Leadership'}
        buttonWidth={'165.1px'}
        textForButton={'meet our team'}
        mainPicture={leadershipPicture}
        handleEnter={handleMouseEnter(9)}
        handleLeave={handleMouseLeave(9)}
        animationFor={animations[9]}
        isMouseOver={isMouseOver[9]}
      />
      {isSmallScreen && (
        <ReusablePictureForLinkBlock
          topPosition={'24.5px'}
          leftPosition={'0px'}
          picture={leadershipLogo}
        />
      )}
    </Box>
  )
}

export default Leadership
