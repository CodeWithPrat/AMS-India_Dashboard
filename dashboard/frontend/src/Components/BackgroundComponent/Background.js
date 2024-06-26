import React, { useState, useRef } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { useSprings, a } from '@react-spring/three';
import './Backgroud.css'

const number = 65; // Number of boxes to render
const colors = ['#ffd6ff', '#e7c6ff', '#c8b6ff', '#b8c0ff', '#bbd0ff', '#c77dff']; // Array of colors to be used for the boxes

// Function to generate random properties for each box
const random = (i) => {
  const r = Math.random();
  const color = colors[i % colors.length];  // Cycle through colors array
  const x = Math.random() * window.innerWidth - window.innerWidth / 2;  // Random x position
  const y = Math.random() * window.innerHeight - window.innerHeight / 2;  // Random y position
  return {
    position: [x, y, i * 1.9],  // Position array
    color: color,  // Color
    scale: [1 + r * 5, 1 + r * 5, 1],  // Random scale values
    rotation: [0, 0, THREE.MathUtils.degToRad(Math.round(Math.random()) * 45)],  // Random rotation
  };
};

// Generate data for each box
const data = new Array(number).fill(null).map(() => {
  return {
    color: colors[Math.round(Math.random() * (colors.length - 1))],  // Random color
    args: [0.1 + Math.random() * 9, 0.1 + Math.random() * 9, 10],  // Random dimensions
  };
});

// Main content component, wrapped in React.memo for optimization
const Content = React.memo(() => {
  const [scattered, setScattered] = useState(false);  // State to toggle scattering
  const clock = useRef(new THREE.Clock());  // Clock to control timing
  const [springs, api] = useSprings(number, (i) => ({
    from: random(i),  // Initial state
    ...random(i),  // Target state
    config: { mass: 25, tension: 15, friction: 20 },  // Spring configuration
  }));

// Frame-by-frame animation loop
useFrame(() => {
  if (!scattered) {
    if (clock.current.getElapsedTime() > 2) {  // Check if 2 seconds have passed
      setScattered(true);  // Set scattered to true
      clock.current.start();  // Restart the clock
    }
  } else {
    api.start((i) => {
      const { color, ...rest } = random(i);  // Generate new properties
      return { ...rest, color, delay: i * 50 };  // Return new state with delay
    });
    if (clock.current.getElapsedTime() > 2) {  // Check if 2 seconds have passed
      setScattered(false);  // Set scattered to false
      clock.current.start();  // Restart the clock
    }
  }
});

  return (
    <>
      {data.map((d, index) => (
        <a.mesh key={index} {...springs[index]} castShadow receiveShadow>
        <boxGeometry args={d.args} />
        <a.meshStandardMaterial color={springs[index]?.color} roughness={0.75} metalness={0.5} />
      </a.mesh>
      
      ))}
    </>
  );
});


// Lighting setup for the scene
function Lights() {
  return (
    <group>
      <ambientLight intensity={7} />
      <pointLight intensity={0.4} />
      <spotLight
        castShadow
        intensity={0.2}
        angle={Math.PI / 7}
        position={[150, 150, 250]}
        penumbra={1}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
    </group>
  );
}

export default function BackgroundComponent() {
  return (
    <div className="body--bg">
      <Canvas
        style={{ height: '2100px'}}
        linear
        flat
        shadows
        camera={{ position: [0, 0, 100], fov: 100 }}
      >
        <Lights />
        <Content />
      </Canvas>
    </div>
  );
}
