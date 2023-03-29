import ComoFunciona from '../components/ComoFunciona';
import Testimonios from '../components/Testimonios';

export default function Inicio() {
  return (
    <>
      <header className='max-h-screen w-full flex gap-10'>
        <div className='w-1/2 flex flex-col justify-center gap-8 p-10'>
          <h1 className='font-exo font-bold text-7xl'>
            Crea tus formularios con nosotros!
          </h1>
          <div>
            <p className='text-lg font-hindi font-bold'>
              Crea, edita y elimina formularios como administrador...
            </p>
            <p className='text-lg font-hindi font-bold'>
              Responde y ve todos los formularios en los que haz participado
              como cliente...
            </p>
          </div>
          <button className='w-1/3 bg-gray-800 p-4 rounded-lg text-white font-hindi font-bold  hover:border-black hover:border-2'>
            Registate aquí
          </button>
        </div>
        <div className='w-1/2 flex items-center justify-center'>
          <img
            className='w-full h-screen object-cover object-center'
            src='https://images.pexels.com/photos/6476590/pexels-photo-6476590.jpeg?auto=compress&cs=tinysrgb&w=600'
            alt=''
          />
        </div>
      </header>
      <ComoFunciona />
      <Testimonios />
    </>
  );
}
