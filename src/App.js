import React from 'react';
import {Footer,Navbar} from './componentes/general/N-F'
import Home from './componentes/general/Home';
import {ListaPeliculas, ListaSeries, ListaAnime} from './componentes/contenido/Content';
import Contact from './componentes/contacto/contacto'
import { BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom'

// export const Index = ()=>{
//   return (
//     <>
//     <Navbar/>
//     <main id='app'>
//       <Home/>
//     </main>
//     <Footer/>
//     </>
//   )
// }

// export const Peliculas = ()=>{
//   return (
//     <>
//     <Navbar/>
//     <main id='app'>
//       <ListaPeliculas/>
//     </main>
//     <Footer/>
//     </>
//   )
// }

// export const Series = ()=>{
//   return (
//     <>
//     <Navbar/>
//     <main id='app'>
//       <ListaSeries/>
//     </main>
//     <Footer/>
//     </>
//   )
// }

// export const Anime = ()=>{
//   return (
//     <>
//     <Navbar/>
//     <main id='app'>
//       <ListaAnime/>
//     </main>
//     <Footer/>
//     </>
//   )
// }

// export const Contacto = ()=>{
//   return (
//     <>
//     <Navbar/>
//     <main id='app'>
//       <Contact/>
//     </main>
//     <Footer/>
//     </>
//   )
// }


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
      <Routes>
        <Route path='/' element= {<Home/>} />
        <Route path='/peliculas' element={ <ListaPeliculas />} />
        <Route path='/series' element={ <ListaSeries />} />
        <Route path='/anime' element={ <ListaAnime />} />
        <Route path='/contacto' element={ <Contact />} />
      </Routes>
    <Footer/>
  </Router>
  )
}
export default App