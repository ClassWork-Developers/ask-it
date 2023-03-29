import React from 'react';
import '../views/EstiloRes.css';

const ContactoSeccion = () => {
  return (
    <section className='bg-gray-100 py-8'>
      <div className='tater mx-auto px-4 lg:px-0'>
        <h2 className='text-2xl font-bold mb-4'>Contáctanos</h2>
        <form>
          <div className='mb-4'>
            <label
              className='block text-gray-700 font-bold mb-2'
              htmlFor='name'
            >
              Nombre
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='name'
              type='text'
              placeholder='Tu nombre'
            />
          </div>
          <div className='mb-4'>
            <label
              className='block text-gray-700 font-bold mb-2'
              htmlFor='email'
            >
              Correo electrónico
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='email'
              type='email'
              placeholder='Tu correo electrónico'
            />
          </div>
          <div className='mb-4'>
            <label
              className='block text-gray-700 font-bold mb-2'
              htmlFor='message'
            >
              Mensaje
            </label>
            <textarea
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='message'
              rows='8'
              placeholder='Escribe tu mensaje'
            ></textarea>
          </div>
          <div className='flex justify-end'>
            <button
              className='bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline shadow-md transition duration-300'
              type='button'
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactoSeccion;
