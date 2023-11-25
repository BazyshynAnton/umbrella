import { Box } from '@mui/material'
import IntroduceToMrnaPlatform from './introduceToMrnaPlatform/IntroduceToMrnaPlatform'
import ReusableComponentMrnaPicture from '../reusableComponentMrnaPicture/ReusableComponentMrnaPicture'
import ItsAllAboutProteins from './itsAllAboutProteins/ItsAllAboutProteins'
import MrnaIsTransformational from './mRnaIsTransformational/MrnaIsTransformational'

const UmbrellasMrnaPlatform = () => {
  return (
    <Box
      sx={{
        mt: '20px',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
      }}>
      <IntroduceToMrnaPlatform />
      <ReusableComponentMrnaPicture />
      <ItsAllAboutProteins />
      <MrnaIsTransformational />
    </Box>
  )
}

export default UmbrellasMrnaPlatform
