import { Fragment } from 'react'
import {Link, useLocation} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Disclosure, Menu, Transition } from '@headlessui/react'
import {IoCloseSharp,IoMenuSharp} from 'react-icons/io5';
import {classNames} from '../utils/helpers';
import Logo from '../assets/logo.png';
import LightLogo from '../assets/logo-light.png';


const routes = [
  { name: 'Dashboard', path: '/dashboard', current: true },
  { name: 'New Question', path: '/add', current: false },
  { name: 'Leader Board', path: '/leaderboard', current: false },
]


const NavBar = (props) => {
  const location = useLocation();
  const {authedUser, users} = useSelector(({authedUser, users}) => ({authedUser, users}));
  const user = users[authedUser]

  return ( 
    <Disclosure as="nav" className="bg-indigo-700 shadow-md">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-indigo-300 hover:bg-opacity-50 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <IoCloseSharp className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <IoMenuSharp className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <Link to="/" className="flex-shrink-0 flex items-center">
                  <img
                    className="block h-8 w-auto "
                    src={LightLogo}
                    alt="Workflow"
                  />
                  <div className="hidden lg:block text-white text-lg font-semibold ml-2">iVote</div>
                </Link>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {routes.map(({name, path}) => (
                      <NavLink {...{name, path, currentPath: location.pathname}} key={name} />
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}
                {user && <ProfileMenu user={user}/>}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden bg-indigo-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {routes.map(({name, path}) => (
                <NavLink {...{name, path, currentPath: location.pathname, isFull: true}} key={name}/>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
   );
}

const NavLink = ({name, path, currentPath, isFull = false}) => {
  const isActiveRoute = (path) => path === currentPath;
  return (
    <Link
      to={path}
      className={classNames(
        isActiveRoute(path) ? 'bg-white text-indigo-500 transition duration-300 ease-in-out' : 'text-white hover:bg-indigo-300 hover:bg-opacity-50 hover:text-white transition duration-200 ease-in-out',
        'px-3 py-2 rounded-md text-sm font-medium', isFull ? 'block' : ''
      )}
    >
      {name}
    </Link>
  )
}

const ProfileMenu = ({user}) => (
  <Menu as="div" className="ml-3 relative">
    <div>
      <Menu.Button className="flex items-center md:space-x-2 text-sm p-1 border-2 border-white rounded-full text-white hover:bg-white hover:text-indigo-800 focus:outline-none transition duration-300 ease-in-out">
        <span className="sr-only">Open user menu</span>
        <div className="hidden md:block">{user?.name}</div>
        <img
          className="h-8 w-8 rounded-full"
          src={user?.avatarURL}
          alt=""
        />
      </Menu.Button>
    </div>
    <Transition
      as={Fragment}
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
        <Menu.Item>
          {({ active }) => (
            <a
              href="#"
              className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
            >
              Your Profile
            </a>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <a
              href="#"
              className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
            >
              Log out
            </a>
          )}
        </Menu.Item>
      </Menu.Items>
    </Transition>
  </Menu>
)
 
export default NavBar;