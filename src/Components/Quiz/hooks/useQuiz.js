import { useState } from 'react';
import useQuestions from './useQuestions';

export default function useQuiz() {
  const { questions, parseQuestions } = useQuestions([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [score, setScore] = useState(0);

  const initQuiz = (data) => {
    console.log('data init', data);
    parseQuestions(data);
  };

  const resetQuiz = () => {
    setCurrentIndex(0);
    setScore(0);
  };
  const handleSubmit = (userAnswer, question) => {
    console.log(userAnswer);
    // if user answer === question correct answer
    if (userAnswer === question.correctAnswer) {
      //update score
      setScore((prevState) => prevState + 1);
    }
    // go next question
    const nextIndex = (currentIndex + 1) % questions.length;
    if (nextIndex === 0) {
      resetQuiz();
    } else {
      setCurrentIndex((prevState) => (prevState + 1) % questions.length);
    }
  };

  return {
    handleSubmit,
    score,
    currentIndex,
    questions,
    initQuiz,
  };
}
