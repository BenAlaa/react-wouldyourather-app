const Error = ({ error }) => {
  return (
    <div className="w-full p-1 mb-4 mt-2 text-center rounded-lg text-xs bg-red-100 border border-red-500 text-red-500">
      {error}
    </div>
  );
};
 
export default Error;