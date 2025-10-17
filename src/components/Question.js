import React, { useState, useEffect } from "react";

function Question({ question, onAnswered }) {
  const [timeRemaining, setTimeRemaining] = useState(10);

  useEffect(() => {
    if (timeRemaining === 0) {
      onAnswered(false);
      setTimeRemaining(10);
      return;
    }

    const timerId = setTimeout(() => {
      setTimeRemaining(timeRemaining - 1);
    }, 1000);

    return () => clearTimeout(timerId);
  }, [timeRemaining, onAnswered]);

  return (
    <div>
      <h2>{question.question}</h2>
      {/* Render timer in this exact format for tests to match */}
      <p>{timeRemaining} seconds remaining</p>
      <ul>
        {question.answers.map((answer, idx) => (
          <li key={idx}>
            <button onClick={() => onAnswered(answer.correct)}>
              {answer.text}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Question;
