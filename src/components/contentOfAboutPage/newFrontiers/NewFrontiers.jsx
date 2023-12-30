import { NavLink } from '../../shared/ui/reactImportsGlobal/reactImportsGlobal'
import { useButtonContext } from '../../../context/ButtonContext'
import { useHeaderContext } from '../../../context/HeaderContext'

import ReusableLeftInfoRightPictureBlock from '../shared/Blocks/ReusableLeftInfoRightPictureBlock'

import newFrontiersPic from '../../../assets/pictures/newFrontiersPic.jpeg'

const headerText = 'Exploring new frontiers of mRNA'
const text =
  ' With our mRNA Design Studio™ that allows our scientists to design, research and test mRNA within days and our internal incubator for ongoing exploration, we are boldly going where no biotech company has gone before.'

const NewFrontiers = () => {
  const { handleMouseEnter, handleMouseLeave, animations, isMouseOver } =
    useButtonContext()

  const { handleActiveLink } = useHeaderContext()

  return (
    <NavLink to="/vaccine/science-of-mrna" onClick={() => handleActiveLink(2)}>
      <ReusableLeftInfoRightPictureBlock
        mouseEnter={handleMouseEnter(7)}
        mouseLeave={handleMouseLeave(7)}
        picture={newFrontiersPic}
        blockButtonWidth={'134px'}
        text={text}
        headerText={headerText}
        buttonText={'learn more'}
        animationFor={animations[7]}
        isMouseOver={isMouseOver[7]}
      />
    </NavLink>
  )
}

export default NewFrontiers
