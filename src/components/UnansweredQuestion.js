import { useState } from "react";
import {useDispatch} from 'react-redux';
import {IoCheckmarkCircle, IoCheckmarkDoneCircleOutline} from 'react-icons/io5'
import {toast} from 'react-toastify';
import QuestionHeader from "./QuestionHeader";
import Error from './Error';
import { classNames } from "../utils/helpers";
import {handleAddAnswer} from '../Store/actions/questions'

const UnansweredQuestion = ({ question, authedUser }) => {
  const [selected, setSelected] = useState("");
  const [hasError, setHasError] = useState(false);
  const { optionOne, optionTwo } = question;
  const dispatch = useDispatch();

  const options = [
    {
      value: "optionOne",
      label: optionOne.text,
    },
    {
      value: "optionTwo",
      label: optionTwo.text,
    },
  ];

  const handleChange = (value) => {
    setHasError(false)
    setSelected(value);
  }
  const handleSubmit = () => {
    if(!selected) {
      setHasError(true);
    }
    else {
      dispatch(handleAddAnswer({qid: question.id, answer: selected, authedUser}))
      toast.success('🦄 You voted successfully');
    }
  }

  return (
    <div className="flex flex-col w-full border border-indigo-300 p-2 shadow-lg rounded-lg">
      <QuestionHeader />
      <hr className="m-2" />
      <div className="w-full p-2 mt-8">
        {options.map(({ value, label }) => (
          <QuestionOption
            {...{
              value,
              label,
              selected: selected === value,
              onChange: handleChange,
            }}
            key={value}
          />
        ))}
      </div>
      <hr className="m-2" />
      {hasError && <Error error="You must choose one vote first!"/>}
      <button
        onClick={handleSubmit}
        className={classNames(
          "m-auto mb-8 mt-8 text-center p-2 px-8 rounded-full bg-indigo-500 text-white",
          "ring-2 ring-offset-2 ring-offset-sky-300 ring-yellow-300 ring-opacity-60",
          "transition ease-in-out duration-300",
          "transform hover:scale-105 hover:bg-yellow-500"
        )}>
        Vote
        <IoCheckmarkCircle className="inline ml-4"/>
      </button>
    </div>
  );
};

const QuestionOption = ({ value, label, selected, onChange }) => {
  const handleClick = () => onChange(value)
  return (
    <div className="flex justify-start items-center space-x-4 mb-4" onClick={handleClick}>
      <div
        className={classNames(
          "flex relative",
          "h-20 p-2 cursor-pointer flex-grow rounded-xl",
          "flex items-center justify-center md:text-lg",
          "transition ease-in-out duration-300",
          selected
            ? "bg-gradient-to-r from-indigo-700 to-indigo-400 ring-2 ring-offset-2 ring-offset-sky-300 ring-indigo-300 ring-opacity-60 text-white"
            : "border-2 border-indigo-500 text-indigo-600 hover:bg-indigo-100 hover:border-indigo-500 hover:text-indigo-500 "
        )}
      >
        <div>{label}</div>
        {selected &&
          <div className="absolute right-2 rounded-full text-2xl text-white bg-yellow-400">
            <IoCheckmarkDoneCircleOutline />
          </div>
        }
      </div>
    </div>
  );
};

export default UnansweredQuestion;
