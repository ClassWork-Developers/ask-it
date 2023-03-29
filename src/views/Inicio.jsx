import ComoFunciona from '../components/ComoFunciona';
import Testimonios from '../components/Testimonios';
import ContactoSeccion from '../components/ContactoSeccion';
import Footer from '../components/footer';

export default function Inicio() {
  return (
    <>
      <header className='max-h-screen w-full flex flex-col md:flex-row gap-10 items-center'>
        <div className='w-full md:w-1/2 flex flex-col justify-center gap-8 p-10'>
          <h1 className='font-exo font-bold text-4xl md:text-7xl'>
            Crea tus formularios con nosotros!
          </h1>
          <div>
            <p className='text-base md:text-lg font-hindi font-bold'>
              Crea, edita y elimina formularios como administrador...
            </p>
            <p className='text-base md:text-lg font-hindi font-bold'>
              Responde y ve todos los formularios en los que haz participado
              como cliente.
            </p>
          </div>
          <button className='w-full md:w-1/3 bg-gray-800 p-4 rounded-lg text-white font-hindi font-bold hover:border-black hover:border-2'>
            Registate aquí
          </button>
        </div>
        <div className='w-full md:w-1/2 flex items-center justify-center'>
          <div className='w-full md:w-3/4 lg:w-1/2 xl:w-3/5 flex items-center justify-center'>
            <img
              className='w-full h-auto object-cover object-center max-w-lg md:max-w-full'
              src='https://images.pexels.com/photos/6476590/pexels-photo-6476590.jpeg?auto=compress&cs=tinysrgb&w=600'
              alt='Page of init Ask it'
            />
          </div>
        </div>
      </header>
      <ComoFunciona />
      <Testimonios />
      <ContactoSeccion />
      <Footer />
    </>
  );
}
