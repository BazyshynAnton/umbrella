import { Box, Typography } from '../../../../shared/ui/MUIglobal/muiGlobal'
import { fontStyleOpenSans } from '../../../../shared/ui/fontStyles/openSans'

const TheScienceOfMrnaForSmallScreens = ({ t }) => {
  return (
    <Box
      sx={{
        mt: '100px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography
        variant="h3"
        sx={{
          color: '#053f68',
          fontSize: { md: '3rem', sm: '2rem', xs: '1.5rem' },
          textAlign: 'center',
          fontWeight: '600',
          ...fontStyleOpenSans,
        }}
      >
        {t('Your cells are protein factories')}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: '#376586',
          textAlign: 'center',
          ...fontStyleOpenSans,
        }}
      >
        {t('Proteins are made in')} <b>{t('protein synthesis')}</b>.
        <br /> {t("And that's")}.
      </Typography>
    </Box>
  )
}

export default TheScienceOfMrnaForSmallScreens
