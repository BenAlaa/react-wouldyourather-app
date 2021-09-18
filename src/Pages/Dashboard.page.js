import { useState, useMemo } from 'react'
import { Tab } from '@headlessui/react';
import {Link, useLocation} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { classNames } from '../utils/helpers';

 
const Dashboard = (props) => {
  const {questions, authedUser, users} = useSelector(({questions, authedUser, users}) => ({questions, authedUser, users}));
  const formateQuestions = (questions) => Object.keys(questions).map(key => questions[key]);
  const formatedQuestions = useMemo(() => formateQuestions(questions), [questions]);
  const filterAnsweredQuestions = () => formatedQuestions.filter(question => users[authedUser]?.answers[question.id]);
  const filterUnAnsweredQuestions = () => formatedQuestions.filter(question => !users[authedUser]?.answers[question.id]);

  const answeredQuestions = useMemo(() => filterAnsweredQuestions(questions), [questions])
  const unAnsweredQuestions = useMemo(() => filterUnAnsweredQuestions(questions), [questions])
  const categories = [
    {
      key: 'answered',
      label: 'Answered Questions',
      value: answeredQuestions
    },
    {
      key: 'unanswered',
      label: 'Unanswered Questions',
      value: unAnsweredQuestions
    }
  ]
  console.log({questions, answeredQuestions, unAnsweredQuestions})
  return (
    <div  className="flex items-center justify-center p-2">
      <div className="w-full px-4 py-4 sm:px-0 md:max-w-lg">
        <Tab.Group>
          <Tab.List className="flex p-1 space-x-1 bg-indigo-700 rounded-xl shadow-md">
            {categories.map(({key, label}) => (
              <Tab
                key={key}
                className={({ selected }) =>
                  classNames(
                    'w-full py-2.5 text-sm leading-5 font-medium  rounded-lg transition duration-300 ease-in-out',
                    'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-indigo-400 ring-white ring-opacity-60',
                    selected
                      ? 'bg-white text-indigo-700 shadow hover:ring-2 '
                      : 'text-white hover:bg-indigo-300 hover:bg-opacity-25  '
                  )
                }
              >
                {label}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-6">
            {categories.map(({value}, index) => (
              <Tab.Panel
                key={index}
                className={classNames(
                  'bg-white rounded-xl',
                  'focus:outline-none'
                )}
              >
                <ul>
                  {value.map((question, index) => (
                    <QuestionCard question={question} key={index}/>
                  ))}
                </ul>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
}


const QuestionCard = ({question}) => {
  console.log({question})
  return (
    <div className="w-full p-2 border-2 border-indigo-500 bg-indigo-200  rounded-lg mb-4 shadow-md transition-all duration-300 ease-in-out hover:scale-50">{question.id}</div>
  )
}
 
export default Dashboard;