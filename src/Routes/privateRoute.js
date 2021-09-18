/* eslint-disable import/no-anonymous-default-export */
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux'


export default ({component: Component, isAuthorized}) => {
  const authedUser = useSelector(state => state.authedUser);
  const PrivateRoute = () => {
    if(authedUser) return <Component />
    return <Redirect to="/login"/>
  }
  return PrivateRoute;
}
