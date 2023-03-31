import { Circles } from 'react-loader-spinner';
import { Outlet } from 'react-router-dom';
import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useAuth0 } from '@auth0/auth0-react';
import { userNavigation, navigationSesion } from '../assets/constantes';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Nav() {
  const { logout, loginWithRedirect, user, isAuthenticated, isLoading } =
    useAuth0();

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

  return (
    <>
      <div className='flex'>
        <Disclosure
          as='nav'
          className='bg-gray-200 h-[100vh] w-[15vw] flex flex-col items-center'
        >
          {({ open }) => (
            <>
              <div className='flex-shrink-0 m-6'>
                <img className='h-20 w-20' src='/logo.svg' alt='Your Company' />
              </div>
              <div className='hidden md:flex flex-col space-x-4 grow'>
                {navigationSesion.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-800 hover:bg-gray-700 hover:text-white',
                      'rounded-md px-3 py-2 my-3 text-sm font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </a>
                ))}
                {!isAuthenticated && (
                  <p
                    onClick={() => {
                      loginWithRedirect();
                    }}
                    className='flex gap-4 items-center text-right rounded-md px-3 py-2 my-3 text-sm font-medium cursor-pointer text-gray-800 hover:bg-gray-700 hover:text-white'
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
                        d='M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75'
                      />
                    </svg>
                    Iniciar Sesión
                  </p>
                )}
              </div>
              <div className='hidden md:block'>
                {/* Profile dropdown */}
                {isAuthenticated && (
                  <Menu as='div' className='relative ml-3'>
                    <div>
                      <Menu.Button className='flex max-w-xs items-center rounded-full bg-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'>
                        <span className='sr-only'>Open user menu</span>
                        <img
                          className='h-8 w-8 rounded-full'
                          src={user.picture}
                          alt=''
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter='transition ease-out duration-100'
                      enterFrom='transform opacity-0 scale-95'
                      enterTo='transform opacity-100 scale-100'
                      leave='transition ease-in duration-75'
                      leaveFrom='transform opacity-100 scale-100'
                      leaveTo='transform opacity-0 scale-95'
                    >
                      <Menu.Items className='absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                        {userNavigation.map((item) => (
                          <Menu.Item key={item.name}>
                            {({ active }) => (
                              <a
                                href={item.href}
                                className={classNames(
                                  active ? 'bg-gray-100' : '',
                                  'block px-4 py-2 text-sm text-gray-700'
                                )}
                              >
                                {item.name}
                              </a>
                            )}
                          </Menu.Item>
                        ))}
                        <p
                          onClick={() => {
                            logout();
                          }}
                          className={
                            'block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer'
                          }
                        >
                          Log out
                        </p>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                )}
                <div className='ml-4 flex items-center md:ml-6'></div>
              </div>
              <div className='-mr-2 flex md:hidden'>
                {/* Mobile menu button */}
                <Disclosure.Button className='inline-flex items-center justify-center rounded-md bg-gray-200 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'>
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <XMarkIcon className='block h-6 w-6' aria-hidden='true' />
                  ) : (
                    <Bars3Icon className='block h-6 w-6' aria-hidden='true' />
                  )}
                </Disclosure.Button>
              </div>
              <Disclosure.Panel className='md:hidden'>
                <div className='space-y-1 px-2 pt-2 pb-3 sm:px-3'>
                  {navigationSesion.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as='a'
                      href={item.href}
                      className={classNames(
                        item.current
                          ? 'bg-gray-900 text-white'
                          : 'text-gray-800 hover:bg-gray-700 hover:text-white',
                        'block rounded-md px-3 py-2 text-base font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                  {!isAuthenticated && (
                    <h1
                      onClick={() => {
                        loginWithRedirect();
                      }}
                      className='flex gap-2 items-center text-right rounded-md px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-700 hover:text-white cursor-pointer'
                    >
                      Iniciar Sesión
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
                          d='M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75'
                        />
                      </svg>
                    </h1>
                  )}
                </div>
                {isAuthenticated && (
                  <div className='border-t border-gray-700 pt-4 pb-3'>
                    <div className='flex items-center px-5'>
                      <div className='flex-shrink-0'>
                        <img
                          className='h-10 w-10 rounded-full'
                          src={user.picture}
                          alt=''
                        />
                      </div>
                      <div className='ml-3'>
                        <div className='text-base font-medium leading-none text-white'>
                          {user.nickname}
                        </div>
                        <div className='text-sm font-medium leading-none text-gray-400'>
                          {user.name}
                        </div>
                      </div>
                    </div>
                    <div className='mt-3 space-y-1 px-2'>
                      {userNavigation.map((item) => (
                        <Disclosure.Button
                          key={item.name}
                          as='a'
                          href={item.href}
                          className='block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white'
                        >
                          {item.name}
                        </Disclosure.Button>
                      ))}
                      <p
                        onClick={() => {
                          logout();
                        }}
                        className={
                          'block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white cursor-pointer'
                        }
                      >
                        Cerrar Sesión
                      </p>
                    </div>
                  </div>
                )}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <main className='grow'>
          <div className='mx-auto max-w-7xl py-6 sm:px-6 lg:px-8'>
            <Outlet />
          </div>
        </main>
      </div>
    </>
  );
}
