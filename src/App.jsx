import { Route, Routes } from 'react-router-dom'
import './App.css'
import ProtectedRoutes from './components/ProtectedRoutes'
import About from './pages/About'
import CoffeProduct from './pages/CoffeProduct'
import Contact from './pages/Contact'
import Courses from './pages/Courses'
import Home from './pages/Home'

function App() {

  return (
    <div className='App'>
      <Routes>
        <Route element={<ProtectedRoutes/>}>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/courses' element={<Courses/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/coffe/:id' element={<CoffeProduct/>} />
        </Route>
      </Routes> 
    </div>
  )
}

export default App
