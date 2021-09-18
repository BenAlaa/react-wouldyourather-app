import { TOGGLE_MODE, INIT_MODE } from '../actions/ui'

export default function ui(state = {}, action) {
  switch (action.type) {
    case TOGGLE_MODE:
      const newMode = state.mode === 'light'? 'dark': 'light';
      localStorage.setItem('mode', newMode);
      return {
        ...state,
        mode: newMode
      }
    case INIT_MODE:
      const {mode} = action.payload;
      localStorage.setItem('mode', mode);
      return {
        ...state,
        mode
      }
    default:
      return state
  }
}