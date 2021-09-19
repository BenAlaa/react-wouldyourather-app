import {GiLaurelsTrophy, GiStarsStack} from'react-icons/gi';
import {useSelector} from 'react-redux';
import PageWrapper from "../components/PageWrapper";
import {calculateScore} from '../utils/helpers';
const Leaderboard = (props) => {
  const users = useSelector(({users}) => users);

  const sortedUsers = Object.keys(users).map(key => calculateScore(users[key])).sort((a, b) => b.score - a.score)
  console.log({sortedUsers})
  return (
    <PageWrapper>
      <div className="relative flex justify-center mt-10 p-4 pt-20 border-2 border-yellow-500 rounded-3xl">
        <GiLaurelsTrophy className="absolute -top-16 text-9xl text-yellow-500 border-2 border-yellow-500 rounded-full p-3 bg-yellow-200" />
        <div className="w-full mb-10 flex justify-center items-center p-2 text-white text-xl font-semibold rounded-xl bg-indigo-500">
          <GiStarsStack className="text-2xl text-yellow-400"/>
          <div className="mr-2 ml-2">Leader Board</div>
          <GiStarsStack className="text-2xl text-yellow-400"/>
        </div>
      </div>
    </PageWrapper>
  );
}
 
export default Leaderboard;