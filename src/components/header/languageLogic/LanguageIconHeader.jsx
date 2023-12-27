import { LazyLoadImage } from '../../contentOfHomePage/shared/ui/reactImports/reactImports'

import langIcon from '../../../assets/pictures/app-icons/langIcon.webp'

const stylesForAdditionallyLinks = {
  width: '30px',
  height: '30px',
  cursor: 'pointer',
}

const LanguageIconHeader = () => {
  return (
    <LazyLoadImage
      style={stylesForAdditionallyLinks}
      src={langIcon}
      alt="change-language"
    />
  )
}

export default LanguageIconHeader

// язык
// анимацию лого хедера, типо при переходе на страницу мейн оно бы прокручивалось
