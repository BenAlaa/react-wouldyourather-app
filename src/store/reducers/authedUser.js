import { LOGIN_USER, LOGOUT_USER } from '../actions/authedUser'

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = null, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return action.payload.id
    
    case LOGOUT_USER:
      return null;
    
    default:
      return state;
  }
}