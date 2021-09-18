export const TOGGLE_MODE = 'TOGGLE_MODE';
export const INIT_MODE = 'INIT_MODE'

export const toggleMode = () => ({
  type: TOGGLE_MODE,
})

export const getInitialMode = () => ({
  type: INIT_MODE,
  payload: {
    mode: localStorage.getItem('mode') || 'light'
  }
})

