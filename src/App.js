import React from 'react';
import {Footer,Navbar} from './componentes/general/N-F'
import Home from './componentes/general/Home';
import {ListaPeliculas, ListaSeries, ListaAnime} from './componentes/contenido/Content';
import Contact from './componentes/contacto/contacto'

export const Index = ()=>{
  return (
    <>
    <Navbar/>
    <main id='app'>
      <Home/>
    </main>
    <Footer/>
    </>
  )
}

export const Peliculas = ()=>{
  return (
    <>
    <Navbar/>
    <main id='app'>
      <ListaPeliculas/>
    </main>
    <Footer/>
    </>
  )
}

export const Series = ()=>{
  return (
    <>
    <Navbar/>
    <main id='app'>
      <ListaSeries/>
    </main>
    <Footer/>
    </>
  )
}

export const Anime = ()=>{
  return (
    <>
    <Navbar/>
    <main id='app'>
      <ListaAnime/>
    </main>
    <Footer/>
    </>
  )
}

export const Contacto = ()=>{
  return (
    <>
    <Navbar/>
    <main id='app'>
      <Contact/>
    </main>
    <Footer/>
    </>
  )
}
