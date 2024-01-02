import { Box, Typography } from '../../../../shared/ui/MUIglobal/muiGlobal'
import { fontStyleOpenSans } from '../../../../shared/ui/fontStyles/openSans'
import {
  HeaderTextOne,
  HeaderTextTwo,
  HeaderTextThree,
  HeaderTextFour,
} from './VariablesForYouAreMadeOfProteins'
import {
  InformationTextOne,
  InformationTextTwo,
  InformationTextThree,
  InformationTextFour,
} from './VariablesForYouAreMadeOfProteins'

import ReusableInformationBlock from '../../../../reusableComponents/ReusableInformationBlock'

import picOfProteins from '../../../../../assets/pictures/picOfProteins.png'
import picOfResearch from '../../../../../assets/pictures/picOfResearch.png'
import picOfMed from '../../../../../assets/pictures/picOfMed.png'
import picOfImportant from '../../../../../assets/pictures/picOfImportant.png'

const YouAreMadeOfProteins = ({ t }) => {
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
        {t('You are made of proteins')}
      </Typography>
      <Typography sx={{ color: '#376586', ...fontStyleOpenSans }}>
        {t('Your body contains')} <b>{t('trillions of cells')}</b>,{' '}
        {t('the basic units of life')}. {t('And every cell contains proteins')}.
      </Typography>

      <Box
        sx={{
          mt: '40px',
          display: 'flex',
          flexDirection: 'column',
          height: { md: '100%', xs: '100%' },
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
            headerText={<HeaderTextOne />}
            informationText={<InformationTextOne />}
          />
          <ReusableInformationBlock
            picture={picOfResearch}
            headerText={<HeaderTextTwo />}
            informationText={<InformationTextTwo />}
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
            headerText={<HeaderTextThree />}
            informationText={<InformationTextThree />}
          />
          <ReusableInformationBlock
            picture={picOfMed}
            headerText={<HeaderTextFour />}
            informationText={<InformationTextFour />}
          />
        </Box>
      </Box>
    </>
  )
}

export default YouAreMadeOfProteins
