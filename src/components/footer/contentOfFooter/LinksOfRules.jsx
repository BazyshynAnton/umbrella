import { useTranslation } from '../../shared/translations/translationsImports'
import { Typography } from '../../shared/ui/MUIglobal/muiGlobal'

const LinksOfRules = ({ stylesForTextBelowTheLine }) => {
  const { t } = useTranslation()
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        gap: '1rem',
        flexWrap: 'wrap',
      }}
    >
      <Typography variant="body2" sx={stylesForTextBelowTheLine}>
        {t('Terms of Use')}
      </Typography>
      <Typography variant="body2" sx={stylesForTextBelowTheLine}>
        {t('General Terms and Conditions')}
      </Typography>
      <Typography variant="body2" sx={stylesForTextBelowTheLine}>
        {t('General Conditions of Purchase')}
      </Typography>
      <Typography variant="body2" sx={stylesForTextBelowTheLine}>
        {t('Data Privacy Statement')}
      </Typography>
      <Typography variant="body2" sx={stylesForTextBelowTheLine}>
        {t('Adverse Event Reporting')}
      </Typography>
      <Typography variant="body2" sx={stylesForTextBelowTheLine}>
        {t('Imprint')}
      </Typography>
      <Typography variant="body2" sx={stylesForTextBelowTheLine}>
        {t('Cookie Settings')}
      </Typography>
    </div>
  )
}

export default LinksOfRules
