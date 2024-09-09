import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, useGLTF } from '@react-three/drei';
import { useEffect } from 'react';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import * as THREE from 'three';

const MoonCanvas = ({ onLoad }: { onLoad: () => void }): JSX.Element => {
  const { scene } = useGLTF('./moon/scene.gltf');

  useEffect(() => {
    // panggil fungsi onload secara delay
    setTimeout(() => {
      onLoad(); // Panggil onLoad ketika model selesai dimuat
    }, 300);

    scene.traverse((object) => {
      if (object instanceof THREE.Mesh) {
        const material = object.material as THREE.MeshStandardMaterial;
        material.emissive = new THREE.Color(0xaaaaaa); // Warna cahaya bulan
        material.emissiveIntensity = 2.0; // Intensitas cahaya bulan
        material.emissiveMap = material.map; // Menggunakan tekstur asli sebagai peta emissive
      }
    });
  }, [onLoad, scene]);

  return (
    <Canvas
      className="cursor-pointer"
      frameloop="demand"
      camera={{ position: [-4, 3, 6], fov: 75, near: 0.1, far: 200 }}
    >
      {/* Pencahayaan bulan */}
      <directionalLight
        position={[-5, 5, 5]} // Posisikan cahaya agar mengenai sebagian bulan
        intensity={3} // Sesuaikan intensitas cahaya
        castShadow
      />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
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
        enableRotate={false} // Nonaktifkan rotasi jika perlu
      />
      {/* Tambahkan Bloom Effect di sini */}
      <EffectComposer>
        <Bloom
          luminanceThreshold={0}
          luminanceSmoothing={0.9}
          intensity={1.0}
        />
      </EffectComposer>
    </Canvas>
  );
};

export default MoonCanvas;
