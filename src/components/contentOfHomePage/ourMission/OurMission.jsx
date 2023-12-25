import { useButtonContext } from '../../../context/ButtonContext'

import DateBlock from '../shared/Blocks/DateBlock'
import ReusableLInkBlock from '../shared/Blocks/ReusableLInkBlock'
import ReusablePictureForLinkBlock from '../shared/Blocks/ReusablePictureForLinkBlock'

import meetUmbrellaProtection from '../../../assets/pictures/meetUmbrellaProtection.webp'

const text =
  'Umbrella’s goal is to deliver on the promise of mRNA science to create a new generation of transformative medicines for patients.'

const OurMission = ({ isSmallScreen }) => {
  const {
    handleMouseEnterFour,
    handleMouseLeaveFour,
    animationForUnderLineFour,
  } = useButtonContext()

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
        onMouseEnter={handleMouseEnterFour}
        onMouseLeave={handleMouseLeaveFour}
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
          textForButton={'See our mission'}
          animationFor={animationForUnderLineFour}
          handleLeave={handleMouseLeaveFour}
          handleEnter={handleMouseEnterFour}
          buttonWidth={'180px'}
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
