import './App.css';
import React from 'react';
import Carousel from './componentes/Carousel';

function App() {
  return (
      <div id='index' className='container text-center rounded'>
       <h1 className='title'> Bienvenidx a nuestra página de entretenimiento!! </h1>
       <h4 className='text'> 
       En este sitio podrás obtener sugerencias de series, películas y anime para disfrutar y encontrarlas en sus respectivas plataformas.
       </h4>
       <Carousel/>
       
      </div>
  );

}

export default App;
