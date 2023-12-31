import { useTranslation } from '../../../shared/translations/translationsImports'

import { Box, Typography } from '../../../shared/ui/MUIglobal/muiGlobal'
import { fontStyleOpenSans } from '../../../shared/ui/fontStyles/openSans'

import YellowButton from '../../shared/Buttons/YellowButton'

const StayUpToDateBigSmall = ({
  stylesForBigScreensFirst,
  stylesForBigScreensSecond,
  stylesForSmallScreensFirst,
  stylesForSmallScreensSecond,
}) => {
  const { t } = useTranslation()

  return (
    <Box sx={{ ...stylesForBigScreensFirst, ...stylesForSmallScreensFirst }}>
      <Box
        sx={{ ...stylesForBigScreensSecond, ...stylesForSmallScreensSecond }}
      >
        <Typography
          variant="h3"
          sx={{
            fontSize: { md: '3rem', sm: '2.5rem', xs: '1.5rem' },
            color: '#376586',
            fontWeight: '600',
            textAlign: 'center',

            ...fontStyleOpenSans,
          }}
        >
          {t('Stay up to date')}
        </Typography>
        <div>
          <Typography
            variant="body1"
            sx={{
              color: '#376586',
              fontWeight: '400',
              ...fontStyleOpenSans,
            }}
          >
            {t('Looking for our')}
            <br />
            {t('Sign-up')}
          </Typography>
        </div>
        <YellowButton>{t('subscribe')}</YellowButton>
      </Box>
    </Box>
  )
}

export default StayUpToDateBigSmall
