import {
  Outlet,
  Suspense,
  lazy,
} from '../shared/ui/reactImportsGlobal/reactImportsGlobal'

import Header from '../header/Header'
import Spinner from '../spinners/Spinner'

const Footer = lazy(() => import('../footer/Footer'))

const MainLayout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Spinner />}>
        <Outlet />
        <Footer />
      </Suspense>
    </>
  )
}

export default MainLayout
