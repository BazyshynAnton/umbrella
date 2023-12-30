import {
  Outlet,
  Suspense,
  lazy,
} from '../shared/ui/reactImportsGlobal/reactImportsGlobal'

import Spinner from '../spinners/Spinner'

const Header = lazy(() => import('../header/Header'))
const Footer = lazy(() => import('../footer/Footer'))

const MainLayout = () => {
  return (
    <>
      <Suspense fallback={<Spinner />}>
        <Header />
        <Outlet />
        <Footer />
      </Suspense>
    </>
  )
}

export default MainLayout
