import { combineReducers } from 'redux'
import {loadingBarReducer} from 'react-redux-loading';
import authedUser from './authedUser';
import questions from './questions';
import users from './users';
import ui from './ui';


export default combineReducers ({
    authedUser, 
    questions, 
    users,
    ui,
    loadingBar: loadingBarReducer
})