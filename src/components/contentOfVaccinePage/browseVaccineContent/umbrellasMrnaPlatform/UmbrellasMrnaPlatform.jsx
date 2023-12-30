import ReusableComponentMrnaPicture from '../../../shared/globalBlocks/ReusableComponentMrnaPicture'
import ReusableComponentForIntroduce from '../../../shared/globalBlocks/ReusableComponentForIntroduce'
import ItsAllAboutProteins from './itsAllAboutProteins/ItsAllAboutProteins'
import MrnaIsTransformational from './mRnaIsTransformational/MrnaIsTransformational'

import demoImgThree from '../../../../assets/pictures/demoImgThree.jpeg'
import demoImgFour from '../../../../assets/pictures/demoImgFour.png'

const text =
  'Our scientists are developing mRNA medicines to help prevent or treat disease.'

const UmbrellasMrnaPlatform = () => {
  return (
    <div
      style={{
        marginTop: '20px',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
      }}
    >
      <ReusableComponentForIntroduce
        text={text}
        img1={demoImgThree}
        img2={demoImgFour}
      />
      <ReusableComponentMrnaPicture />
      <ItsAllAboutProteins />
      <MrnaIsTransformational />
    </div>
  )
}

export default UmbrellasMrnaPlatform
