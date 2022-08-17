import { useState } from 'react';

export default function useQuestions() {
  const [questions, setQuestions] = useState([]);
  const parseQuestions = (data) => {
    const newQuestions = data.map((question) => {
      let answers = [...question.incorrectAnswers];
      answers.splice(Math.floor(Math.random() * 4), 0, question.correctAnswer);
      return { ...question, answers };
    });
    setQuestions(newQuestions);
  };
  return { questions, parseQuestions };
}
