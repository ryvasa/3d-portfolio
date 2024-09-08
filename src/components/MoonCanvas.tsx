import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, useGLTF } from '@react-three/drei';
import { useEffect } from 'react';

const MoonCanvas = ({ onLoad }: { onLoad: () => void }): JSX.Element => {
  const { scene } = useGLTF('./moon/scene.gltf');

  useEffect(() => {
    // panggil fungsi onload secara delay
    setTimeout(() => {
      onLoad(); // Panggil onLoad ketika model selesai dimuat
    }, 300);
  }, [onLoad]);

  return (
    <Canvas
      className="cursor-pointer"
      frameloop="demand"
      camera={{ position: [-4, 3, 6], fov: 75, near: 0.1, far: 200 }}
    >
      <directionalLight position={[5, 5, 5]} intensity={2} />
      <Stars
        radius={70}
        depth={10}
        count={1200}
        factor={3}
        saturation={0}
        fade
      />
      <primitive object={scene} scale={2.5} />
      <OrbitControls
        autoRotateSpeed={1}
        autoRotate
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        enablePan={false}
      />
    </Canvas>
  );
};

export default MoonCanvas;
