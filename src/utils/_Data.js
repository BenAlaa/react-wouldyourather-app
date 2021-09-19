import _users from '../data/users.json';
import _questions from '../data/questions.json';
import {formatNewQuestion, formateNewUser} from './helpers';


let users = {..._users};
let questions = {..._questions};
export const _getUsers = () => new Promise((res, rej) => {
  setTimeout(() => res({...users}), 1000)
})

export const _getQuestions = () => new Promise((res, rej) => {
  setTimeout(() => res({...questions}), 1000)
})

export const _addNewUser = (user) => new Promise((res, rej) => {
  const existedUser = Object.keys(users).filter(id => (
    users[id].email === user.email
  ))[0];
  console.log({user, existedUser})
  setTimeout(() => {
    if(existedUser) return rej({message: 'This email already exists'})
    else {
      const formatedUser = formateNewUser(user);
      console.log({formatedUser})
      users = {
        ...users,
        [formatedUser.id]: {
          ...formatedUser
        }
      }
      res(formatedUser)
    }
  }, 500)
})

export const _loginUser = ({email, password}) => new Promise((res, rej) => {
  const user = Object.keys(users).filter(id => (
    users[id].email === email && users[id].password === password
    ))[0];
  setTimeout(() => {
    if(!user) rej({message: 'Incorrect Email or Password'})
    else {
      res(user)
    }
  }, 500)

})
export const _saveQuestion = (question) => new Promise((res, rej) => {
  const authedUser = question.author;
  const formattedQuestion = formatNewQuestion(question);

  setTimeout(() => {
    questions = {
      ...questions,
      [formattedQuestion.id]: formattedQuestion
    }
    
    users = {
      ...users,
      [authedUser]: {
        ...users[authedUser],
        questions: users[authedUser].questions.concat([formattedQuestion.id])
      }
    }

    res(formattedQuestion)
  }, 1000)
})

export const _saveQuestionAnswer = ({ authedUser, qid, answer }) => new Promise((res, rej) => {
  setTimeout(() => {
    users = {
      ...users,
      [authedUser]: {
        ...users[authedUser],
        answers: {
          ...users[authedUser].answers,
          [qid]: answer
        }
      }
    }

    questions = {
      ...questions,
      [qid]: {
        ...questions[qid],
        [answer]: {
          ...questions[qid][answer],
          votes: questions[qid][answer].votes.concat([authedUser])
        }
      }
    }

    res()
  }, 500)
})

