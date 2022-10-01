import React from 'react';

function Carousel() {
    return (
<div className='carrusel '>
  <div id='carouselExampleCaptions' className='carousel slide' data-ride='carousel'>
    <ol className='carousel-indicators'>
      <li data-target='#carouselExampleCaptions' data-slide-to='0' className='active'></li>
      <li data-target='#carouselExampleCaptions' data-slide-to='1'></li>
      <li data-target='#carouselExampleCaptions' data-slide-to='2'></li>
    </ol>
    <div className='carousel-inner '>
      <div className='carousel-item active'>
   
        <img src={require('../imagenes/vikings.jpg')} className='d-block w-100' alt='Series-ParaTi'/>
        <div className='carousel-caption d-md-block'>
        <a href='#series'> <h5>SERIES</h5> </a>
        </div>
     
      </div>
      <div className='carousel-item'>
        <img src={require('../imagenes/guason.jpg')} className='d-block w-100' alt='Peliculas-ParaTi'/>
        <div className='carousel-caption d-md-block'>
        <a href='#peliculas'> <h5>PELICULAS</h5> </a>
        </div>
      </div>
      <div className='carousel-item'>
        <img src={require('../imagenes/law.jpg')} className='d-block w-100' alt='Anime-ParaTi'/>
        <div className='carousel-caption d-md-block'>
        <a href='#peliculas'> <h5>ANIME</h5> </a>
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
    );
  }
  
export default Carousel;