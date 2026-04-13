"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, ContactShadows } from "@react-three/drei";
import ModelHp from "./hodepHp";
import { Suspense } from "react";

export default function Asset3D() {
  return (
    <div className="w-full h-[600px] relative">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        {/* Lampu Lingkungan (Penting untuk Material HP supaya mengkilap) */}
        <ambientLight intensity={1} />
        <Environment preset="city" />

        {/* Kontrol 3D: Cuma bisa digeser manual pakai mouse, ngga otomatis muter sendiri lagi */}
        <OrbitControls enableZoom={false} />

        {/* Model HP yang kamu Export tadi (Ukuran sudah kubesarkan jadi 10) */}
        <Suspense fallback={null}>
          <ModelHp scale={10} position={[-0.7, -1, 2]} />
        </Suspense>

        {/* Bayangan di bawah HP */}
        {/* <ContactShadows
          position={[0, -1.5, 0]}
          opacity={0.5}
          scale={10}
          blur={2.5}
          far={4}
        /> */}
      </Canvas>
    </div>
  );
}
