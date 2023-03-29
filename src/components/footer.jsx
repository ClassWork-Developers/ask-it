import React from 'react';
import { FaGithub, FaInstagram, FaWhatsapp, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='bg-gray-800 text-white py-8 px-4 sm:px-6 lg:px-8'>
      <div className='container mx-auto flex flex-col sm:flex-row justify-between'>
        <div className='flex items-center mb-4 sm:mb-0'>
          <a
            href='https://github.com/tu-usuario'
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray-400 hover:text-white mr-4'
          >
            <FaGithub size={24} />
          </a>
          <a
            href='https://www.instagram.com/tu-usuario'
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray-400 hover:text-white mr-4'
          >
            <FaInstagram size={24} />
          </a>
          <a
            href='https://api.whatsapp.com/send?phone=NUMERO-TELEFONO'
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray-400 hover:text-white mr-4'
          >
            <FaWhatsapp size={24} />
          </a>
          <a
            href='https://www.tiktok.com/@tu-usuario'
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray-400 hover:text-white'
          >
            <FaTiktok size={24} />
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
