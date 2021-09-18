import {createStore} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers';
import middleware from './middleware';

export default function configureStore() {
  return createStore(
    reducers,
    composeWithDevTools(
      middleware
    )
  )
}