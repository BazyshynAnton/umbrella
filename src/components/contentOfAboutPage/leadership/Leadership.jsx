import { Box } from '@mui/material'
import { useButtonContext } from '../../../context/ButtonContext'

import ReusableLinkBlockWithPicture from '../../reusableComponents/ReusableLinkBlockWithPicture'
import ReusablePictureForLinkBlock from '../../reusableComponents/ReusablePictureForLinkBlock'

import leadershipPicture from '../../../assets/pictures/leadershipPicture.webp'
import leadershipLogo from '../../../assets/pictures/leadershipLogo.webp'

const text =
  'Together, we are working to deliver on the promise of mRNA science for people around the world.'

const Leadership = ({ isSmallScreen }) => {
  const {
    handleMouseEnterNine,
    handleMouseLeaveNine,
    animationForUnderLineNine,
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
        text={text}
        headerText={'Leadership'}
        buttonWidth={'165.1px'}
        textForButton={'meet our team'}
        mainPicture={leadershipPicture}
        handleEnter={handleMouseEnterNine}
        handleLeave={handleMouseLeaveNine}
        animationFor={animationForUnderLineNine}
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
