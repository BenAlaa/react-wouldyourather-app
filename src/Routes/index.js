import { Suspense, lazy, Fragment } from "react";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import { useSelector } from 'react-redux';
import LoadingBar from 'react-redux-loading';
import Spinner from "../components/Spinner/Spinner";
import Navbar from '../components/Navbar';
import AddBtn from '../components/AddQuestionBtn';
import PrivateRoute from './privateRoute';


const Login = lazy(() => import("../Pages/Login.page"));
const Dashboard = lazy(() => import("../Pages/Dashboard.page"));
const Leaderboard = lazy(() => import("../Pages/Leaderboard.page"));
const NewQuestion = lazy(() => import("../Pages/NewQuestion.page"));
const Question = lazy(() => import("../Pages/Question.page"));
const NotFound = lazy(() => import("../Pages/NotFound.page"));
const Routes = (props) => {
  const user = useSelector(state => state.authedUser);
  return (
  <BrowserRouter>
    <LoadingBar />
    {user && <Navbar />}
    <Fragment>
      <Suspense
        fallback={
          <div className="spinner-container">
            <Spinner type="Oval" color="#8B5CF6" height={100} width={100} />
          </div>
        }
      >
        <Switch>
          <Route exact path="/login" component={() => <Login {...props} />} />
          <PrivateRoute exact path="/dashboard" component={() => <Dashboard {...props} />} />
          <PrivateRoute exact path="/leaderboard" component={() => <Leaderboard {...props} />} />
          <PrivateRoute exact path="/add" component={() => <NewQuestion {...props} />} />
          <PrivateRoute exact path="/question/:id" component={() => <Question {...props} />} />
          {/* <Route exact path="/dashboard" component={() => <Dashboard {...props} />} /> */}
          {/* <Route exact path="/leaderboard" component={() => <Leaderboard {...props} />} /> */}
          {/* <Route exact path="/add" component={() => <NewQuestion {...props} />} /> */}
          {/* <Route exact path="/question/:id" component={() => <Question {...props} />} /> */}
          <Redirect from="/" exact to="/dashboard" />
          <Route path="/not-found" component={() => <NotFound />} />
          <Redirect from="*" to="/not-found" />
        </Switch>
      </Suspense>
    </Fragment>
    {user && <AddBtn />}
  </BrowserRouter>
)}

export default Routes;