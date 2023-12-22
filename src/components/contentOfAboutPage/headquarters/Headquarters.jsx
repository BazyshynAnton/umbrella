import ReusableLeftInfoRightPictureBlock from '../../reusableComponents/ReusableLeftInfoRightPictureBlock'
import headquartersPicture from '../../../pictures/headquartersPicture.png'
import { useButtonContext } from '../../../context/ButtonContext'

const text = 'Our headquarters are located in Raccoon City, Missouri, USA.'

const Headquarters = () => {
  const { handleMouseEnterTen, handleMouseLeaveTen, animationForUnderLineTen } =
    useButtonContext()

  return (
    <ReusableLeftInfoRightPictureBlock
      text={text}
      headerText={'Our headquarters'}
      picture={headquartersPicture}
      blockButtonWidth={'134.2px'}
      buttonText={'contact us'}
      mouseEnter={handleMouseEnterTen}
      mouseLeave={handleMouseLeaveTen}
      animationFor={animationForUnderLineTen}
    />
  )
}

export default Headquarters
