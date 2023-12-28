import { useButtonContext } from '../../../context/ButtonContext'

import ReusableLinkBlockWithPicture from '../../shared/globalBlocks/ReusableLinkBlockWithPicture'
import ReusablePictureForLinkBlock from '../../shared/globalBlocks/ReusablePictureForLinkBlock'

import lifeAtUmbrellaPicture from '../../../assets/pictures/lifeAtUmbrellaPicture.webp'
import smilingScientists from '../../../assets/pictures/smilingScientists.webp'

const headerText = 'Join us and change the world of medicine'

const LifeAtUmbrella = ({ isSmallScreen }) => {
  const { handleMouseEnter, handleMouseLeave, animations, isMouseOver } =
    useButtonContext()

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
        mainPicture={smilingScientists}
        buttonWidth={'182px'}
        headerText={headerText}
        isMouseOver={isMouseOver[4]}
        animationFor={animations[4]}
        handleEnter={handleMouseEnter(4)}
        handleLeave={handleMouseLeave(4)}
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
