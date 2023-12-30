import { useButtonContext } from '../../../context/ButtonContext'

import ReusableLeftInfoRightPictureBlock from '../shared/Blocks/ReusableLeftInfoRightPictureBlock'

import headquartersPicture from '../../../assets/pictures/headquartersPicture.png'

const text = 'Our headquarters are located in Raccoon City, Missouri, USA.'

const Headquarters = () => {
  const { handleMouseEnter, handleMouseLeave, animations, isMouseOver } =
    useButtonContext()

  return (
    <ReusableLeftInfoRightPictureBlock
      text={text}
      headerText={'Our headquarters'}
      picture={headquartersPicture}
      blockButtonWidth={'134.2px'}
      buttonText={'contact us'}
      mouseEnter={handleMouseEnter(10)}
      mouseLeave={handleMouseLeave(10)}
      animationFor={animations[10]}
      isMouseOver={isMouseOver[10]}
    />
  )
}

export default Headquarters
