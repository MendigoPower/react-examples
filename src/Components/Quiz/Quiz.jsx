import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useQuiz from './hooks/useQuiz';
import { questionsData } from './questions';

export default function Quiz() {
  const [userAnswer, setUserAnswer] = useState(undefined);
  //   const [data, setData] = useState(questionsData);
  const { currentIndex, score, handleSubmit, questions, initQuiz } = useQuiz();
  // useEffect(() => initQuiz(questionsData), []);
  useEffect(() => {
    axios
      .get('https://the-trivia-api.com/api/questions')
      .then((res) => initQuiz(res.data));
  }, []);
  const question = questions[currentIndex];
  console.log('question', question);

  return (
    <div>
      <h1>Quiz</h1>
      <h2>
        Score : {score} / {currentIndex}
      </h2>
      {question && (
        <>
          <h2>
            Question {currentIndex + 1}: {question.question}
          </h2>
          <div
            onChange={(e) => {
              console.log('userAnswer', e.target.value);
              setUserAnswer(e.target.value);
            }}>
            {question.answers.map((answer, index) => (
              <div key={index}>
                <input type='radio' name='answer' value={answer} />
                <label htmlFor=''>{answer}</label>
              </div>
            ))}

            <button onClick={() => handleSubmit(userAnswer, question)}>
              Submit answer!
            </button>
          </div>
        </>
      )}
    </div>
  );
}
