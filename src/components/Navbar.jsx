import { Circles } from 'react-loader-spinner';
import { Outlet, Link } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';
import { Fragment, useState } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, ArrowLeftOnRectangleIcon } from '@heroicons/react/24/outline';
import { useAuth0 } from '@auth0/auth0-react';
import { navigation, userNavigation } from '../assets/constantes';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Nav() {
  //LogOut();

  const { logout, loginWithRedirect, user, isAuthenticated, isLoading } = useAuth0();
  const [inicioViewPort, setinicioViewPort] = useState(true);
  const [nosotrosViewPort, setnosotrosViewPort] = useState(false);
  const [usoViewPort, setusoViewPort] = useState(false);
  const [contactoViewPort, setcontactoViewPort] = useState(false);

  function scroll() {
    const inicioId = document.getElementById('inicio').getBoundingClientRect();
    const nosotrosId = document.getElementById('nosotros').getBoundingClientRect();
    const usoId = document.getElementById('uso').getBoundingClientRect();
    const contactoId = document.getElementById('contacto').getBoundingClientRect();

    setinicioViewPort(inicioId.top < (window.innerHeight || document.documentElement.clientHeight) && inicioId.bottom > 0);
    setnosotrosViewPort(nosotrosId.top < (window.innerHeight || document.documentElement.clientHeight) && nosotrosId.bottom > 0);
    setusoViewPort(usoId.top < (window.innerHeight || document.documentElement.clientHeight) && usoId.bottom > 0);
    setcontactoViewPort(contactoId.top < (window.innerHeight || document.documentElement.clientHeight) && usoId.bottom > 0);
  }
  function viewPort(item) {
    switch (item) {
      case 'nosotrosViewPort':
        return nosotrosViewPort;
      case 'usoViewPort':
        return usoViewPort;
      case 'contactoViewPort':
        return contactoViewPort;
      default:
        return inicioViewPort;
    }
  }
  document.addEventListener('scroll', scroll);
  if (isLoading) {
    return (
      <div className='flex items-center justify-center min-h-screen'>
        <Circles height='80' width='80' color='gray' ariaLabel='circles-loading' wrapperStyle={{}} wrapperClass='' visible={true} />
      </div>
    );
  }

  return (
    <>
      <Disclosure as='nav' className='bg-white min-h-full sticky top-0 z-[99]'>
        {({ open }) => (
          <>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
              <div className='flex h-16 items-center justify-between'>
                <div className='flex items-center'>
                  <div className='flex-shrink-0'>
                    <img className='inline-block h-10 w-10 ' src='/logo.svg' alt='' />
                  </div>
                  <div className='hidden md:block'>
                    <div className='ml-10 flex items-baseline space-x-4'>
                      {navigation.map((item) => (
                        <LinkScroll
                          to={item.href}
                          key={item.name}
                          spy={true}
                          smooth={true}
                          duration={500}
                          className={classNames(
                            viewPort(item.viewPort) ? 'bg-gray-900 text-white' : 'text-gray-800 hover:bg-gray-700 hover:text-white',
                            'rounded-md px-3 py-2 text-sm font-medium'
                          )}
                        >
                          {item.name}
                        </LinkScroll>
                      ))}
                      {!isAuthenticated && (
                        <Link to={'/login'}>
                          <p className='flex gap-2 items-center text-right rounded-md px-3 py-2 text-sm font-medium cursor-pointer text-gray-800 hover:bg-gray-700 hover:text-white'>
                            Iniciar Sesión
                            <ArrowLeftOnRectangleIcon className='h-6 w-6' />
                          </p>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
                <div className='hidden md:block'>
                  {/* Profile dropdown */}
                  {isAuthenticated && (
                    <Menu as='div' className='relative ml-3'>
                      <div>
                        <Menu.Button className='flex max-w-xs items-center rounded-full bg-transparent text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'>
                          <span className='sr-only'>Open user menu</span>
                          <img className='h-8 w-8 rounded-full' src={user.picture} alt='' />
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
                                <a href={item.href} className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}>
                                  {item.name}
                                </a>
                              )}
                            </Menu.Item>
                          ))}
                          <p
                            onClick={() => {
                              logout();
                              localStorage.removeItem('currentUser');
                            }}
                            className={'block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer'}
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
                  <Disclosure.Button className='inline-flex items-center justify-center rounded-md bg-transparent p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'>
                    <span className='sr-only'>Open main menu</span>
                    {open ? <XMarkIcon className='block h-6 w-6' aria-hidden='true' /> : <Bars3Icon className='block h-6 w-6' aria-hidden='true' />}
                  </Disclosure.Button>
                </div>
              </div>
            </div>
            <Disclosure.Panel className='md:hidden'>
              <div className='space-y-1 px-2 pt-2 pb-3 sm:px-3'>
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as='a'
                    href={item.href}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-gray-800 hover:bg-gray-700 hover:text-white',
                      'block rounded-md px-3 py-2 text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
                {!isAuthenticated && (
                  <Link to={'/login'}>
                    <h1 className='flex gap-2 items-center text-right rounded-md px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-700 hover:text-white cursor-pointer'>
                      Iniciar Sesión
                      <ArrowLeftOnRectangleIcon className='w-6 h-6' />
                    </h1>
                  </Link>
                )}
              </div>
              {isAuthenticated && (
                <div className='border-t border-gray-700 pt-4 pb-3'>
                  <div className='flex items-center px-5'>
                    <div className='flex-shrink-0'>
                      <img className='h-10 w-10 rounded-full' src={user.picture} alt='' />
                    </div>
                    <div className='ml-3'>
                      <div className='text-base font-medium leading-none text-white'>{user.nickname}</div>
                      <div className='text-sm font-medium leading-none text-gray-400'>{user.name}</div>
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
                        localStorage.removeItem('currentUser');
                      }}
                      className={'block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white cursor-pointer'}
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
      <main>
        <Outlet />
      </main>
    </>
  );
}
