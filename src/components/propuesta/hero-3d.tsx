"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Text3D, Center, Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

// Componente 3D — Esfera orgánica que respira
function OrganicSphere() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.1;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.15;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef} scale={1.8}>
        <icosahedronGeometry args={[1, 4]} />
        <MeshDistortMaterial
          color="#4a64eb"
          emissive="#1a1a4a"
          emissiveIntensity={0.4}
          distort={0.3}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
}

// Grid de puntos que reacciona al scroll
function FloatingGrid() {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
    }
  });

  const points = [];
  for (let i = 0; i < 50; i++) {
    const x = (Math.random() - 0.5) * 20;
    const y = (Math.random() - 0.5) * 20;
    const z = (Math.random() - 0.5) * 10;
    points.push(<Sphere key={i} position={[x, y, z]} size={Math.random() * 0.03 + 0.01} />);
  }

  return (
    <group ref={groupRef}>
      {points}
    </group>
  );
}

function Sphere({ position, size }: { position: [number, number, number]; size: number }) {
  const ref = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (ref.current) {
      ref.current.position.y += Math.sin(state.clock.getElapsedTime() * 2 + position[0]) * 0.001;
    }
  });

  return (
    <mesh ref={ref} position={position}>
      <sphereGeometry args={[size, 8, 8]} />
      <meshBasicMaterial color="#6d86f5" opacity={0.6} transparent />
    </mesh>
  );
}

export function PropuestaHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Canvas 3D de fondo */}
      <div className="absolute inset-0 z-0">
        <Canvas
          camera={{ position: [0, 0, 6], fov: 45 }}
          dpr={[1, 2]}
          gl={{ antialias: true, alpha: true }}
        >
          <ambientLight intensity={0.3} />
          <directionalLight position={[5, 5, 5]} intensity={0.8} />
          <pointLight position={[-5, -5, -5]} color="#4a64eb" intensity={0.5} />
          <OrganicSphere />
          <FloatingGrid />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>

      {/* Contenido */}
      <motion.div 
        style={{ y, opacity }}
        className="relative z-10 mx-auto max-w-5xl px-6 text-center"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 inline-flex"
        >
          <span className="px-4 py-2 rounded-full border border-[#4a64eb]/30 bg-[#4a64eb]/10 text-sm text-[#6d86f5] backdrop-blur-sm">
            ✨ Versión Premium 3D
          </span>
        </motion.div>

        {/* Título con efecto de profundidad */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.95]">
            <span className="block text-white">
              Webs, apps
            </span>
            <span className="block text-white">
              y automatizaciones
            </span>
            <span className="block bg-gradient-to-r from-[#6d86f5] via-[#4a64eb] to-[#8b5cf6] bg-clip-text text-transparent">
              que hacen ganar dinero
            </span>
          </h1>
        </motion.div>

        {/* Subtítulo con glow */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 text-lg md:text-xl text-[#9999aa] max-w-2xl mx-auto leading-relaxed"
        >
          Diseñamos experiencias digitales que convierten. 
          <span className="text-[#6d86f5]">Webs que venden, apps que escalan, IA que ahorra tiempo.</span>
        </motion.p>

        {/* Botones */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a 
            href="#contacto" 
            className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-[#4a64eb] to-[#6d86f5] text-white font-medium text-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(74,100,235,0.4)]"
          >
            <span className="relative z-10">Agenda tu consulta gratis →</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#6d86f5] to-[#4a64eb] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
          
          <a 
            href="#servicios"
            className="px-8 py-4 rounded-full border border-[#3a3a4a] text-white font-medium text-lg hover:bg-white/5 hover:border-[#4a64eb]/50 transition-all duration-300"
          >
            Ver servicios
          </a>
        </motion.div>

        {/* Stats flotantes */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-20 flex flex-wrap justify-center gap-8 md:gap-16"
        >
          {[
            { num: "50+", label: "Proyectos entregados" },
            { num: "3x", label: "Más conversiones" },
            { num: "20h", label: "Ahorro semanal con IA" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 + i * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
                {stat.num}
              </div>
              <div className="mt-1 text-sm text-[#777788]">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Gradient bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0a0a0f] to-transparent z-10" />
    </section>
  );
}
