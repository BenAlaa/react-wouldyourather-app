import {addNewUser} from '../../utils/api';
import {loginUser} from '../actions/authedUser';
import {showLoading, hideLoading} from 'react-redux-loading';


export const RECEIVE_USERS = 'RECEIVE_USERS'
export const ADD_USER = 'ADD_USER'

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    payload: {
      users
    },
  }
}


export function addUser(user) {
  return {
    type: ADD_USER,
    payload: {
      user
    },
  }
}

export const handleAddUser = (user) => (dispatch, getState) => {
  dispatch(showLoading());
  return(addNewUser(user))
    .then(user => dispatch(addUser(user)))
    .then(() => dispatch(loginUser(user.id)))
    .then(() => dispatch(hideLoading()))
    .catch( (error) => console.log(error))
}