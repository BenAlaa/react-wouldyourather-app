import ProgressCircle from './ProgressCircle';
import QuestionHeader from './QuestionHeader'
import {IoCheckmarkDoneCircleOutline} from 'react-icons/io5'

import {classNames} from '../utils/helpers';


const AnsweredQuestion = ({ question, authedUser }) => {
  const { optionOne, optionTwo } = question;
  const optOneCount = optionOne.votes.length;
  const optTwoCount = optionTwo.votes.length;
  const totalVotes = optOneCount + optTwoCount;

  const options = {
    one: {
      text: optionOne.text,
      percent: Math.round((optOneCount / totalVotes) * 10000) / 100,
      count: optionOne.votes.length,
      total: totalVotes
    },
    two: {
      text: optionTwo.text,
      percent: Math.round((optTwoCount / totalVotes) * 10000) / 100,
      count: optionTwo.votes.length,
      total: totalVotes
    }
  }

  return (
    <div className="w-full border border-indigo-300 p-2 shadow-lg rounded-lg">
      <QuestionHeader />
      <hr className="m-2" />
      <div className="w-full p-2 mt-8">
        <QuestionOption 
          option={options.one}
          isChoosen={optionOne?.votes?.includes(authedUser)}
        />
        <QuestionOption 
          option={options.two}
          isChoosen={optionTwo?.votes.includes(authedUser)}
        />
      </div>
    </div>
  );
};


const QuestionOption = ({option, isChoosen}) => {
  const {text, percent, count, total} = option;
  return (
    <div className="flex justify-start items-center space-x-4 mb-4">
      <ProgressCircle
        {...{percent, count, total, label: 'votes'}}
      />
      <div className={classNames(
        "relative h-20 p-2 flex-grow border-2 border-indigo-400 rounded-xl",
        "flex items-center justify-center",
        isChoosen
         ? "bg-gradient-to-r from-indigo-700 to-indigo-400  ring-2 ring-offset-2 ring-offset-sky-300 ring-yellow-500 ring-opacity-60 text-white"
         : "text-indigo-500"
      )}>
        <div>{text}</div>
        {isChoosen &&
          <div className="absolute right-2 rounded-full text-2xl text-white bg-yellow-400">
            <IoCheckmarkDoneCircleOutline />
          </div>
        }
      </div>
    </div>
  );
};


export default AnsweredQuestion;
