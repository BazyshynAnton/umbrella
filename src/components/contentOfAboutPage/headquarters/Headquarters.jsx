import { useButtonContext } from '../../../context/ButtonContext'

import ReusableLeftInfoRightPictureBlock from '../shared/Blocks/ReusableLeftInfoRightPictureBlock'

import headquartersPicture from '../../../assets/pictures/headquartersPicture.png'

const text = 'Our headquarters are'

const Headquarters = ({ t }) => {
  const { handleMouseEnter, handleMouseLeave, animations, isMouseOver } =
    useButtonContext()

  return (
    <ReusableLeftInfoRightPictureBlock
      text={t(text)}
      headerText={t('Our headquarters')}
      picture={headquartersPicture}
      buttonText={t('Contact Us')}
      mouseEnter={handleMouseEnter(10)}
      mouseLeave={handleMouseLeave(10)}
      animationFor={animations[10]}
      isMouseOver={isMouseOver[10]}
    />
  )
}

export default Headquarters
