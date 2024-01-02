import { Box, Typography } from '../../../../shared/ui/MUIglobal/muiGlobal'
import { fontStyleOpenSans } from '../../../../shared/ui/fontStyles/openSans'
import { LazyLoadImage } from '../../../../shared/ui/reactImportsGlobal/reactImportsGlobal'
import { useTranslation } from '../../../../shared/translations/translationsImports'

import femaleScientist from '../../../../../assets/pictures/femaleScientist.jpg'

const MrnaIsTransformational = () => {
  const { t } = useTranslation()

  return (
    <Box
      sx={{
        mb: '50px',
        mt: { md: '100px', xs: '70px' },
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
            src={femaleScientist}
            alt="scientists"
          />
        </Box>
        <Typography
          variant="h5"
          sx={{
            mt: '20px',
            fontSize: { sm: '1.5rem', xs: '1.3rem' },
            fontWeight: '600',
            color: '#376586',
            ...fontStyleOpenSans,
          }}
        >
          {t('mRNA is transformational')}
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: '#376586', ...fontStyleOpenSans }}
        >
          {t('With our technology, we are')} <b>{t('revolutionizing')}</b>{' '}
          {t('medicine and developing')}
          <b> {t('untreatable and emerging diseases')}</b>.
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
            fontSize: { sm: '1.5rem', xs: '1.3rem' },
            fontWeight: '600',
            color: '#376586',
            ...fontStyleOpenSans,
          }}
        >
          {t('We can positively impact')}
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: '#376586', ...fontStyleOpenSans }}
        >
          {t('Our mRNA platform, with its')}
          <b> {t('speed, scale, and flexibility')}</b>,{' '}
          {t('is uniquely suited to')}.
        </Typography>
      </Box>
    </Box>
  )
}

export default MrnaIsTransformational
