import {Link} from 'react-router-dom'
import React from 'react'

const Header = () => {
  return (
    <header>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/peliculas">Peliculas</Link>
            <Link to="">Géneros</Link>
            <Link to="">Cerrar Sesión</Link>
        </nav>
    </header>
  )
}

export default Header