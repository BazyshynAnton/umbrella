import { Route, Routes } from 'react-router-dom'
import MainLayout from './components/layouts/MainLayout'
import HomePage from './pages/HomePage'
import VaccinePage from './pages/VaccinePage'
import AboutPage from './pages/AboutPage'
import { HeaderContextProvider } from './context/HeaderContext'

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
