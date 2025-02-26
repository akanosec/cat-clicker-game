import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useGameStore } from '../store/gameStore'; // Import the game store

const SpaceBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isSpinning = useGameStore((state) => state.isSpinning); // Use existing isSpinning state
  const speedRef = useRef(0.001);
  const startTimeRef = useRef<number | null>(null);
  const lastSpinningTimeRef = useRef<number | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000);
    const renderer = new THREE.WebGLRenderer();
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);
    camera.position.z = 1000;

    // Create star field
    const geometry = new THREE.BufferGeometry();
    const vertices = [];

    for (let i = 0; i < 5000; i++) {
      vertices.push(
        THREE.MathUtils.randFloatSpread(2000),
        THREE.MathUtils.randFloatSpread(2000),
        THREE.MathUtils.randFloatSpread(2000)
      );
    }

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    const stars = new THREE.Points(
      geometry,
      new THREE.PointsMaterial({ size: 3, color: 0xffffff })
    );
    scene.add(stars);

    const animate = (time: number) => {
      requestAnimationFrame(animate);

      const minSpeed = 0.00001;
      const maxSpeed = 0.002;
      const spinDuration = 2000; // 2 seconds in milliseconds

      if (isSpinning) {
        lastSpinningTimeRef.current = time;
      }

      // Check if we're within the 2-second window of spinning
      const isWithinSpinWindow = lastSpinningTimeRef.current && 
        (time - lastSpinningTimeRef.current) <= spinDuration;

      if (isWithinSpinWindow) {
        if (startTimeRef.current === null) {
          startTimeRef.current = time;
        }
        const elapsedTime = (time - startTimeRef.current) / 1000; // Convert to seconds
        const duration = 5; // 5 seconds

        // Calculate the current speed based on elapsed time
        if (elapsedTime < duration) {
          speedRef.current = minSpeed + (maxSpeed - minSpeed) * (elapsedTime / duration);
        } else {
          speedRef.current = maxSpeed; // Maintain max speed after 5 seconds
        }
      } else {
        speedRef.current = minSpeed; // Reset to minimum speed
        startTimeRef.current = null;  
      }

      // Use speedRef.current directly for rotation
      stars.rotation.y += speedRef.current;

      renderer.render(scene, camera);
    };

    animate(0);

    return () => {
      renderer.dispose();
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, [isSpinning]);

  return (
    <div ref={containerRef} style={{ 
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: -1,
      background: '#000008'
    }} />
  );
};

export default SpaceBackground;
