import { LazyLoadImage } from '../../shared/ui/reactImportsGlobal/reactImportsGlobal'
import { useTranslation } from '../../shared/translations/translationsImports'

import langIcon from '../../../assets/pictures/app-icons/langIcon.webp'

const stylesForAdditionallyLinks = {
  width: '30px',
  height: '30px',
  cursor: 'pointer',
}

const LanguageIconHeader = () => {
  const { i18n } = useTranslation()

  const changeLanguage = (language) => {
    i18n.changeLanguage(language)
  }

  return (
    <LazyLoadImage
      onClick={() => changeLanguage('ua')}
      style={stylesForAdditionallyLinks}
      src={langIcon}
      alt="change-language"
    />
  )
}

export default LanguageIconHeader
