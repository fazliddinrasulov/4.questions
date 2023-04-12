import { useState } from "react";
import "./App.css";
import Questions from "./Questions";
import data from "./data";

type Question = {
  id: number;
  title: string;
  info: string;
};

function App() {
  const [questions, setQuestions] = useState<Array<Question>>(data);
  return (
    <main>
      <Questions questions={questions} />
    </main>
  );
}

export default App;
