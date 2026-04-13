"use client";

import React, { useRef, useLayoutEffect } from "react";
import { useGLTF } from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Kita gunakan 'any' supaya TypeScript di project kamu tidak komplain
export default function Model(props: any) {
  // PASTIKAN file '16 pro.glb' ada di dalam folder 'public' project kamu
  const { nodes, materials } = useGLTF("/16-pro.glb") as any;
  // Tambah 'any' biar TS gak protes gara-gara referensi awalnya null
  const group = useRef<any>(null);

  useLayoutEffect(() => {
    if (!group.current) return;

    const ctx = gsap.context(() => {
      // 1. Kondisi Awal: Datang dari arah KANAN (x = 5 atau lebih)
      gsap.set(group.current.position, { x: 5, y: 0 });
      gsap.set(group.current.rotation, { x: 0, y: Math.PI, z: -0.1 }); // Menghadap belakang dulu & miring dikit

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: document.body, // Membaca pergerakan scroll seluruh body web
          start: "top top", // Mulai menghitung saat web paling atas
          end: "+=600", // Animasinya berjalan sepanjang 600 pixel scroll
          scrub: 1.5, // 1.5 detik kelembutan saat di-scroll (scrubbing)
        },
      });

      // 2. Animasi "Entrio": Meluncur ke kiri mengikuti SCROLL
      tl.to(
        group.current.position,
        {
          x: props.position ? props.position[0] : 0,
          y: props.position ? props.position[1] : 0,
          duration: 2.5,
          ease: "power3.out",
        },
        0,
      ).to(
        group.current.rotation,
        {
          x: -0.2, // 0 = tegak. Kalau diubah, dia bakal rebah (tengadah/menunduk)
          y: -0.2, // Minus = nengok agak serong ke kiri
          z: -0.2, // Positif = memiringkan (tilt) layar secara diagonal ala estetik
          duration: 2.5,
          ease: "power3.out",
        },
        0,
      );

      // Catatan: Efek melayang (Hovering) sudah dihapus secara total jadi dia 100% diam setelah ini.
    });

    return () => ctx.revert();
  }, [props.position]);

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.main_1?.geometry}
        material={materials.phone16pro}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.camera_1?.geometry}
        material={materials.phone16pro}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.glass_1?.geometry}
        material={materials.phone16pro_transparent}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.apple_1?.geometry}
        material={materials.phone16pro}
      />
    </group>
  );
}

useGLTF.preload("/16 pro.glb");
