import {
  Suspense,
  lazy,
} from '../../shared/ui/reactImportsGlobal/reactImportsGlobal'
import { fontStyleOpenSans } from '../../shared/ui/fontStyles/openSans'
import { useTranslation } from '../../shared/translations/translationsImports'

import LanguageIconHeader from '../languageLogic/LanguageIconHeader'

const AdditionallyForSmallScreens = lazy(() =>
  import('./AdditionallyForSmallScreens')
)

const stylesForAdditionallyLinks = {
  color: '#053f68',
  cursor: 'pointer',
  ...fontStyleOpenSans,
}

const Additionally = ({ isSmallScreen }) => {
  const { t } = useTranslation()
  return (
    <>
      {isSmallScreen ? (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            gap: '1.3rem',
          }}
        >
          <p style={stylesForAdditionallyLinks}>{t('Careers')}</p>
          <p style={stylesForAdditionallyLinks}>{t('Investors')}</p>
          <p style={stylesForAdditionallyLinks}>{t('Contact Us')}</p>
          <LanguageIconHeader />
        </div>
      ) : (
        <Suspense>
          <AdditionallyForSmallScreens
            t={t}
            stylesForAdditionallyLinks={stylesForAdditionallyLinks}
          />
        </Suspense>
      )}
    </>
  )
}

export default Additionally
