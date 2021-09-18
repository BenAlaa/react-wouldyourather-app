export const LOGIN_USER = 'LOGIN_USER'
export const LOGOUT_USER = 'LOGOUT_USER';
export const REGISTER_USER = 'REGISTER_USER';

export const registerUser = (user) => ({
  type: LOGIN_USER,
  payload: {
    user
  },
})

export const loginUser = (id) => ({
  type: LOGIN_USER,
  payload: {
    id
  },
})

export const logoutUser = () => ({
  type: LOGOUT_USER,
})