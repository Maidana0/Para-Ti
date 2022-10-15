import React from 'react';
import { Link } from 'react-router-dom'
export function Navbar() {
  return (
<header>
      <nav className='navbar navbar-dark bg-dark'>
      <Link to='/' className='navbar-tittle navbar-brand'> 
        <img className='header-icon' src={require('../../imagenes/icon.png')}/>
        Entretenimiento | ParaTi
        <img className='header-icon' src={require('../../imagenes/icon.png')}/>
      </Link>
        <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarTogglerDemo02' aria-controls='navbarTogglerDemo02' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarTogglerDemo02'>
          <ul className='navbar-nav mr-auto mt-2 mt-lg-0'>
          <li className='nav-item'>
              <Link to='/' className='nav-link'> Inicio </Link>
            </li>
            <li className='nav-item'>
            <Link to='/series' className='nav-link'> Series </Link>
            </li>
            <li className='nav-item'>
            <Link to='/peliculas' className='nav-link'> Peliculas </Link>
            </li>
            <li className='nav-item'>
            <Link to='/anime' className='nav-link'> Anime </Link>
            </li>
            <li className='nav-item'>
            <Link to='/contacto' className='nav-link'> Contacto </Link>
            </li>
          </ul>
        </div>
      </nav>
</header>
  );
}
export function Footer() {
  return (
  <footer className='container-fluid bg-dark'>
    &copy;Copyright 2022
    <a href='https://www.instagram.com/franco_maidana07/' target={'blank'}>
      <img className='insta' src={require ('../../imagenes/instagram.png')}/>
    </a>
    </footer>
  );
}