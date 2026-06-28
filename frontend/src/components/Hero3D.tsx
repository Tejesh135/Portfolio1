"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, Line, Sphere, Sparkles } from "@react-three/drei";
import * as THREE from "three";

function NeuralNetwork() {
  const group = useRef<THREE.Group>(null);
  const { mouse } = useThree();

  // Create random nodes
  const nodes = useMemo(() => {
    const points = [];
    for (let i = 0; i < 50; i++) {
      points.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 10
        )
      );
    }
    return points;
  }, []);

  // Create connections between close nodes
  const lines = useMemo(() => {
    const connections = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const distance = nodes[i].distanceTo(nodes[j]);
        if (distance < 3) {
          connections.push([nodes[i], nodes[j]]);
        }
      }
    }
    return connections;
  }, [nodes]);

  useFrame((state) => {
    if (group.current) {
      // Gentle rotation
      group.current.rotation.y += 0.001;
      group.current.rotation.x += 0.0005;
      
      // Mouse parallax
      group.current.position.x = THREE.MathUtils.lerp(group.current.position.x, mouse.x * 2, 0.05);
      group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, mouse.y * 2, 0.05);
    }
  });

  return (
    <group ref={group}>
      {/* Nodes */}
      {nodes.map((pos, i) => (
        <Sphere key={`node-${i}`} position={pos} args={[0.05, 8, 8]}>
          <meshBasicMaterial color="#3b82f6" transparent opacity={0.6} />
        </Sphere>
      ))}
      
      {/* Connections */}
      {lines.map((line, i) => (
        <Line 
          key={`line-${i}`} 
          points={line as any} 
          color="#3b82f6" 
          lineWidth={1} 
          transparent 
          opacity={0.15} 
        />
      ))}
    </group>
  );
}

export function Hero3D() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
        <fog attach="fog" args={['#000', 5, 15]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#3b82f6" />
        
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
          <NeuralNetwork />
        </Float>
        
        <Sparkles count={200} scale={12} size={1} speed={0.4} opacity={0.2} color="#fff" />
      </Canvas>
    </div>
  );
}
