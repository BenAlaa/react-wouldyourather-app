import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import { ToastContainer } from "react-toastify";
import Routes from "../Routes";
import {handleInitialData} from '../Store/actions/shared';

function App(props) {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(handleInitialData())
  }, [dispatch])
  return (
    <div className="App">
      <Routes />
      <ToastContainer theme="dark" />
    </div>
  );
}

export default App;
