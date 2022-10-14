import React, { useState } from 'react';
import './style-content.css';
import data from './data.json'

 const Bloque = (props) =>{
    return (
    <div className='content-text row rounded'>
        <div className='text-name col-lg-3 text-center'>
           <h3> {props.name} </h3> 
           <small> {props.category}</small>
           <img src={require (`./portadas/${props.img}.jpg`)} alt={props.name}/>
        </div>
        <div className='text col-lg-9'>
            <p> {props.text} </p>
            <p> {props.text2} </p>
            <small className='text-secondary'>Se encuentra disponible en: {props.streaming}.</small>
        </div>
    </div>
    );
}


export const ListaSeries = () => {
    return (
    <div className="content" id='series'>
        <div className='title-content text-center py-1 '>Series</div>
        
            


          <div id='page-1' className='lista lista-activa'>                
            {data.series.series1.map( record => {
                return (
                    <div key={record.id}>
                        <Bloque
                            name= { record.name}
                            text= { record.text}
                            text2= { record.text2}
                            streaming= {record.streaming}
                            category= { record.category}
                            img = {record.img} 
                            />
                    </div>
                )
            })}
            <button type="button" className='btn btn-outline-dark btn-lg mb-3 mr-5 float-right'
                onClick={()=>{
                    (document.getElementById('page-2')).classList.add('lista-activa');
                    (document.getElementById('page-1')).classList.remove('lista-activa');
                    setTimeout(()=>{ window.scrollTo(0, 0)}, 500);
            }}
            > Siguiente</button>
          </div>

          <div id='page-2' className='lista'> 
          { data.series.series2.map( record => {
                return (
                    <div key={record.id}>
                        <Bloque
                            name= { record.name}
                            text= { record.text}
                            text2= { record.text2}
                            streaming= {record.streaming}
                            category= { record.category}
                            img = {record.img}
                        />
                    </div>
                )
            })}
            <button type="button" className='btn btn-outline-dark btn-lg mb-3 ml-5 float-left'
                onClick={()=>{
                    (document.getElementById('page-2')).classList.remove('lista-activa');
                    (document.getElementById('page-1')).classList.add('lista-activa');
                    setTimeout(()=>{ window.scrollTo(0, 0)}, 500);
                }}
                > Anterior </button>
          </div>


    </div>
    );
}

export const ListaPeliculas = () => {
    return (
    <div className="content">
        <div className='title-content text-center py-1 '>Peliculas</div>
          <div id='page-1' className='lista lista-activa'>                
            {data.peliculas.peliculas1.map( record => {
                return (
                    <div key={record.id}>
                        <Bloque
                            name= { record.name}
                            text= { record.text}
                            text2= { record.text2}
                            streaming= {record.streaming}
                            category= { record.category}
                            img = {record.img} 
                            />
                    </div>
                )
            })}
            <button type="button" className='btn btn-outline-dark btn-lg mb-3 mr-5 float-right'
                onClick={()=>{
                    (document.getElementById('page-2')).classList.add('lista-activa');
                    (document.getElementById('page-1')).classList.remove('lista-activa');
                    setTimeout(()=>{ window.scrollTo(0, 0)}, 500);
            }}
            > Siguiente</button>
          </div>
          <div id='page-2' className='lista'> 
          { data.peliculas.peliculas2.map( record => {
                return (
                    <div key={record.id}>
                        <Bloque
                            name= { record.name}
                            text= { record.text}
                            text2= { record.text2}
                            streaming= {record.streaming}
                            category= { record.category}
                            img = {record.img}
                        />
                    </div>
                )
            })}
            <button type="button" className='btn btn-outline-dark btn-lg mb-3 ml-5 float-left'
                onClick={()=>{
                    (document.getElementById('page-2')).classList.remove('lista-activa');
                    (document.getElementById('page-1')).classList.add('lista-activa');
                    setTimeout(()=>{ window.scrollTo(0, 0)}, 500);
                }}
                > Anterior </button>
          </div>
    </div>
    );
}

export const ListaAnime = () => {
    return (
    <div className="content">
        <div className='title-content text-center py-1 '>Anime</div>
          <div id='page-1' className='lista lista-activa'>                
            {data.anime.anime1.map( record => {
                return (
                    <div key={record.id}>
                        <Bloque
                            name= { record.name}
                            text= { record.text}
                            text2= { record.text2}
                            streaming= {record.streaming}
                            category= { record.category}
                            img = {record.img} 
                            />
                    </div>
                )
            })}
            <button type="button" className='btn btn-outline-dark btn-lg mb-3 mr-5 float-right'
                onClick={()=>{
                    (document.getElementById('page-2')).classList.add('lista-activa');
                    (document.getElementById('page-1')).classList.remove('lista-activa');
                    setTimeout(()=>{ window.scrollTo(0, 0)}, 500);
            }}
            > Siguiente</button>
          </div>
          <div id='page-2' className='lista'> 
          { data.anime.anime2.map( record => {
                return (
                    <div key={record.id}>
                        <Bloque
                            name= { record.name}
                            text= { record.text}
                            text2= { record.text2}
                            streaming= {record.streaming}
                            category= { record.category}
                            img = {record.img}
                        />
                    </div>
                )
            })}
            <button type="button" className='btn btn-outline-dark btn-lg mb-3 ml-5 float-left'
                onClick={()=>{
                    (document.getElementById('page-2')).classList.remove('lista-activa');
                    (document.getElementById('page-1')).classList.add('lista-activa');
                    setTimeout(()=>{ window.scrollTo(0, 0)}, 500);
                }}
                > Anterior </button>
          </div>
    </div>
    );
}
