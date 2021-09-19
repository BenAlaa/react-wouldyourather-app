import { BsQuestionCircle } from "react-icons/bs";


const QuestionHeader = () => {
  return (
    <div className="flex justify-start items-center space-x-4">
      <div className="h-8 w-8 flex items-center justify-center rounded-full bg-yellow-400 text-indigo-500">
        <BsQuestionCircle />
      </div>
      <div className="w-auto px-4 rounded-full border border-yellow-400 text-yellow-500 text-lg bg-yellow-100">
        Would You Rather ?
      </div>
    </div>
  );
};
 
export default QuestionHeader;