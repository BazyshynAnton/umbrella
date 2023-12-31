import { useMediaQuery } from '../../shared/ui/MUIglobal/muiGlobal'
import {
  Suspense,
  lazy,
} from '../../shared/ui/reactImportsGlobal/reactImportsGlobal'
import { useTranslation } from '../../shared/translations/translationsImports'

import ContentForBigScreens from '../shared/Blocks/ContentForBigScreens'

import redBook from '../../../assets/pictures/redBook.webp'
import books from '../../../assets/pictures/books.webp'
import flask from '../../../assets/pictures/flask.webp'

const ContentForSmallScreens = lazy(() =>
  import('../shared/Blocks/ContentForSmallScreens')
)

const text = 'Our mission is clear'
const buttonText = 'Careers Portal'
const headerText = 'Careers at Umbrella'

const positionForPicture = { left: '-150px' }
const position = { right: '0px' }

const CareersAtUmbrella = () => {
  const isSmallScreen = useMediaQuery('(min-width: 1200px)')
  const { t } = useTranslation()
  return (
    <>
      {isSmallScreen ? (
        <ContentForBigScreens
          picture={redBook}
          headerText={t(headerText)}
          text={t(text)}
          buttonText={t(buttonText)}
          positionForPicture={positionForPicture}
          position={position}
        />
      ) : (
        <Suspense>
          <ContentForSmallScreens
            picture1={books}
            picture2={flask}
            text={t(text)}
            buttonText={t(buttonText)}
            headerText={t(headerText)}
            height1={'400px'}
            height2={'550px'}
          />
        </Suspense>
      )}
    </>
  )
}

export default CareersAtUmbrella
