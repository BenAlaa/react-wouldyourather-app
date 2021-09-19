import { useEffect } from 'react';
import {GiLaurelsTrophy, GiStarsStack} from'react-icons/gi';
import {useSelector} from 'react-redux';
import PageWrapper from "../components/PageWrapper";
import BoardMember from '../components/BoardMember';
import {calculateScore} from '../utils/helpers';
const Leaderboard = (props) => {
  const users = useSelector(({users}) => users);
  const sortedUsers = Object.keys(users).map(key => calculateScore(users[key])).sort((a, b) => b.score - a.score)
  useEffect(() => {
    document.title = 'iVote | Leader Board'
  })

  return (
    <PageWrapper>
      <div className="relative flex flex-col items-center justify-center mt-6 md:mt-10 p-4 pt-12 md:pt-20 border-2 border-yellow-500 rounded-xl md:rounded-3xl">
        <GiLaurelsTrophy className="absolute p-1 text-7xl -top-9 md:-top-16 md:text-9xl text-yellow-500 border-2 border-yellow-500 rounded-full md:p-3 bg-yellow-200" />
        <div className="w-full mb-10 flex justify-center items-center p-2 text-white text-xl font-semibold rounded-xl bg-indigo-500">
          <GiStarsStack className="text-2xl text-yellow-400"/>
          <div className="mr-2 ml-2">Leader Board</div>
          <GiStarsStack className="text-2xl text-yellow-400"/>
        </div>
        {sortedUsers?.map((user, index) => (
          <BoardMember
            member={user}
            isFirst = {index === 0}
            isSecond = {index === 1}
            isThird = {index === 2}
            key={index}
          />
        ))}
      </div>
    </PageWrapper>
  );
}
 
export default Leaderboard;