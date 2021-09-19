import {Link} from 'react-router-dom';
import {classNames} from '../utils/helpers';


const NavLink = ({name, path, currentPath, isFull = false}) => {
  const isActiveRoute = (path) => path === currentPath;
  return (
    <Link
      to={path}
      className={classNames(
        isActiveRoute(path) ? 'bg-yellow-400 text-white  transition duration-300 ease-in-out' : 'text-white hover:bg-indigo-300 hover:bg-opacity-50 hover:text-white transition duration-200 ease-in-out',
        'px-3 py-2 rounded-md text-sm font-medium', isFull ? 'block' : ''
      )}
    >
      {name}
    </Link>
  )
}
 
export default NavLink;