import React, { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Stadium from '../public/Stadium'; // Importez le composant Stadium correctement
import Ball from './ball';
import Question from './Question';

function App() {

  const startPosition = [9, 1.5, -15];
  const [ballPosition, setBallPosition] = useState(startPosition);
  const [message, setMessage] = useState(''); 
  

  const handleAnswer = (isCorrect) => {
    let newPosition;
    if (isCorrect) {
      newPosition = [ballPosition[0] + 31, ballPosition[1], ballPosition[2] + 3.5];
      setMessage('Félicitations!');
    } else {
      // Choix aléatoire de mouvement à gauche en cas de mauvaise réponse
      const randomMove = Math.floor(Math.random() * 3);
      setMessage('Perdu');
      switch (randomMove) {
        case 0:
          newPosition = [ballPosition[0] + 18, ballPosition[1], ballPosition[2]+ 3.5];
          break;
        case 1:
          newPosition = [ballPosition[0] + 12, ballPosition[1], ballPosition[2]+6];
          break;
        case 2:
          newPosition = [ballPosition[0] + 25, ballPosition[1], ballPosition[2]+4];
          break;
        default:
          newPosition = [...ballPosition];
      }
    }
    setBallPosition(newPosition);
  };

  
  

  return (
    <div className="container">
      <Canvas shadows camera={{ position: [-25, 40, 19], fov: 55 }}>
        {/* Ajoutez des lumières ou d'autres éléments de scène si nécessaire */}
        <ambientLight />
        <directionalLight position={[10, 10, 10]} />
        <OrbitControls />
        <Stadium />
        <Ball position={ballPosition} />

 
      </Canvas>
      <Question onAnswer={handleAnswer} />
      {message && <p>{message}</p>} {/* Afficher le message */}
    </div>
  );
}

export default App;
