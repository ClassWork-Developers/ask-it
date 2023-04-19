import { Circles } from 'react-loader-spinner';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { navigationSesion } from '../assets/constantes';
import axios from 'axios';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Nav() {
  const { logout, loginWithRedirect, user, isAuthenticated, isLoading } =
    useAuth0();
  const currentUser = JSON.parse(localStorage.getItem('currentUser')) || {};

  function SendAuth(object) {
    axios
      .post('http://localhost:3000/AuthRoute', object)
      .then((response) => {
        localStorage.setItem(
          'currentUser',
          JSON.stringify({
            nombre: response.data.nombre,
            token: response.data.token,
            status: response.data.status,
            icon: response.data.icon,
            id: response.data.id,
            type: 'alumno',
          })
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }

  if (isLoading) {
    return (
      <div className='flex items-center justify-center min-h-screen'>
        <Circles
          height='80'
          width='80'
          color='gray'
          ariaLabel='circles-loading'
          wrapperStyle={{}}
          wrapperClass=''
          visible={true}
        />
      </div>
    );
  }

  if (localStorage.getItem('currentUser') == null) {
    const { user } = useAuth0();
    let obj = {
      correo: user.email,
      nombre: user.name,
      clave: user.nickname,
      icono: user.icon,
    };
    SendAuth(obj);
  }
  const showLogout = isAuthenticated || localStorage.getItem('currentUser');

  return (
    <>
      <div className='flex'>
        <div className='flex flex-col min-h-screen p-3 bg-white shadow w-60 dark:bg-gray-700 dark:text-white dark:border-r-2 dark:border-gray-600'>
          <div className='space-y-3'>
            <div className='flex items-center dark:bg-gray-400 dark:p-3 dark:rounded-lg'>
              <img
                src='public/logo.svg'
                alt='Logo de AskIt'
                className='w-8 h-8 mr-2'
              />
              <h2 className='text-xl font-bold'>Ask It</h2>
            </div>

            <div className='flex-1'>
              <ul className='pt-2 pb-4 space-y-1 text-sm'>
                {showLogout &&
                  navigationSesion.map((nav) => (
                    <li className='rounded-sm' key={nav.href}>
                      <Link
                        to={nav.href}
                        className='flex items-center p-2 space-x-3 rounded-md'
                      >
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          className='w-6 h-6'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d={nav.icon}
                          />
                        </svg>
                        <span>{nav.name}</span>
                      </Link>
                    </li>
                  ))}

                {!showLogout ? (
                  <li
                    className='rounded-sm'
                    onClick={() => loginWithRedirect()}
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='w-6 h-6'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1'
                      />
                    </svg>
                    <span>LogIn</span>
                  </li>
                ) : (
                  <li className='rounded-sm'>
                    <a
                      href='#'
                      className='flex items-center p-2 space-x-3 rounded-md'
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='w-6 h-6'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1'
                        />
                      </svg>
                      <span
                        onClick={() => {
                          logout();
                          localStorage.removeItem('currentUser');
                        }}
                      >
                        Logout
                      </span>
                    </a>
                  </li>
                )}
                {showLogout && (
                  <div className='bg-white  w-full px-4 py-8 dark:bg-gray-700'>
                    <img
                      className='h-16 w-16 rounded-full mx-auto mb-2'
                      src={user?.picture || currentUser?.icon}
                      alt='Perfil de usuario'
                    />
                    <div className='text-center'>
                      <div className='text-lg font-medium text-white mb-2'>
                        {user?.nickname || currentUser?.type}
                      </div>
                      <div className='text-sm font-medium text-dark-400 mb-4'>
                        {user?.name || currentUser?.type}
                      </div>
                      <div className='text-sm font-medium text-dark-400'>
                        {user?.email || currentUser?.name}
                      </div>
                    </div>
                  </div>
                )}
              </ul>
            </div>
          </div>
        </div>
        <main className='grow dark:bg-gray-700'>
          <div className='mx-auto max-w-7xl py-6 sm:px-6 lg:px-8'>
            <Outlet />
          </div>
        </main>
      </div>
    </>
  );
}
