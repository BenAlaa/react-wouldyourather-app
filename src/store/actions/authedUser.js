export const LOGIN_USER = 'LOGIN_USER'
export const LOGOUT_USER = 'LOGOUT_USER';

export const loginUser = (id) => ({
  type: LOGIN_USER,
  payload: {
    id
  },
})

export const logoutUser = () => ({
  type: LOGOUT_USER,
})