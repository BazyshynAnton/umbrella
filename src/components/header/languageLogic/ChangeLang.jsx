import { useTranslation } from '../../shared/translations/translationsImports'
import { loadLanguage } from '../../../i18n/i18n'
import { Button, Box } from '../../shared/ui/MUIglobal/muiGlobal'

const ChangeLang = ({ setChangeLang }) => {
  const { i18n } = useTranslation()

  const changeLanguage = async (lng) => {
    await loadLanguage(lng)
    i18n.changeLanguage(lng)
  }

  const stylesForButtons = {
    display: 'flex',
    justifyContent: 'flex-start',
    width: '100%',
    padding: '5px',
    color: '#053f68',
    background: { md: 'rgba(255,255,255, 0.3)', xs: ' rgba(255,255,255, 0.8)' },
    ':hover': {
      background: '#fff',
    },
  }

  return (
    <Box
      onClick={() => setChangeLang(false)}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        background: 'rgba(106, 124, 134, 0.8)',
        gap: '5px',
        padding: '5px',
        borderRadius: '5px',
        border: '2px solid #6a7c86',
      }}
    >
      <Button sx={stylesForButtons} onClick={() => changeLanguage('en')}>
        🇬🇧 English
      </Button>
      <Button sx={stylesForButtons} onClick={() => changeLanguage('ua')}>
        🇺🇦 Українська
      </Button>
    </Box>
  )
}

export default ChangeLang
