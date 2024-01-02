import { NavLink } from '../../shared/ui/reactImportsGlobal/reactImportsGlobal'
import { useButtonContext } from '../../../context/ButtonContext'
import { useHeaderContext } from '../../../context/HeaderContext'

import ReusableLeftInfoRightPictureBlock from '../shared/Blocks/ReusableLeftInfoRightPictureBlock'

import newFrontiersPic from '../../../assets/pictures/newFrontiersPic.jpeg'

const headerText = 'Exploring new'
const text = 'With our mRNA Design'

const NewFrontiers = ({ t }) => {
  const { handleMouseEnter, handleMouseLeave, animations, isMouseOver } =
    useButtonContext()

  const { handleActiveLink } = useHeaderContext()

  return (
    <NavLink to="/vaccine/science-of-mrna" onClick={() => handleActiveLink(2)}>
      <ReusableLeftInfoRightPictureBlock
        mouseEnter={handleMouseEnter(7)}
        mouseLeave={handleMouseLeave(7)}
        picture={newFrontiersPic}
        headerText={t(headerText)}
        text={t(text)}
        buttonText={'learn more'}
        animationFor={animations[7]}
        isMouseOver={isMouseOver[7]}
      />
    </NavLink>
  )
}

export default NewFrontiers
