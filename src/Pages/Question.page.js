import { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import AnsweredQuestion from "../components/AnswerdQuestion";
import UnansweredQuestion from "../components/UnansweredQuestion";
import PageWrapper from "../components/PageWrapper";
import QuestionAuthor from "../components/QuestionAuthor";

const Question = (props) => {
  const { id } = useParams();
  const history = useHistory();
  const { questions, users, authedUser } = useSelector(
    ({ questions, authedUser, users }) => ({ questions, authedUser, users })
  );
  const question = questions[id];
  const user = users[authedUser];
  useEffect(() => {
    document.title = 'iVote | Question Details'
  })
  if (!question) history.push("/not-found");

  const isAnswered = user?.answers[question.id] ? true : false;

  if (question)
    return (
      <PageWrapper>
        <QuestionAuthor {...{ user: users[question?.author], question }} />
        <div className="w-full p-4">
          {isAnswered ? (
            <AnsweredQuestion {...{ question, authedUser }} />
          ) : (
            <UnansweredQuestion {...{ question, authedUser }} />
          )}
        </div>
      </PageWrapper>
    );
  else return null;
};


export default Question;
