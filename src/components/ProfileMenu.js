import { Fragment } from 'react';
import {  useDispatch } from 'react-redux';
import { Menu, Transition } from '@headlessui/react';
import {classNames} from '../utils/helpers';
import {logoutUser} from '../Store/actions/authedUser';



const ProfileMenu = ({user}) => {
  const dispatch = useDispatch()
  const handleLogout = () => dispatch(logoutUser())

  return (
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
            <div
            onClick={handleLogout}
              className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700 cursor-pointer')}
            >
              Log out
            </div>
          )}
        </Menu.Item>
      </Menu.Items>
    </Transition>
  </Menu>
  )
}
 
export default ProfileMenu;