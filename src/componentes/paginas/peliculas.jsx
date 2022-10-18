import React, { useState } from 'react';
import '../contenido/style-content.css'
import {Bloque, LoadNext, LoadPrev} from '../contenido/Bloque'
import data from '../contenido/data.json'

export const Peliculas = ()=>{   
    const btnNext = () => {
        return (
            <button type="button" className='btn btn-outline-dark btn-lg mb-3 mr-5 float-right'
            onClick={ ()=>{ 
                        setPage ( LoadNext);
                        setTimeout(()=>{ setPage ( NextPage); }, 1500);    
            } } > Siguiente </button>

        )
    }

    const NextPage = ()=>{
        return (
            <div id='page-2'>                
            {(data.peliculas.peliculas2).map ( record => {
                return (
                    <div key={record.id}>
                        <Bloque
                        name= { record.name}
                        text= { record.text}
                        text2= { record.text2}
                        streaming= {record.streaming}
                        category= { record.category}
                        img = {record.img} />
                    </div>
                )
            })}
            {btnPrev ()}
            </div>
        )
    }

    const btnPrev = () => {
        return(  
                <button type="button" className='btn btn-outline-dark btn-lg mb-3 ml-5 float-left'
                onClick={()=>{
                        setPage ( LoadPrev);
                        setTimeout(()=>{ setPage ( pag); }, 1500);   
                } } > Anterior </button>
        )
    }
 
    const [pag, setPage] = useState (()=>{
        return (
            <div id='page-1' className=''>                
                {(data.peliculas.peliculas1).map ( record => {
                    return (
                        <div key={record.id}>
                            <Bloque
                            name= { record.name}
                            text= { record.text}
                            text2= { record.text2}
                            streaming= {record.streaming}
                            category= { record.category}
                            img = {record.img} />
                        </div>               
                    )
                })}
            {btnNext ()}

            </div>
        )}
    )



    return (
            <div className='content'>
                <div className='title-content text-center py-1'>Peliculas</div>
                {pag}
            </div>
        )
}

export default Peliculas