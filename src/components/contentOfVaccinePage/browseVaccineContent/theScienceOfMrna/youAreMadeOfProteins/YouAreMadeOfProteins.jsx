import { Box, Typography } from '../../../../shared/ui/MUIglobal/muiGlobal'
import { fontStyleOpenSans } from '../../../../shared/ui/fontStyles/openSans'
import {
  headerTextOne,
  headerTextTwo,
  headerTextThree,
  headerTextFour,
} from './VariablesForYouAreMadeOfProteins'
import {
  informationTextOne,
  informationTextTwo,
  informationTextThree,
  informationTextFour,
} from './VariablesForYouAreMadeOfProteins'

import ReusableInformationBlock from '../../../../reusableComponents/ReusableInformationBlock'

import picOfProteins from '../../../../../assets/pictures/picOfProteins.png'
import picOfResearch from '../../../../../assets/pictures/picOfResearch.png'
import picOfMed from '../../../../../assets/pictures/picOfMed.png'
import picOfImportant from '../../../../../assets/pictures/picOfImportant.png'

const YouAreMadeOfProteins = () => {
  return (
    <>
      <Typography
        variant="h4"
        sx={{
          mt: '150px',
          color: '#053f68',
          fontSize: { sm: '2.1rem', xs: '1.5rem' },
          fontWeight: '600',
          ...fontStyleOpenSans,
        }}
      >
        You are made of proteins
      </Typography>
      <Typography sx={{ color: '#376586', ...fontStyleOpenSans }}>
        Your body contains <b>trillions of cells</b>, the basic units of life.
        And every cell contains proteins.
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
            picture={picOfProteins}
            headerText={headerTextOne}
            informationText={informationTextOne}
          />
          <ReusableInformationBlock
            picture={picOfResearch}
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
            picture={picOfImportant}
            headerText={headerTextThree}
            informationText={informationTextThree}
          />
          <ReusableInformationBlock
            picture={picOfMed}
            headerText={headerTextFour}
            informationText={informationTextFour}
          />
        </Box>
      </Box>
    </>
  )
}

export default YouAreMadeOfProteins
