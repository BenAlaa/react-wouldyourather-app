
import {
  _getUsers,
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer,
  _addNewUser,
  _loginUser
} from './_Data'

export const getInitialData = () => Promise.all([
    _getUsers(),
    _getQuestions(),
  ]).then(([users, questions]) => ({
    users,
    questions,
  }))

export const saveQuestion = (info) => _saveQuestion(info)
export const saveQuestionAnswer = (info) => _saveQuestionAnswer(info)
export const addNewUser = (info) => _addNewUser(info)
export const loginUser = (info) => _loginUser(info);