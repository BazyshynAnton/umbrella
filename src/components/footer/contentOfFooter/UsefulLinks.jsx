import { useTranslation } from '../../shared/translations/translationsImports'
import { Box, Typography } from '../../shared/ui/MUIglobal/muiGlobal'

const UsefulLinks = ({ styleForTextCompany }) => {
  const { t } = useTranslation()

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { sm: 'row', xs: 'column' },
        gap: '1.5rem',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: '0.5rem',
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontFamily: "'Open Sans', sans-serif",
            fontWeight: '600',
            cursor: 'default',
          }}
        >
          {t('Company')}
        </Typography>
        <Typography variant="body1" sx={styleForTextCompany}>
          {'>'} {t('About')}
        </Typography>
        <Typography variant="body1" sx={styleForTextCompany}>
          {'>'} {t('Research & Innovation')}
        </Typography>
        <Typography variant="body1" sx={styleForTextCompany}>
          {'>'} {t('Manufacturing')}
        </Typography>
        <Typography variant="body1" sx={styleForTextCompany}>
          {'>'} {t('Careers')}
        </Typography>
        <Typography variant="body1" sx={styleForTextCompany}>
          {'>'} {t('Covid-19')}
        </Typography>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem',
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontFamily: "'Open Sans', sans-serif",
            fontWeight: '600',
            cursor: 'default',
          }}
        >
          {t('Quick Links')}
        </Typography>
        <Typography variant="body1" sx={styleForTextCompany}>
          {'>'} {t('Newsroom')}
        </Typography>
        <Typography variant="body1" sx={styleForTextCompany}>
          {'>'} {t('Investors')}
        </Typography>
        <Typography variant="body1" sx={styleForTextCompany}>
          {'>'} {t('Healthcare Professionals')}
        </Typography>
        <Typography variant="body1" sx={styleForTextCompany}>
          {'>'} {t('Connect')}
        </Typography>
      </div>
    </Box>
  )
}

export default UsefulLinks
