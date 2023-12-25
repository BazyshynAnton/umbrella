import { NavLink } from 'react-router-dom'
import { useButtonContext } from '../../../context/ButtonContext'
import { useHeaderContext } from '../../../context/HeaderContext'

import ReusableLeftInfoRightPictureBlock from '../../reusableComponents/ReusableLeftInfoRightPictureBlock'

import newFrontiers from '../../../assets/pictures/newFrontiersPic.webp'

const headerText = 'Exploring new frontiers of mRNA'
const text =
  ' With our mRNA Design Studio™ that allows our scientists to design, research and test mRNA within days and our internal incubator for ongoing exploration, we are boldly going where no biotech company has gone before.'

const NewFrontiers = () => {
  const {
    handleMouseEnterSeven,
    handleMouseLeaveSeven,
    animationForUnderLineSeven,
  } = useButtonContext()

  const { handleActiveLinkTwo } = useHeaderContext()

  return (
    <NavLink to="/vaccine/science-of-mrna" onClick={handleActiveLinkTwo}>
      <ReusableLeftInfoRightPictureBlock
        mouseEnter={handleMouseEnterSeven}
        mouseLeave={handleMouseLeaveSeven}
        picture={newFrontiers}
        blockButtonWidth={'137.5px'}
        text={text}
        headerText={headerText}
        buttonText={'learn more'}
        animationFor={animationForUnderLineSeven}
      />
    </NavLink>
  )
}

export default NewFrontiers
