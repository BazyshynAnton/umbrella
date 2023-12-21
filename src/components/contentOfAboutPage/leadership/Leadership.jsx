import { Box } from '@mui/material'
import ReusableLinkBlockWithPicture from '../../reusableButtonForHomeAndAboutPages/ReusableLinkBlockWithPicture'
import leadershipPicture from '../../../pictures/leadershipPicture.jpg'
import { useButtonContext } from '../../../context/ButtonContext'
import ReusablePictureForLinkBlock from '../../reusableButtonForHomeAndAboutPages/ReusablePictureForLinkBlock'
import leadershipLogo from '../../../pictures/leadershipLogo.png'

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
