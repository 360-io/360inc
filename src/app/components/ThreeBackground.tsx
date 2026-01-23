import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useTexture, PerspectiveCamera, Environment } from "@react-three/drei";
import React, { useRef, useMemo, useState } from "react";
import * as THREE from "three";

function FloatingImage({ position, url, speed = 2 }: { position: [number, number, number], url: string, speed?: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const texture = useTexture(url);
  const [startZ] = useState(position[2]);

  useFrame((state, delta) => {
    if (!meshRef.current) return;

    // Move towards camera (+z)
    meshRef.current.position.z += speed * delta * 3; // Intermediate multiplier

    // Reset loop
    if (meshRef.current.position.z > 10) {
      meshRef.current.position.z = -50; // Reset far back
      // Randomize XY slightly on reset for variety
      meshRef.current.position.x = (Math.random() - 0.5) * 30;
      meshRef.current.position.y = (Math.random() - 0.5) * 30;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <planeGeometry args={[6, 6]} />
      <meshBasicMaterial
        map={texture}
        transparent
        opacity={0.8}
        side={THREE.DoubleSide}
        depthWrite={false} // Prevent z-fighting transparency issues
      />
    </mesh>
  );
}

function Scene() {
  const imageUrls = [
    "/backgrounds/insta_post_1_1768753814980.png",
    "/backgrounds/insta_post_2_1768753831383.png",
    "/backgrounds/insta_post_3_1768753848844.png",
  ];

  // Generate random initial positions
  const images = useMemo(() => {
    const count = 20; // Increased count for better fill
    const items = [];
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 35; // Slightly wider spread
      const y = (Math.random() - 0.5) * 35;
      const z = -Math.random() * 80; // Deeper field
      const url = imageUrls[Math.floor(Math.random() * imageUrls.length)]; // Random image
      // Intermediate speed: random between 0.2 and 0.7
      const speed = Math.random() * 0.5 + 0.2;
      items.push({ position: [x, y, z] as [number, number, number], url, speed });
    }
    return items;
  }, []);

  return (
    <>
      <color attach="background" args={['#000000']} />
      <fog attach="fog" args={['#000000', 5, 40]} />
      {images.map((img: { position: [number, number, number], url: string, speed: number }, index: number) => (
        <FloatingImage
          key={index}
          position={img.position}
          url={img.url}
          speed={img.speed}
        />
      ))}
    </>
  );
}

export function ThreeBackground({ className }: { className?: string }) {
  return (
    <div className={className || "fixed inset-0 -z-10 bg-black"}>
      <Canvas gl={{ antialias: true, alpha: false }}>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={75} />
        <React.Suspense fallback={null}>
          <Scene />
        </React.Suspense>
      </Canvas>
    </div>
  );
}