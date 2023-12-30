import { Typography } from '../../../shared/ui/MUIglobal/muiGlobal'
import { useParams } from 'react-router-dom'
import {
  Suspense,
  lazy,
} from '../../../shared/ui/reactImportsGlobal/reactImportsGlobal'
import { fontStyleOpenSans } from '../../../shared/ui/fontStyles/openSans'

import Browse from '../browse/Browse'
import Spinner from '../../../spinners/Spinner'
// import TheScienceOfMrna from '../theScienceOfMrna/TheScienceOfMrna'
// import UmbrellasMrnaPlatform from '../umbrellasMrnaPlatform/UmbrellasMrnaPlatform'
// import AboutMrna from '../aboutMrna/AboutMrna'
const UmbrellasMrnaPlatform = lazy(() =>
  import('../umbrellasMrnaPlatform/UmbrellasMrnaPlatform')
)
const AboutMrna = lazy(() => import('../aboutMrna/AboutMrna'))
const TheScienceOfMrna = lazy(() =>
  import('../theScienceOfMrna/TheScienceOfMrna')
)

const ThePowerOfMrna = () => {
  const params = useParams()

  return (
    <div style={{ marginTop: '60px' }}>
      <Typography
        variant="h2"
        sx={{
          color: '#053f68',
          fontSize: { md: '3rem', sm: '2.5rem', xs: '1.7rem' },
          fontWeight: '600',
          ...fontStyleOpenSans,
        }}
      >
        The power of mRNA
      </Typography>
      <Browse />

      {params.slug === 'science-of-mrna' && (
        <Suspense fallback={<Spinner />}>
          <TheScienceOfMrna />
        </Suspense>
      )}
      {params.slug === 'umbrellas-mrna-platform' && (
        <Suspense fallback={<Spinner />}>
          <UmbrellasMrnaPlatform />
        </Suspense>
      )}
      {params.slug === 'about-mrna' && (
        <Suspense fallback={<Spinner />}>
          <AboutMrna />
        </Suspense>
      )}
    </div>
  )
}

export default ThePowerOfMrna
