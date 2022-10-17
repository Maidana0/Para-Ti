import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import {Index, Peliculas, Series, Anime, Contacto} from './App';
// import { BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render (
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// if (document.getElementById("btn_scrolltop")){
//   const btn_scrolltop = document.getElementById("btn_scrolltop")
//     btn_scrolltop.addEventListener('click', () => {
//       window.scrollTo(0, 0)
//     })
//    window.onscroll = () => {
//     add_btn_scrolltop()
//   }
  
//   const add_btn_scrolltop = () => {
//     if (window.scrollY < 700) {
//       btn_scrolltop.classList.remove("btn-scrolltop-on")
//     } else {
//       btn_scrolltop.classList.add("btn-scrolltop-on")
//     }
//   } 
// }
// root.render (
// <React.StrictMode>
//   <Router>
//     <Routes>
//       <Route path='/' element= {<Index/>} />
//       <Route path='/peliculas' element={ <Peliculas />} />
//       <Route path='/series' element={ <Series />} />
//       <Route path='/anime' element={ <Anime />} />
//       <Route path='/contacto' element={ <Contacto />} />
//     </Routes>
//   </Router>  
// </React.StrictMode>
// );

