import { Box, Typography } from '../../../shared/ui/MUIglobal/muiGlobal'
import { fontStyleOpenSans } from '../../../shared/ui/fontStyles/openSans'
import { useTranslation } from '../../../shared/translations/translationsImports'

import ReusableComponentForIntroduce from '../../../shared/globalBlocks/ReusableComponentForIntroduce'
import ReusableComponentMrnaPicture from '../../../shared/globalBlocks/ReusableComponentMrnaPicture'
import QuestionsSwiper from './questionsSwiper/QuestionsSwiper'
import DiscoverTheScienceOfMrna from './discoverTheScienceOfMrna/DiscoverTheScienceOfMrna'

import demoImgFive from '../../../../assets/pictures/demoImgFive.png'
import demoImgSix from '../../../../assets/pictures/demoImgSix.png'

const text = 'Learn more about the science'

const AboutMrna = () => {
  const { t } = useTranslation()

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
        text={t(text)}
        img1={demoImgSix}
        img2={demoImgFive}
      />
      <ReusableComponentMrnaPicture />
      <DiscoverTheScienceOfMrna t={t} />

      <Typography
        variant="h4"
        sx={{
          mt: '100px',
          fontWeight: '600px',
          color: '#053f68',
          ...fontStyleOpenSans,
        }}
      >
        {t('Q&mRNA')}
      </Typography>
      <Typography
        variant="body1"
        sx={{ color: '#376586', ...fontStyleOpenSans }}
      >
        {t('Tune into our Q&mRNA')}
        <br /> {t('and how Umbrella is researching')}
        <br /> {t('of delivering the greatest')}.
      </Typography>
      <QuestionsSwiper t={t} />
    </Box>
  )
}

export default AboutMrna
