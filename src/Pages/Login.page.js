import { useState } from "react";
import {classNames} from '../utils/helpers';
import LoginForm from '../components/LoginForm';
import RegisterFrom from '../components/RegisterForm';
import Logo from '../assets/logo.png';


const Login = (props) => {
  const [form, setForm] = useState('signin');
  const handleChange = (value) => setForm(value);

  return (
    <div className="w-full flex justify-center min-h-screen">

      <div className="flex flex-col w-full lg:w-1/2 p-4">
        <div className="flex justify-center items-center space-x-4 md:space-x-8 mt-2 md:mt-10 p-4 rounded-xl border-2 border-yellow-500 md:bg-yellow-100 shadow-lg">
          <img src={Logo} className="w-12 h-12 md:w-16 md:h-16" alt="logo" />
          <div className="text-indigo-700 text-3xl md:text-4xl">iVote</div>
        </div>
        <div className="flex flex-wrap justify-between items-center h-auto p-2 px-4 m-auto mt-4 md:mt-10 w-full md:w-3/4 lg:w-1/2">
          <div 
            className={classNames(
              "w-1/3 md:w-1/4 cursor-pointer p-3 text-center border-2 rounded-tl-3xl border-indigo-500 font-semibold shadow-xl",
              "transition duration-300 ease-in-out hover:bg-yellow-500 hover:border-yellow-500 hover:text-white",
              form === 'signin' 
              ? 'bg-indigo-500 text-white'
              : 'text-indigo-600'
            )}
            onClick={() => handleChange('signin')}
          >Sign In</div>
          <div
            className={classNames(
              "w-1/3 md:w-1/4 cursor-pointer p-3 text-center border-2 rounded-tr-3xl border-indigo-500 font-semibold shadow-xl",
              "transition duration-300 ease-in-out hover:bg-yellow-500 hover:border-yellow-500 hover:text-white",
              form === 'signup' 
              ? 'bg-indigo-500 text-white'
              : 'text-indigo-600'
            )}
            onClick={() => handleChange('signup')}
          >Sign Up</div>
          <div className="flex flex-col w-full p-2 border border-indigo-500 shadow-xl rounded-b-xl">
            {form === 'signin' ? <LoginForm /> : <RegisterFrom />}
          </div>
        </div>
      </div>

      <div 
        className="hidden lg:w-1/2 lg:flex justify-center items-center bg-indigo-600"
      >
        <img src={Logo} alt="logo" className="w-80"/>
      </div>
    </div>
  );
}

export default Login;