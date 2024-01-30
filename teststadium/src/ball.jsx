import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function Ball({ position }) {
  const ballRef = useRef();
  const targetPosition = useRef([0, 0, 0]);

  const geometry = new THREE.SphereGeometry(1, 32, 32);
  const material = new THREE.MeshPhongMaterial({ color: 'red' });

  useEffect(() => {
    // Mise à jour de la position cible
    targetPosition.current = position;
  }, [position]);

  useFrame(() => {
    if (ballRef.current) {
      ballRef.current.rotation.x += 0.09;
      ballRef.current.rotation.y += 0.01;

      // Déplacer la balle plus rapidement vers la position cible
      ballRef.current.position.x += (targetPosition.current[0] - ballRef.current.position.x) * 0.1; // Augmentez ce facteur pour plus de vitesse
      ballRef.current.position.y += (targetPosition.current[1] - ballRef.current.position.y) * 0.1; // Augmentez ce facteur pour plus de vitesse
      ballRef.current.position.z += (targetPosition.current[2] - ballRef.current.position.z) * 0.1; // Augmentez ce facteur pour plus de vitesse
    }
  });

  return <mesh ref={ballRef} geometry={geometry} material={material} />;
}

export default Ball;
