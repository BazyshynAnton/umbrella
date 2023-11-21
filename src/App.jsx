import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import MainLayout from './components/layouts/MainLayout'

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route element={<HomePage />} index />
      </Route>
    </Routes>
  )
}

export default App
