import { RECEIVE_QUESTIONS } from '../actions/questions'
import { ANSWER_QUESTION, ADD_QUESTION } from '../actions/questions'

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = {}, {type, payload}) => {
  switch (type) {
    case RECEIVE_QUESTIONS:
      const {questions} = payload
      return {
        ...state,
        ...questions
      }
    case ANSWER_QUESTION:
      const {qid, answer, authedUser} = payload
      return {
        ...state,
        [qid]: {
          ...state[qid],
          [answer]: {
            ...state[qid][answer],
            votes: state[qid][answer].votes.concat([authedUser])
          }
        }
      }
    case ADD_QUESTION:
      const {id} = payload
        return {
          ...state,
          [id]: payload
        }
    default:
      return state
  }
}
