import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import { HeaderContextProvider } from './context/HeaderContext'
import MainLayout from './components/layouts/MainLayout'

import 'react-lazy-load-image-component/src/effects/blur.css'

const HomePage = lazy(() => import('./pages/HomePage'))
const VaccinePage = lazy(() => import('./pages/VaccinePage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))

function App() {
  return (
    <HeaderContextProvider>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route element={<HomePage />} index />
          <Route path="/vaccine/:slug" element={<VaccinePage />} />
          <Route path="/about-us" element={<AboutPage />} />
        </Route>
      </Routes>
    </HeaderContextProvider>
  )
}

export default App
