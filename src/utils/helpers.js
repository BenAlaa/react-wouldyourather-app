const generateUID = () =>  Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)

export const formatNewQuestion = ({ optionOne, optionTwo, author }) => ({
  id: generateUID(),
  timestamp: Date.now(),
  author,
  optionOne: {
    votes: [],
    text: optionOne,
  },
  optionTwo: {
    votes: [],
    text: optionTwo,
  }
})

export const formateNewUser = ({name, email, password, avatarURL}) => ({
  id: generateUID(),
  name,
  email,
  password,
  avatarURL,
  answers: {},
  questions: []
})


export const classNames = (...classes) => classes.filter(Boolean).join(' ');

export const formateQuestions = (questions) => Object.keys(questions).map(key => questions[key]);

export const calculateScore = (user) => {
  const answersCount = Object.keys(user.answers).length;
  const questionsCount = Object.keys(user.questions).length;
  const score = answersCount + questionsCount;
  return {
    ...user,
    answersCount,
    questionsCount,
    score
  }
}