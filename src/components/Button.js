import { classNames } from "../utils/helpers";
const Button = ({text, type, onClick}) => {
  return ( 
    <button
      type={type}
      onClick={onClick}
      className={classNames(
        "m-auto mb-4 mt-4 text-center p-2 px-8 rounded-full bg-indigo-500 text-white",
        "ring-2 ring-offset-2 ring-offset-sky-300 ring-yellow-300 ring-opacity-60",
        "transition ease-in-out duration-300",
        "transform hover:scale-105 hover:bg-yellow-500"
      )}
    >
      {text}
    </button>
   );
}
 
export default Button;