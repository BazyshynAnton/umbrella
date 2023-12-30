import { Box, Typography } from '../../../../shared/ui/MUIglobal/muiGlobal'
import { fontStyleOpenSans } from '../../../../shared/ui/fontStyles/openSans'
import {
  headerTextOne,
  headerTextTwo,
  headerTextThree,
  headerTextFour,
} from './VariablesForItsAllAboutProteins'
import {
  informationTextOne,
  informationTextTwo,
  informationTextThree,
  informationTextFour,
} from './VariablesForItsAllAboutProteins'

import ReusableInformationBlock from '../../../../reusableComponents/ReusableInformationBlock'

import picOfResearch from '../../../../../assets/pictures/picOfResearch.png'
import picOfMed from '../../../../../assets/pictures/picOfMed.png'
import picOfHuman from '../../../../../assets/pictures/picOfHuman.png'
import picOfMrnaSmall from '../../../../../assets/pictures/picOfMrnaSmall.png'

const ItsAllAboutProteins = () => {
  return (
    <>
      <Typography
        variant="h4"
        sx={{
          mt: '100px',
          color: '#053f68',
          fontSize: { sm: '2.1rem', xs: '1.5rem' },
          fontWeight: '600',
          ...fontStyleOpenSans,
        }}
      >
        It’s all about proteins
      </Typography>
      <Typography sx={{ color: '#376586', ...fontStyleOpenSans }}>
        At Umbrella, we are working on developing and testing
        <b> new mRNA medicines </b>
        for a wide range of diseases.
      </Typography>
      <Box
        sx={{
          mt: '40px',
          display: 'flex',
          flexDirection: 'column',
          height: { md: '300px', xs: '100%' },
          gap: { sm: '0px', xs: '1rem' },
          color: '#376586',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: { md: 'row', xs: 'column' },
            gap: { sm: '0rem', xs: '1rem' },
          }}
        >
          <ReusableInformationBlock
            picture={picOfResearch}
            headerText={headerTextOne}
            informationText={informationTextOne}
          />
          <ReusableInformationBlock
            picture={picOfHuman}
            headerText={headerTextTwo}
            informationText={informationTextTwo}
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { md: 'row', xs: 'column' },
            gap: { sm: '0rem', xs: '1rem' },
          }}
        >
          <ReusableInformationBlock
            picture={picOfMed}
            headerText={headerTextThree}
            informationText={informationTextThree}
          />
          <ReusableInformationBlock
            picture={picOfMrnaSmall}
            headerText={headerTextFour}
            informationText={informationTextFour}
          />
        </Box>
      </Box>
    </>
  )
}

export default ItsAllAboutProteins
