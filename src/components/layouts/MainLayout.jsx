import { Outlet } from 'react-router-dom'
import { Suspense } from 'react'

import Header from '../header/Header'
import Footer from '../footer/Footer'
import Spinner from '../spinner/Spinner'

const MainLayout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Spinner />}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  )
}

export default MainLayout
