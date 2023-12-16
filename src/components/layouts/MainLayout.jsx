import { Outlet } from 'react-router-dom'

import Header from '../header/Header'
import Footer from '../footer/Footer'
import { HeaderContextProvider } from '../../context/HeaderContext'

const MainLayout = () => {
  return (
    <HeaderContextProvider>
      <Header />
      <Outlet />
      <Footer />
    </HeaderContextProvider>
  )
}

export default MainLayout
