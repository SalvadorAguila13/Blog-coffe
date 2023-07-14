import './styles/Navbar.css'
import { Link, NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <header className="header">
      <section className='containerGlobal'>
        <div className='navbar'>
          <Link className='logo' to='/'>
            <h1 className='logo__name'>Blog<span> Coffe</span></h1>
          </Link>
          <nav className='navbar__links'>
              <NavLink className={({isActive}) => isActive ? 'navbar__link--active' : ''} to='/' >Home</NavLink>
              <NavLink className={({isActive}) => isActive ? 'navbar__link--active' : ''} to='/courses' >Courses</NavLink>
              <NavLink className={({isActive}) => isActive ? 'navbar__link--active' : ''} to='/about' >About</NavLink>
              <NavLink className={({isActive}) => isActive ? 'navbar__link--active' : ''} to='/contact' >Contact</NavLink>
          </nav>
        </div>
      </section>

      <div className='header__text containerGlobal'>
        <h2>Coffee blog your favorite flavor</h2>
        <p>Choose one of our coffees and taste your palate with the excellent quality.</p>
      </div>
    </header>

  )
}

export default Navbar