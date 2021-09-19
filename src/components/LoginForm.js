import { useState } from 'react';
import {useHistory} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import {loginUser as loginAction} from '../Store/actions/authedUser';
import {loginUser} from '../utils/api';
import Input from './Input';
import Button from './Button';
import Error from './Error';


const Login = (props) => {
  const [data, setData] = useState({
    email: '',
    password: ''
  })
  const [errors, setErrors] = useState({
    email: '',
    password: '',
    global: ''
  })
  const dispatch = useDispatch();
  const history = useHistory();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setErrors({...errors, [name]: '', global: ''})
    const updatedData = {...data};
    updatedData[name] = value;
    setData(updatedData)
  };
  const validateData = () => {
    const updateErrors = {...errors}
    if(!data.email) updateErrors.email = "Email not allowed to be empty!"
    if(!data.password) updateErrors.password = "Password Two not allowed to be empty!"
    setErrors(updateErrors);
    return updateErrors.email === '' && updateErrors.password === '';
  }

  const handleLogin = async () => {
    try {
      const res = await loginUser({...data})
      dispatch(loginAction(res))
      toast.success('You Logged in Successfully')
      history.push('/')
    } catch (error) {
      setErrors({...errors, global: error.message})
      toast.error(error.message)
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateData();
    if(isValid) handleLogin()
  }

  return ( 
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-full p-2 rounded-lg text-white text-center m-4 font-semibold text-xl shadow-lg bg-yellow-500">Login</div>
      <form className="w-full flex flex-col" onSubmit={handleSubmit}>
        <Input
          id="email"
          name="email"
          label="Email"
          error={errors.email}
          placeholder="Please Enter your Email"
          type="email"
          value={data.email}
          onChange={handleChange}
        />
        <Input
          id="password"
          name="password"
          label="Password"
          error={errors.password}
          placeholder="Please Enter your password"
          type="password"
          value={data.paswword}
          onChange={handleChange}
        />
        <hr className=" m-4"/>
        {errors.global && <Error error={errors.global}/>}
        <Button onClick={handleSubmit} text="Login" type="submit" />
      </form>
    </div>
   );
}
 
export default Login;