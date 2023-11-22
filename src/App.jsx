import { Route, Routes } from 'react-router-dom'
import MainLayout from './components/layouts/MainLayout'
import HomePage from './pages/HomePage'
import VaccinePage from './pages/VaccinePage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route element={<HomePage />} index />
        <Route path="/vaccine/:slug" element={<VaccinePage />} />
      </Route>
    </Routes>
  )
}

export default App
