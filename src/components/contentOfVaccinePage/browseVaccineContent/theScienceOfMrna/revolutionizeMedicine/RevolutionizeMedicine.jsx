import { Box, Typography } from '../../../../shared/ui/MUIglobal/muiGlobal'
import { LazyLoadImage } from '../../../../shared/ui/reactImportsGlobal/reactImportsGlobal'
import { fontStyleOpenSans } from '../../../../shared/ui/fontStyles/openSans'

import scienceInTheLab from '../../../../../assets/pictures/scienceInTheLab.jpeg'
const RevolutionizeMedicine = ({ t }) => {
  return (
    <Box
      sx={{
        mt: { md: '0px', sm: '70px' },
        display: 'flex',

        flexDirection: {
          md: 'row',
          xs: 'column',
        },
      }}
    >
      <Box
        sx={{
          width: '100%',
        }}
      >
        <Box
          sx={{
            width: '100%',
            height: '300px',
          }}
        >
          <LazyLoadImage
            style={{
              objectFit: 'cover',
              width: '100%',
              height: '100%',
              borderRadius: '20px',
            }}
            src={scienceInTheLab}
            alt="scientists"
          />
        </Box>
        <Typography
          variant="h5"
          sx={{
            color: '#376586',
            mt: '20px',
            fontSize: { sm: '1.5rem', xs: '1.3rem' },
            fontWeight: '600',
            ...fontStyleOpenSans,
          }}
        >
          {t('mRNA could revolutionize medicine')}
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: '#376586', ...fontStyleOpenSans }}
        >
          {t('Scientists have been')} <b>{t('for decades')}</b>.{' '}
          {t('And mRNA vaccines are')}
          <b> {t('just the start')}</b>.
        </Typography>
      </Box>
      <Box
        sx={{
          width: '100%',
          mt: { md: '0px', xs: '30px' },
          pl: { md: '30px' },
          display: { xs: 'flex' },
          flexDirection: { xs: 'column' },
          justifyContent: { md: 'center', xs: 'flex-start' },
        }}
      >
        <Typography
          variant="h5"
          sx={{
            color: '#376586',
            fontSize: { sm: '1.5rem', xs: '1.3rem' },
            fontWeight: '600',
            ...fontStyleOpenSans,
          }}
        >
          {t("It's all about proteins")}
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: '#376586', ...fontStyleOpenSans }}
        >
          {t('An mRNA can')} <b>{t('teach the body')}</b> {t('how to make a')}
          <b> {t('diseases')}</b>.
        </Typography>
      </Box>
    </Box>
  )
}

export default RevolutionizeMedicine
