import { receiveQuestions,  } from './questions'
import { receiveUsers } from './users'
import { getInitialMode } from './ui';
import { getInitialData } from '../../utils/api';
import {loginUser} from './authedUser';
import {showLoading, hideLoading} from 'react-redux-loading';

const AUTHED_ID = "tylermcginnis";
export const handleInitialData = () => (dispatch) => {
  dispatch(showLoading());
  dispatch(getInitialMode())
  getInitialData().then (({questions, users}) => {
    dispatch(receiveQuestions(questions))
    dispatch(receiveUsers(users))
    dispatch(loginUser(AUTHED_ID));
    dispatch(hideLoading())
  })
}