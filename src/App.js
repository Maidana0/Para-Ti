import React from 'react';
import {Footer,Navbar} from './componentes/general/N-F';
import Home from './componentes/general/Home';
import Series from './componentes/paginas/series';
import Anime from './componentes/paginas/anime';
import Peliculas from './componentes/paginas/peliculas';
import Contact from './componentes/contacto/contacto';
import { BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom'

export const App = ()=>{
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

  <Router>
    <Navbar/>
    <main>
      <Routes>
        <Route path='Para-Ti/' element= {<Home/>} />
        <Route path='Para-Ti/peliculas' element={ <Peliculas />} />
        <Route path='Para-Ti/series' element={ <Series />} />
        <Route path='Para-Ti/anime' element={ <Anime />} />
        <Route path='Para-Ti/contacto' element={ <Contact />} />
      </Routes>
    </main>
    <Footer/>
  </Router>

  )
}
export default App