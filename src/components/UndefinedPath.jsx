import { useAuth0 } from '@auth0/auth0-react';

export default function UndefinedPath() {
  const { isAuthenticated, logout, user } = useAuth0();
  const homeUrl = isAuthenticated ? `/dashboard/${user.sub}` : '/';

  return (
    <main className='min-h-screen p-5 text-center flex flex-col items-center justify-center gap-5'>
      <img className='w-32 h-32' src='../../public/logo.svg' alt='Logo' />
      <section className='flex items-center gap-2'>
        <h2 className='text-xl font-bold'>
          Lo sentimos, parece que te has perdido...
        </h2>
        <i className='fas fa-frown w-6 h-6'></i>
      </section>
      <p className='text-lg'>
        La página que buscas no existe. Por favor, dirígete al{' '}
        <a
          className='font-bold underline cursor-pointer text-black hover:shadow-md'
          href={homeUrl}
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
