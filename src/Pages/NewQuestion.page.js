import { useState, useEffect } from "react";
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {toast} from 'react-toastify';
import { HiViewGridAdd } from "react-icons/hi";
import {
  BiMessageAdd,
} from "react-icons/bi";
import {handleAddQuestion} from '../Store/actions/questions';
import QuestionHeader from "../components/QuestionHeader";
import Input from "../components/Input";
import PageWrapper from "../components/PageWrapper";
import { classNames } from "../utils/helpers";

const NewQuestion = (props) => {
  const [data, setData] = useState({
    optionOne: "",
    optionTwo: "",
  });
  const [errors, setErrors] = useState({
    optionOne: "",
    optionTwo: "",
  });
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    document.title = 'iVote | Add Question'
  })
  const handleChange = (event) => {
    const { name, value } = event.target;
    setErrors({...errors, [name]: ''})
    const updatedData = {...data};
    updatedData[name] = value;
    setData(updatedData)
  };
  const validateData = () => {
    const updateErrors = {...errors}
    if(!data.optionOne) updateErrors.optionOne = "Option One not allowed to be empty!"
    if(!data.optionTwo) updateErrors.optionTwo = "Option Two not allowed to be empty!"
    setErrors(updateErrors);
    return updateErrors.optionOne === '' && updateErrors.optionTwo === '';
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateData();
    if(isValid) {
      dispatch(
        handleAddQuestion({
          ...data
        })
      )
      toast.success('New Question added Successfully')
      history.push('/')
    }
  };
  return (
    <PageWrapper>
      <div className="w-full flex flex-col items-center justify-center p-4 md:max-w-2xl border border-indigo-400 rounded-xl">
        <div className="w-full rounded p-2 mb-8 bg-indigo-500 text-white flex items-center justify-center">
          <HiViewGridAdd className="rounded bg-indigo-100 border-2 border-indigo-700 text-yellow-600 text-2xl" />
          <h2 className="ml-4 font-semibold text-center rounded-lg">
            Add New Question
          </h2>
        </div>
        <div>
          <QuestionHeader />
        </div>
        <hr className="m-2 w-full" />
        <form className="w-full flex flex-col">
          <Input
            id="optionOne"
            name="optionOne"
            label="* Option One"
            placeholder="Please add option one"
            error={errors["optionOne"]}
            value={data["optionOne"]}
            onChange={handleChange}
          />
          <span className="m-auto mt-4 bg-yellow-400 text-center text-white text-md w-8 rounded-md">
            OR
          </span>
          <Input
            id="optionTwo"
            name="optionTwo"
            label="* Option Two"
            placeholder="Please add option two"
            error={errors["optionTwo"]}
            value={data["optionTwo"]}
            onChange={handleChange}
          />
          <hr className="m-4" />
          <button
            type="submit"
            onClick={handleSubmit}
            className={classNames(
              "m-auto mb-4 mt-4 text-center p-2 px-8 rounded-full bg-indigo-500 text-white",
              "ring-2 ring-offset-2 ring-offset-sky-300 ring-yellow-300 ring-opacity-60",
              "transition ease-in-out duration-300",
              "transform hover:scale-105 hover:bg-yellow-500"
            )}
          >
            Add
            <BiMessageAdd className="inline ml-4" />
          </button>
        </form>
      </div>
    </PageWrapper>
  );
};

export default NewQuestion;
