/* eslint-disable import/no-anonymous-default-export */
import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux'


export default ({component: Component, ...rest}) => {
  const authedUser = useSelector(state => state.authedUser);
  return (
    <Route
      {...rest}
      render={(props) =>
        authedUser ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  )
}
