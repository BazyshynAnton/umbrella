import { Box } from '@mui/material'
import ReusableComponentMrnaPicture from '../../../reusableComponentsForVaccineAndAboutPages/ReusableComponentMrnaPicture'
import ReusableComponentForIntroduce from '../../../reusableComponentsForVaccineAndAboutPages/ReusableComponentForIntroduce'
import ItsAllAboutProteins from './itsAllAboutProteins/ItsAllAboutProteins'
import MrnaIsTransformational from './mRnaIsTransformational/MrnaIsTransformational'

import demoImgThree from '../../../../pictures/demoImgThree.jpeg'
import demoImgFour from '../../../../pictures/demoImgFour.jfif'

const text =
  'Our scientists are developing mRNA medicines to help prevent or treat disease.'

const UmbrellasMrnaPlatform = () => {
  return (
    <Box
      sx={{
        mt: '20px',
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
    </Box>
  )
}

export default UmbrellasMrnaPlatform
