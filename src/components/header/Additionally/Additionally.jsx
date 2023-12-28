import {
  Suspense,
  lazy,
} from '../../shared/ui/reactImportsGlobal/reactImportsGlobal'
import { fontStyleOpenSans } from '../../shared/ui/fontStyles/openSans'

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
          <p style={stylesForAdditionallyLinks}>Careers</p>
          <p style={stylesForAdditionallyLinks}>Investors</p>
          <p style={stylesForAdditionallyLinks}>Contact Us</p>
          <LanguageIconHeader />
        </div>
      ) : (
        <Suspense>
          <AdditionallyForSmallScreens
            stylesForAdditionallyLinks={stylesForAdditionallyLinks}
          />
        </Suspense>
      )}
    </>
  )
}

export default Additionally
