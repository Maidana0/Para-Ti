import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './style-contacto.css';


export const Contact = () => {
  const [state, handleSubmit] = useForm("xgeqzvpq");
  if (state.succeeded) {
      return  (
            <>
            <div id='success' className='bg-light puff-in-center container text-center rounded shadow-lg p-4 mx-auto mt-5 w-75 border border-success'>
                <h2 className='text-success mt-3'> ¡Gracias por contactarnos!</h2>
                    <p className='text-secondary'>El mensaje fue enviado correctamente.</p>
                    <img className='w-75 mb-5 rounded'src={require('./luffy-success.png')}/>
            </div>
            </>
        )
  }
  return (
    <div id='contacto'> 
        <h1 className='contact-title'>Contacto</h1>
        <form onSubmit={handleSubmit}
        action="https://formspree.io/f/xgeqzvpq"
        method="POST"
        className='form'>

        <input 
        type="text" 
        name="name" 
        id="full-name" 
        placeholder="Nombre" 
        required
        autoComplete='none'
        minLength="2"
        tabIndex={'1'}
        />

        <input
            id="email"
            type="email" 
            name="email"
            placeholder='Email'
            required
            tabIndex={'2'}
        />
        <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
            
        />
        <textarea
            id="message"
            name="message"
            placeholder='Mensaje'
            autoComplete='none'
            required
            minLength="10"
            tabIndex={'3'}
        />
        <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
        />

        <button tabIndex={'3'}
        className='btn-form' type="submit" 
        disabled={state.submitting}>
            Enviar
        </button>
        </form>
    </div>
  );
}

export default Contact