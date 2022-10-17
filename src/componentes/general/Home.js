import React from 'react';
import { Link } from 'react-router-dom'


function Home() {
    return (
  <div id='home' className='container text-center rounded'>
    <h1 className='title-index'> Bienvenidx a nuestro sitio de entretenimiento!! </h1>
    <h4 className='text-index'> En este sitio podrás obtener sugerencias de series, películas y anime para disfrutar y encontrarlas en sus respectivas plataformas. </h4>       
    <div className='carrusel'>
      <div id='carouselExampleCaptions' className='carousel slide' data-ride='carousel'>
        <ol className='carousel-indicators'>
          <li data-target='#carouselExampleCaptions' data-slide-to='0' className='active'></li>
          <li data-target='#carouselExampleCaptions' data-slide-to='1'></li>
          <li data-target='#carouselExampleCaptions' data-slide-to='2'></li>
        </ol>
        <div className='carousel-inner '>
          <div className='carousel-item active'>      
            <img src={require('../../imagenes/vikings.jpg')} className='d-block w-100' alt='Series-ParaTi'/>
            <div className='carousel-caption d-md-block'>
            <Link to='/Para-Ti/series'> <h5>Series</h5>  </Link>
            </div>
        
          </div>
          <div className='carousel-item'>
            <img src={require('../../imagenes/guason.jpg')} className='d-block w-100' alt='Peliculas-ParaTi'/>
            <div className='carousel-caption d-md-block'>
            <Link to='/Para-Ti/peliculas'> <h5>Peliculas</h5>  </Link>
            </div>
          </div>
          
          <div className='carousel-item'>
            <img src={require('../../imagenes/law.jpg')} className='d-block w-100' alt='Anime-ParaTi'/>
            <div className='carousel-caption d-md-block'>
            <Link to='/Para-Ti/anime'> <h5>Anime</h5>  </Link>
            </div>
          </div>
        </div>

        <a className='carousel-control-prev' href='#carouselExampleCaptions' role='button' data-slide='prev'>
          <span className='carousel-control-prev-icon' aria-hidden='true'></span>
          <span className='sr-only'>Previous</span>
        </a>
        <a className='carousel-control-next' href='#carouselExampleCaptions' role='button' data-slide='next'>
          <span className='carousel-control-next-icon' aria-hidden='true'></span>
          <span className='sr-only'>Next</span>
        </a>
      </div>
    </div>
  </div>   
    );
  }
  
export default Home;