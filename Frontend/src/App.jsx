import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import AboutPage from './components/AboutPage'
import NavBar from './components/NavBar'
import RegisterPage from './components/RegisterPage'
import Footer from './components/Footer'
import LoginPage from './components/LoginPage'
import Dashboard from './components/Dashboard/Dashboard'
import PrivateRoute from './PrivateRoute'

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/dashboard' element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          } />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App