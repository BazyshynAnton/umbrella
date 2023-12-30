import { Box } from '../../shared/ui/MUIglobal/muiGlobal'
import {
  NavLink,
  lazy,
  Suspense,
} from '../../shared/ui/reactImportsGlobal/reactImportsGlobal'
import { useButtonContext } from '../../../context/ButtonContext'
import { useHeaderContext } from '../../../context/HeaderContext'

import ReusableLinkBlockWithPicture from '../../shared/globalBlocks/ReusableLinkBlockWithPicture'

import umbrellaGuy from '../../../assets/pictures/umbrellaGuy.png'
import changingTheWorld from '../../../assets/pictures/changingTheWorld.png'

const ReusablePictureForLinkBlock = lazy(() =>
  import('../../shared/globalBlocks/ReusablePictureForLinkBlock')
)

const headerText = 'We’re changing the world of medicine'
const text =
  'We are creating a new category of medicines and harnessing the power of mRNA.'

const ChangingTheWorld = ({ isSmallScreen }) => {
  const { handleMouseEnter, handleMouseLeave, animations, isMouseOver } =
    useButtonContext()
  const { handleActiveLink } = useHeaderContext()

  return (
    <NavLink
      to="/vaccine/science-of-mrna"
      onClick={(event) => {
        handleActiveLink(2)
      }}
    >
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
          buttonWidth={'190px'}
          mainPicture={umbrellaGuy}
          handleEnter={handleMouseEnter(6)}
          handleLeave={handleMouseLeave(6)}
          animationFor={animations[6]}
          textForButton={'more about mrna'}
          isMouseOver={isMouseOver[6]}
        />
        {isSmallScreen && (
          <Suspense>
            <ReusablePictureForLinkBlock
              topPosition={'24.5px'}
              leftPosition={'0px'}
              picture={changingTheWorld}
            />
          </Suspense>
        )}
      </Box>
    </NavLink>
  )
}

export default ChangingTheWorld
