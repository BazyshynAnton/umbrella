import { Box, Typography } from '@mui/material'
import ReusableInformationBlock from '../../../../reusableComponentsForVaccineAndAboutPages/ReusableInformationBlock'

import picOfResearch from '../../../../../pictures/picOfResearch.png'
import picOfMed from '../../../../../pictures/picOfMed.png'
import picOfHuman from '../../../../../pictures/picOfHuman.png'
import picOfMrnaSmall from '../../../../../pictures/picOfMrnaSmall.png'

import { fontStyleOpenSans } from '../../../../../context/variables'
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
