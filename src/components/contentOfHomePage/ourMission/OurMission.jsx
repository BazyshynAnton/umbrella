import { Box } from '../../MUIcomponents/MUIcomponents'

import { useButtonContext } from '../../../context/ButtonContext'

import DateBlock from '../../reusableComponents/DateBlock'
import ReusablePictureForLinkBlock from '../../reusableComponents/ReusablePictureForLinkBlock'
import ReusableLInkBlock from '../../reusableComponents/ReusableLInkBlock'

import meetUmbrellaProtection from '../../../pictures/meetUmbrellaProtection.png'

const text =
  'Umbrella’s goal is to deliver on the promise of mRNA science to create a new generation of transformative medicines for patients.'

const OurMission = ({ isSmallScreen }) => {
  const {
    handleMouseEnterFour,
    handleMouseLeaveFour,
    animationForUnderLineFour,
  } = useButtonContext()

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-start',
        position: 'relative',
        width: '100%',
      }}
    >
      <Box
        onMouseEnter={handleMouseEnterFour}
        onMouseLeave={handleMouseLeaveFour}
        sx={{
          position: 'relative',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: '2.5rem',
          cursor: 'pointer',
          p: '15px',
        }}
      >
        <Box sx={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
          <DateBlock integer={43} text={'Years of progress'} />
          <DateBlock integer={48} text={'Products in pipeline'} />
          <DateBlock integer={35} text={'Ongoing clinical trials'} />
        </Box>
        <ReusableLInkBlock
          textForButton={'See our mission'}
          animationFor={animationForUnderLineFour}
          handleLeave={handleMouseLeaveFour}
          handleEnter={handleMouseEnterFour}
          buttonWidth={'177.14px'}
          text={text}
          headerText={'Meet Umbrella'}
        />
      </Box>
      {isSmallScreen && (
        <ReusablePictureForLinkBlock
          picture={meetUmbrellaProtection}
          topPosition={'22.5px'}
          rightPosition={'0px'}
        />
      )}
    </Box>
  )
}

export default OurMission
