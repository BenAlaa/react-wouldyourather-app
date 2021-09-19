const ProgressCircle = ({percent, count, total, label}) => {
  const circumference = 30 * 2 * Math.PI;
  return (
    <div className="inline-flex items-center justify-center overflow-hidden rounded-full">
      <svg className="w-20 h-20">
      <circle
          className="text-gray-300"
          strokeWidth="5"
          stroke="currentColor"
          fill="transparent"
          r="30"
          cx="40"
          cy="40"
        />
        <circle
          className="text-indigo-600"
          strokeWidth="5"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - percent / 100 * circumference}
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r="30"
          cx="40"
          cy="40"
        />
      </svg>
      <span className="absolute text-md text-indigo-700">{`${percent}%`}</span>
      <span className="absolute text-xs text-indigo-400 mt-7">{`${count}/${total}`}</span>
    </div>
  )
}
 
export default ProgressCircle;