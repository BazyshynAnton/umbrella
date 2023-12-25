import { useButtonContext } from '../../../context/ButtonContext'

import ReusableLinkBlockWithPicture from '../shared/Blocks/ReusableLinkBlockWithPicture'
import ReusablePictureForLinkBlock from '../shared/Blocks/ReusablePictureForLinkBlock'

import lifeAtUmbrellaPicture from '../../../assets/pictures/lifeAtUmbrellaPicture.webp'
import smilingScientists from '../../../assets/pictures/smilingScientists.webp'

const headerText = 'Join us and change the world of medicine'

const LifeAtUmbrella = ({ isSmallScreen }) => {
  const {
    handleMouseEnterFive,
    handleMouseLeaveFive,
    animationForUnderLineFive,
  } = useButtonContext()

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'flex-end',
        mt: '30px',
        position: 'relative',
      }}
    >
      <ReusableLinkBlockWithPicture
        textForButton={'life at Umbrella'}
        animationFor={animationForUnderLineFive}
        mainPicture={smilingScientists}
        buttonWidth={'183.39px'}
        headerText={headerText}
        handleEnter={handleMouseEnterFive}
        handleLeave={handleMouseLeaveFive}
      />

      {isSmallScreen && (
        <ReusablePictureForLinkBlock
          topPosition={'13.5px'}
          leftPosition={'0px'}
          picture={lifeAtUmbrellaPicture}
        />
      )}
    </div>
  )
}

export default LifeAtUmbrella
