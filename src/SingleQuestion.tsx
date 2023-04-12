import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
type Question = {
  id: number;
  title: string;
  info: string;
};

type Props = {
  question: Question;
};

const SingleQuestion = ({ question }: Props) => {
  const { title, info } = question;
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showInfo && <p>{info}</p>}
    </article>
  );
};

export default SingleQuestion;
