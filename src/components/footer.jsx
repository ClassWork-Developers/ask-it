import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-gray-800 text-white py-8 px-4 sm:px-6 lg:px-8'>
      <div className='container mx-auto flex flex-col sm:flex-row justify-between'>
        <div className='flex items-center mb-4 sm:mb-0'>
          <a
            href='https://github.com/ClassWork-Developers/ask-it'
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray-400 hover:text-white mr-4'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5'
              />
            </svg>
          </a>
          <a
            href='https://www.instagram.com/tu-usuario'
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray-400 hover:text-white mr-4'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6'
            >
              <path
                strokeLinecap='round'
                d='M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25'
              />
            </svg>
          </a>
          <a
            href='https://api.whatsapp.com/send?phone=NUMERO-TELEFONO'
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray-400 hover:text-white mr-4'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3'
              />
            </svg>
          </a>
        </div>

        <div className='text-gray-400'>
          <p>Ask It S.A.</p>
          <p>Dirección: Av 6 con calle 12-13, Valera</p>
          <p>Teléfono: +54 4121078765</p>
          <p>© 2023 Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
