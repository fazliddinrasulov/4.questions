import SingleQuestion from "./SingleQuestion";

type Question = {
  id: number;
  title: string;
  info: string;
};
type Props = {
  questions: Question[];
  setQuestions: React.Dispatch<React.SetStateAction<Question[]>>;
};

const Questions = ({ questions }: Props) => {
  return (
    <section className="container">
      <h1 style={{ textAlign: "center" }}>Questions</h1>
      <div>
        {questions.map((question) => {
          return <SingleQuestion key={question.id} question={question} />;
        })}
      </div>
    </section>
  );
};

export default Questions;
