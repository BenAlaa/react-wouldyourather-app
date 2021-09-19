const QuestionAuthor = ({ user, question }) => {
  return (
    <div className="w-auto flex justify-center items-center space-x-4 mb-8 p-2 border-2 border-yellow-200 bg-yellow-100 rounded-md shadow-sm">
      <img
        src={user?.avatarURL}
        className="h-32 w-32 rounded-full border-4 border-indigo-400 shadow-xl"
        alt="author avatar"
      />
      <div>
        <div className="text-lg font-bold p-1 px-4 text-center text-white mt-1 mb-1 rounded-full bg-yellow-400">
          {user?.name}
        </div>
        <div className="text-xs p-1 px-1 text-center rounded-full text-indigo-400 bg-indigo-100 border border-indigo-400">
          {new Date(question?.timestamp).toLocaleString()}
        </div>
      </div>
    </div>
  );
};
 
export default QuestionAuthor;