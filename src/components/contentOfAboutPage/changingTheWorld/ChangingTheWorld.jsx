import { Box } from '@mui/material'
import { NavLink } from 'react-router-dom'
import { useButtonContext } from '../../../context/ButtonContext'
import { useHeaderContext } from '../../../context/HeaderContext'

import ReusablePictureForLink from '../../reusableComponents/ReusablePictureForLinkBlock'
import ReusableLinkBlockWithPicture from '../../reusableComponents/ReusableLinkBlockWithPicture'

import umbrellaGuy from '../../../pictures/umbrellaGuy.png'
import changingTheWorld from '../../../pictures/changingTheWorld.png'

const headerText = 'We’re changing the world of medicine'
const text =
  'We are creating a new category of medicines and harnessing the power of mRNA.'

const ChangingTheWorld = ({ isSmallScreen }) => {
  const { handleMouseEnterSix, handleMouseLeaveSix, animationForUnderLineSix } =
    useButtonContext()
  const { handleActiveLinkTwo } = useHeaderContext()
  return (
    <NavLink to="/vaccine/science-of-mrna" onClick={handleActiveLinkTwo}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: { md: 'flex-end', xs: 'center' },
          mt: '30px',
          position: 'relative',
        }}
      >
        <ReusableLinkBlockWithPicture
          text={text}
          headerText={headerText}
          buttonWidth={'196.9px'}
          mainPicture={umbrellaGuy}
          handleEnter={handleMouseEnterSix}
          handleLeave={handleMouseLeaveSix}
          animationFor={animationForUnderLineSix}
          textForButton={'more about mrna'}
        />
        {isSmallScreen && (
          <ReusablePictureForLink
            topPosition={'24.5px'}
            leftPosition={'0px'}
            picture={changingTheWorld}
          />
        )}
      </Box>
    </NavLink>
  )
}

export default ChangingTheWorld
