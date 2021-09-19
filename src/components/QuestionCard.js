import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {BsCheckCircle} from 'react-icons/bs';
import QuestionHeader from './QuestionHeader';
import { classNames } from '../utils/helpers';


const QuestionCard = ({question}) => {
  const {id, author, optionOne, optionTwo, timestamp} = question
  const users = useSelector(state => state.users);
  const user = users[author];
  return (
    <Link
      to={`/question/${id}`}
      className={
        classNames(
          "flex items-start justify-start space-x-1 lg:space-x-6 xl:space-x-12 w-full p-2 border-2 border-indigo-300  rounded-lg mb-4 shadow-md",
          'transform hover:scale-105',
          'transition-all duration-300 ease-in-out',
        )
      }
    >
      <div className="p-1 flex flex-col justify-center items-center rounded-lg bg-yellow-400">
        <img src={user?.avatarURL}
          className="h-20 w-20 rounded-full border-2 border-indigo-200 shadow-xl"
          alt="author avatar"
        />
        <div className="text-sm px-1 text-white mt-1 mb-1 rounded-full bg-indigo-400">{user?.name}</div>
        <div className="text-xs p-1 px-2 w-fit text-center rounded-full text-indigo-400 bg-indigo-100">{new Date(timestamp).toLocaleString()}</div>
      </div>
      <div className="flex flex-col flex-grow px-2 items-between">
        <QuestionHeader />
        <hr className="mb-2 mt-2"/>
        <div className="text-sm md:text-lg rounded-md text-indigo-500 px-1 border border-indigo-400">
          <BsCheckCircle className="inline mr-2 rounded-full text-yellow-500 bg-yellow-100 border border-yellow-500 "/>{optionOne.text}
        </div>
        <span className="bg-yellow-400 text-white text-md w-8 rounded-md m-auto text-center mt-2 mb-2">OR</span>
        <div className="text-sm md:text-lg rounded-md text-indigo-500 px-1 border border-indigo-400 mb-2">
          <BsCheckCircle className="inline mr-2 rounded-full text-yellow-500 bg-yellow-100 border border-yellow-500 "/>{optionTwo.text}
        </div>
      </div>
    </Link>
  )
}
 
export default QuestionCard;