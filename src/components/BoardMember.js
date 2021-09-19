import {GiStarFormation} from'react-icons/gi';
import {AiTwotoneStar} from 'react-icons/ai';
import {TiStar} from 'react-icons/ti';
import {classNames} from '../utils/helpers';


const BoardMember = ({member, isFirst, isSecond, isThird}) => {
  return (
    <div className={classNames(
      'flex justify-between w-full mb-4  overflow-hidden rounded-xl cursor-pointer border-2',
      'transform hover:scale-105',
      'transition-all duration-300 ease-in-out',
      isFirst? 'border-yellow-400' : (isSecond ? 'border-gray-400': (isThird ? 'border-yellow-600' : 'border-indigo-500'))
    )}>
      <div className={classNames(
        "p-2 md:p-3",
        isFirst? 'bg-yellow-300' : (isSecond ? 'bg-gray-300': (isThird ? 'bg-yellow-500' : 'bg-indigo-500'))
      )}>
        <img src={member?.avatarURL}
          className={classNames(
            "h-16 w-16 md:h-24 md:w-24 rounded-full border-4  shadow-xl",
            isFirst? 'border-yellow-400' : (isSecond ? 'border-gray-400': (isThird ? 'border-yellow-600' : 'border-indigo-500'))

          )}
          alt="author avatar"
        />
      </div>
      <div className="flex-grow p-2 flex-col items-between">
        <div className={classNames(
          "rounded-md text-center text-white font-semibold mb-2",
          isFirst? 'bg-yellow-300' : (isSecond ? 'bg-gray-300': (isThird ? 'bg-yellow-500' : 'bg-indigo-500'))
        )}>
          {member?.name}
        </div>
        <div className="flex justify-between flex-grow space-x-1">
          <div className={classNames(
            'flex flex-col justify-center items-center p-1 rounded-lg border-2 min-h-full text-sm',
            isFirst? 'border-yellow-400' : (isSecond ? 'border-gray-400': (isThird ? 'border-yellow-600' : 'border-indigo-500')),
            isFirst? 'text-yellow-500' : (isSecond ? 'text-gray-500': (isThird ? 'text-white' : 'text-indigo-500')),
            isFirst? 'bg-yellow-100' : (isSecond ? 'bg-gray-300': (isThird ? 'bg-yellow-500' : 'bg-indigo-500'))
          )}>
            <div>Questions</div>
            <div>{member?.questionsCount}</div>
          </div>
          <div className={classNames(
            'flex flex-col flex-grow justify-center items-center p-1 rounded-lg border-2 min-h-full text-sm',
            isFirst? 'border-yellow-400' : (isSecond ? 'border-gray-400': (isThird ? 'border-yellow-600' : 'border-indigo-500')),
            isFirst? 'text-yellow-500' : (isSecond ? 'text-gray-500': (isThird ? 'text-white' : 'text-indigo-500')),
            isFirst? 'bg-yellow-100' : (isSecond ? 'bg-gray-300': (isThird ? 'bg-yellow-500' : 'bg-indigo-500'))
          )}>
            <div>Score</div>
            <div>{member?.score}</div>
          </div>
          <div className={classNames(
            'flex flex-col justify-center items-center p-1 rounded-lg border-2 min-h-full text-sm',
            isFirst? 'border-yellow-400' : (isSecond ? 'border-gray-400': (isThird ? 'border-yellow-600' : 'border-indigo-500')),
            isFirst? 'text-yellow-500' : (isSecond ? 'text-gray-500': (isThird ? 'text-white' : 'text-indigo-500')),
            isFirst? 'bg-yellow-100' : (isSecond ? 'bg-gray-300': (isThird ? 'bg-yellow-500' : 'bg-indigo-500'))
          )}>
            <div>Answers</div>
            <div>{member?.answersCount}</div>
          </div>
        </div>
      </div>
      <div className={classNames(
        'min-h-full p-2 w-16  md:w-24 flex justify-center items-center text-white text-6xl',
        isFirst? 'bg-yellow-300' : (isSecond ? 'bg-gray-300': (isThird ? 'bg-yellow-500' : 'bg-indigo-500'))
      )}>
        {isFirst && <GiStarFormation/>}
        {isSecond && <AiTwotoneStar className="text-4xl"/>}
        {isThird && <TiStar className="text-2xl"/>}
      </div>
    </div>
  )
}
 
export default BoardMember;