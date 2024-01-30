import React, { useState } from 'react';

function Question({ onAnswer }) {
  const [answer, setAnswer] = useState('');
  const [hasAnswered, setHasAnswered] = useState(false); // Pour suivre si l'utilisateur a déjà répondu
  const correctAnswer = 4;

  const handleInputChange = (e) => {
    setAnswer(e.target.value);
  };

  const checkAnswer = () => {
    if (hasAnswered) {
      return; // Empêche de répondre à nouveau
    }

    const isCorrect = parseInt(answer) === correctAnswer;
    onAnswer(isCorrect);
    setHasAnswered(true); // Marque que l'utilisateur a répondu
  };

  return (
    <div className="question-container">
      <p>Combien font 2 + 2 ?</p>
      <input type="text" value={answer} onChange={handleInputChange} disabled={hasAnswered} />
      <button onClick={checkAnswer} disabled={hasAnswered}>Vérifier</button>
    </div>
  );
}

export default Question;
