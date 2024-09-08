import { Stars } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

const StarsCanvas = (): JSX.Element => {
  return (
    <Canvas
      className="cursor-pointer"
      frameloop="demand"
      camera={{ position: [-4, 3, 6], fov: 75, near: 0.1, far: 200 }}
    >
      {/* Tambahkan lighting ke scene */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <Stars
        radius={70} // Radius dari area tempat bintang muncul
        depth={10} // Kedalaman area 3D di mana bintang-bintang berada
        count={1700} // Jumlah bintang yang ingin ditampilkan
        factor={4} // Ukuran bintang (lebih besar lebih besar bintangnya)
        saturation={0} // Saturasi warna bintang (0 untuk putih)
        fade // Membuat bintang fade in/out berdasarkan kamera
      />
    </Canvas>
  );
};

export default StarsCanvas;
