import { Box } from '@mui/material'
import { useButtonContext } from '../../../context/ButtonContext'

import umbrellaGuy from '../../../pictures/umbrellaGuy.png'
import ReusablePictureForLink from '../../reusableButtonForHomeAndAboutPages/ReusablePictureForLinkBlock'
import changingTheWorld from '../../../pictures/changingTheWorld.png'
import ReusableLinkBlockWithPicture from '../../reusableButtonForHomeAndAboutPages/ReusableLinkBlockWithPicture'

const headerText = 'We’re changing the world of medicine'
const text =
  'We are creating a new category of medicines and harnessing the power of mRNA.'

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
      <ReusableLinkBlockWithPicture
        text={text}
        headerText={headerText}
        buttonWidth={'256.5px'}
        mainPicture={umbrellaGuy}
        handleEnter={handleMouseEnterSix}
        handleLeave={handleMouseLeaveSix}
        animationFor={animationForUnderLineSix}
        textForButton={'learn more about mrna'}
      />
      {isSmallScreen && (
        <ReusablePictureForLink
          topPosition={'24.5px'}
          leftPosition={'0px'}
          picture={changingTheWorld}
        />
      )}
    </Box>
  )
}

export default ChangingTheWorld
