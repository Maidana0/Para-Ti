import React from 'react';


function Footer() {
    return (
    <footer className='container-fluid bg-dark'>
      @Copyright 2022
      <a href='https://www.instagram.com/franco_maidana07/' target={'blank'}>
        <img className='insta' src={require ('../imagenes/instagram.png')}/>
      </a>
      </footer>
    );
  }
  
  export default Footer;