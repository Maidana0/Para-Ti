function Header() {
  return (
    <header>
      <nav className='navbar navbar-dark bg-dark'>
        <a className='navbar-tittle navbar-brand' href='#'>Entretenimiento | ParaTi</a>
        <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarTogglerDemo02' aria-controls='navbarTogglerDemo02' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarTogglerDemo02'>
          <ul className='navbar-nav mr-auto mt-2 mt-lg-0'>
            <li className='nav-item'>
              <a className='nav-link' href='#'>Series</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>Peliculas</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>Anime</a>
            </li>
          </ul>
        </div>
      </nav>
</header>
  );
}

export default Header;