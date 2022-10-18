
export const Bloque = (props) =>{
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

export const LoadNext = () =>{
    window.scrollTo(0, 55)
    return (
        <div className='content-loading'>
            <img src={require('../contenido/loading.gif')} className='loading' alt='Loading'/>
        </div>
    )
}
export const LoadPrev = () =>{
    window.scrollTo(0, 55)
    return (
        <div className='content-loading'>
            <img src={require('../contenido/zoro-run.gif')} className='loading' alt='Loading'/>
        </div>
    )
}
