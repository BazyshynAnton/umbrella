import { useButtonContext } from '../../../context/ButtonContext'

import DateBlock from '../../shared/globalBlocks/DateBlock'
import ReusableLInkBlock from '../../shared/globalBlocks/ReusableLInkBlock'
import ReusablePictureForLinkBlock from '../../shared/globalBlocks/ReusablePictureForLinkBlock'

import meetUmbrellaProtection from '../../../assets/pictures/meetUmbrellaProtection.webp'

const text = 'Umbrella’s goal is'

const OurMission = ({ isSmallScreen }) => {
  const { handleMouseEnter, handleMouseLeave, animations } = useButtonContext()

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'flex-start',
        position: 'relative',
        width: '100%',
      }}
    >
      <div
        onMouseEnter={handleMouseEnter(3)}
        onMouseLeave={handleMouseLeave(3)}
        style={{
          position: 'relative',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: '2.5rem',
          cursor: 'pointer',
          padding: '15px',
        }}
      >
        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
          <DateBlock integer={43} text={'Years of progress'} />
          <DateBlock integer={48} text={'Products in pipeline'} />
          <DateBlock integer={35} text={'Ongoing clinical trials'} />
        </div>
        <ReusableLInkBlock
          textForButton={'see our mission'}
          animationFor={animations[3]}
          text={text}
          headerText={'Meet Umbrella'}
        />
      </div>
      {isSmallScreen && (
        <ReusablePictureForLinkBlock
          picture={meetUmbrellaProtection}
          topPosition={'22.5px'}
          rightPosition={'0px'}
        />
      )}
    </div>
  )
}

export default OurMission
