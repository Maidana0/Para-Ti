import React from 'react';
import './style-content.css';
import data from './data.json'

 const Bloque = (props) =>{
    return (
    <div className='content-text row rounded'>
        <div className='text-name col-lg-3 text-center'>
           <h3> {props.name} </h3> 
           <small> {props.category}</small>
           <img src={require (`./portadas/${props.img}.jpg`) }/>
        </div>
        <div className='text col-lg-9'>
            <p> {props.text} </p>
            <p> {props.text2} </p>
            <small className='text-secondary'>Se encuentra disponible en: {props.streaming}.</small>
        </div>
    </div>
    );
}



 const Lista = (text) => {
    return (
    <>
        {/* <div>                
            {data.series.series1.map( record => {
                return (
                    <div key={record.id}>
                        <Bloque
                            name= { record.name}
                            text= { record.text}
                            text2= { record.text2}
                            category= { record.category}
                            img = {record.img} 
                            />
                    </div>
                )
            })}
            <button type="button" className='btn btn-outline-dark btn-lg mb-3 mr-5 float-right'> Siguiente</button>
        </div> */}

        <div> 
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
            <button type="button" className='btn btn-outline-dark btn-lg mb-3 ml-5 float-left'> Anterior </button>
        </div>
    </>
    );
 }


 export const Seccion = ({section}) =>{
    return (
        <div className="content">
            <div className='title-content text-center py-1 '> {section}  </div>
           <Lista/>
        </div>
);
}
export default Seccion