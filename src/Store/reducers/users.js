import { RECEIVE_USERS, ADD_USER } from '../actions/users'
import { ANSWER_QUESTION , ADD_QUESTION} from '../actions/questions'

export default function users(state = {}, {type, payload}) {
  switch (type) {
    case RECEIVE_USERS:
      const {users} = payload;
      return {
        ...state,
        ...users
      }
    case ADD_USER:
      const {user} = payload;
      return {
        ...state,
        [user.id]: {
          ...user
        }
      }
    case ANSWER_QUESTION: 
      const {authedUser, qid, answer} = payload;
      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          answers: {
            ...state[authedUser].answers,
            [qid]: answer
          }
        }
      }
    case ADD_QUESTION:
      const {author, id} = payload;
      return {
        ...state,
        [author]: {
          ...state[author],
          questions: state[author].questions.concat([id])
        }
      }
    default:
        return state
  }
}