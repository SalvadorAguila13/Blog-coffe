import './styles/Footer.css'
import { Link, NavLink } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="footer__blog">
        <section className='containerGlobal'>
        <div className='footer'>
          <Link className='footer__logo' to='/'>
            <h1 className='logo__name'>Blog<span> Coffe</span></h1>
          </Link>
          <nav className='footer__links'>
              <NavLink className={({isActive}) => isActive ? 'footer__link--active' : ''} to='/' >Home</NavLink>
              <NavLink className={({isActive}) => isActive ? 'footer__link--active' : ''} to='/about' >About</NavLink>
              <NavLink className={({isActive}) => isActive ? 'footer__link--active' : ''} to='/contact' >Contact</NavLink>
          </nav>
        </div>
      </section>

    </footer>
  )
}

export default Footer