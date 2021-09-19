import {Link} from 'react-router-dom';
import {IoAddOutline} from 'react-icons/io5';
import {classNames} from '../utils/helpers';
const AddQuestionBtn = () => {
  return ( 
    <Link to="/add" className={classNames(
      "fixed bottom-2 right-2 w-20 h-20 rounded-full shadow-xl",
      "flex items-center justify-center",
      "bg-indigo-700 text-4xl text-white",
      'transform hover:scale-105',
      'transition-all duration-300 ease-in-out',
      "hover:text-white hover:bg-yellow-500"
    )}>
      <IoAddOutline />
    </Link>
  );
}
 
export default AddQuestionBtn;