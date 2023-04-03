import { useAuth0 } from '@auth0/auth0-react';

export default function UndefinedPath() {
  const { isAuthenticated, logout } = useAuth0();
  return (
    <main className='min-h-screen p-5 text-xl text-center flex flex-col items-center justify-center gap-5 md:text-3xl'>
      <img className='w-32 h-32' src='../../public/logo.svg' alt='Logo' />
      <section className='flex items-center'>
        <h2 className='font-bold'>Lo sentimos, parece que te has perdido...</h2>
        <i className='fas fa-frown w-6 h-6 ml-2'></i>
      </section>
      <p>
        La página que buscas no existe. Por favor, dirígete al{' '}
        <a
          className='font-bold underline cursor-pointer'
          href={isAuthenticated ? '#' : '/'}
          onClick={() => {
            window.location.reload();
          }}
        >
          inicio
        </a>
        .
      </p>
    </main>
  );
}
