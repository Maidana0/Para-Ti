import React from 'react';

function Header() {
  return (
    <header>
      <nav className='navbar navbar-dark bg-dark'>
        <a className='navbar-tittle navbar-brand' href='#'>
          <img className='header-icon' src={require('../../imagenes/icon.png')}/>
          Entretenimiento | ParaTi
          <img className='header-icon' src={require('../../imagenes/icon.png')}/>
        </a>
        <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarTogglerDemo02' aria-controls='navbarTogglerDemo02' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarTogglerDemo02'>
          <ul className='navbar-nav mr-auto mt-2 mt-lg-0'>
          <li className='nav-item'>
              <a className='nav-link' href='#home'>Inicio</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#/series'>Series</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#/peliculas'>Peliculas</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#/anime'>Anime</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#/contacto'>Sugerencias</a>
            </li>
          </ul>
        </div>
      </nav>
</header>
  );
}

export default Header;