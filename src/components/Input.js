import Error from './Error';
import {classNames} from '../utils/helpers';
const Input = ({
  id,
  name,
  label,
  type,
  value,
  error,
  placeholder,
  onChange,
}) => {
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={id} className="text-sm text-gray-500">
          {label}
        </label>
      )}
      <input
        {...{
          id,
          name,
          type,
          value,
          placeholder,
        }}
        onChange={onChange}
        className={classNames(
          "rounded-lg w-full px-3 py-2 border-2 border-indigo-400 placeholder-gray-500 text-gray-900 ",
          "transition duration-300 ease-in-out",
          "hover:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-sky-300 focus:ring-yellow-300 ring-opacity-60 focus:z-10 sm:text-sm"
        )}
      />
      {error && (
        <Error error={error} />
      )}
    </div>
  );
};
 
export default Input;