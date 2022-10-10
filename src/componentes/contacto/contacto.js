import React from 'react';
import './style-contacto.css'

export const Contacto = () => {
    return (
        <>

    <div id="contacto"> 
        <h2 className="holaT">Contacto</h2> <hr/>

        <form id="formContact" className=" centrar" action="">
            <input required className="contacto" id="nombre"  name="nombre" type="text" tabindex="1" autocomplete="off" placeholder="Nombre"/>
            <input required className="contacto" id="email"  name="email" type="email" tabindex="2" autocomplete="off" placeholder="Email" />
            <input required className="contacto" id="motivo"  name="motivo" type="text" tabindex="3" autocomplete="off" placeholder="Motivo de contacto"/>
            <textarea required className="contacto" id="mensaje"  name="mensaje" rows="4" maxlength="200" minlength="3" tabindex="4" autocomplete="off" placeholder="Mensaje"/>
            <button type="submit"  className="boton corto enviar">Enviar</button> 
        </form>

    </div>
        
        </>
    )
}

export default Contacto