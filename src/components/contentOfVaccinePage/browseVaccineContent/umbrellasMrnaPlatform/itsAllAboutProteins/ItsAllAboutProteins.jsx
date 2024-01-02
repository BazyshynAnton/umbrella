import { Box, Typography } from '../../../../shared/ui/MUIglobal/muiGlobal'
import { fontStyleOpenSans } from '../../../../shared/ui/fontStyles/openSans'
import { useTranslation } from '../../../../shared/translations/translationsImports'
import {
  HeaderTextOne,
  HeaderTextTwo,
  HeaderTextThree,
  HeaderTextFour,
} from './VariablesForItsAllAboutProteins'
import {
  InformationTextOne,
  InformationTextTwo,
  InformationTextThree,
  InformationTextFour,
} from './VariablesForItsAllAboutProteins'

import ReusableInformationBlock from '../../../../reusableComponents/ReusableInformationBlock'

import picOfResearch from '../../../../../assets/pictures/picOfResearch.png'
import picOfMed from '../../../../../assets/pictures/picOfMed.png'
import picOfHuman from '../../../../../assets/pictures/picOfHuman.png'
import picOfMrnaSmall from '../../../../../assets/pictures/picOfMrnaSmall.png'

const ItsAllAboutProteins = () => {
  const { t } = useTranslation()
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
        {t('It’s all about proteins')}
      </Typography>
      <Typography sx={{ color: '#376586', ...fontStyleOpenSans }}>
        {t('At Umbrella, we are working')}
        <b> {t('new mRNA medicines')} </b>
        {t('for a wide range of diseases')}.
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
            headerText={<HeaderTextOne />}
            informationText={<InformationTextOne />}
          />
          <ReusableInformationBlock
            picture={picOfHuman}
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
            picture={picOfMed}
            headerText={<HeaderTextThree />}
            informationText={<InformationTextThree />}
          />
          <ReusableInformationBlock
            picture={picOfMrnaSmall}
            headerText={<HeaderTextFour />}
            informationText={<InformationTextFour />}
          />
        </Box>
      </Box>
    </>
  )
}

export default ItsAllAboutProteins
