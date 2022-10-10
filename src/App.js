import React from 'react';
import Home from './componentes/general/Home';
import Seccion from './componentes/contenido/Content';
import Contacto from './componentes/contacto/contacto'

function App() {
  if (document.getElementById("btn_scrolltop")){
    const btn_scrolltop = document.getElementById("btn_scrolltop")
      btn_scrolltop.addEventListener('click', () => {
        window.scrollTo(0, 0)
      })
     window.onscroll = () => {
      add_btn_scrolltop()
    }
    
    const add_btn_scrolltop = () => {
      if (window.scrollY < 700) {
        btn_scrolltop.classList.remove("btn-scrolltop-on")
      } else {
        btn_scrolltop.classList.add("btn-scrolltop-on")
      }
    } 
    }


  return (
      <main id='app'>
       {/* <Home/>
        
       <Seccion section= 'Series'/> */}

      {/* <Contacto /> */}

      </main>
  );
}

export default App;
