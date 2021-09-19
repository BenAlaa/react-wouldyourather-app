import { useMemo, useEffect } from 'react'
import { Tab } from '@headlessui/react';
import { useSelector } from 'react-redux';
import { classNames } from '../utils/helpers';
import QuestionCard from '../components/QuestionCard';
import PageWrapper from "../components/PageWrapper";


 
const Dashboard = (props) => {
  const {questions, authedUser, users} = useSelector(({questions, authedUser, users}) => ({questions, authedUser, users}));
  const formateQuestions = (questions) => Object.keys(questions).map(key => questions[key]).sort((a, b) => b.timestamp-a.timestamp);
  const formatedQuestions = useMemo(() => formateQuestions(questions), [questions]);

  const answeredQuestions = useMemo(() => formatedQuestions.filter(question => users[authedUser]?.answers[question.id]), [authedUser, users, formatedQuestions])
  const unAnsweredQuestions = useMemo(() => formatedQuestions.filter(question => !users[authedUser]?.answers[question.id]), [authedUser, users, formatedQuestions])
  const categories = [
    {
      key: 'unanswered',
      label: 'Unanswered Questions',
      value: unAnsweredQuestions
    },
    {
      key: 'answered',
      label: 'Answered Questions',
      value: answeredQuestions
    }
  ]

  useEffect(() => {
    document.title = 'iVote | Dashboard'
  })

  const getTabDataCount = (key) => categories?.find(cat => cat.key === key).value.length;
  return (
    <PageWrapper>
      {authedUser && <div className="w-full px-2 py-4 sm:px-0 md:max-w-2xl">
        <Tab.Group>
          <Tab.List className="flex p-1 space-x-1 bg-indigo-500 rounded-xl shadow-md">
            {categories.map(({key, label}) => (
              <Tab
                key={key}
                className={({ selected }) =>(
                  classNames(
                    'w-full py-2.5 text-sm leading-5 font-medium  rounded-lg transition duration-300 ease-in-out',
                    'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-indigo-400 ring-white ring-opacity-60',
                    selected
                      ? 'bg-white text-indigo-500 shadow hover:ring-2 '
                      : 'text-white hover:bg-indigo-300 hover:bg-opacity-25  '
                    )
                  )
                }
              >
                {label}
                <span 
                  className="block w-5 mx-auto  rounded-md text-yellow-500  bg-yellow-200 border border-yellow-500 md:inline md:p-2 md:ml-3">{getTabDataCount(key)}</span>
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-6 md:p-2">
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
      </div>}
    </PageWrapper>
  );
}
 
export default Dashboard;