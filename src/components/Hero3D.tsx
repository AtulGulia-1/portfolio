'use client'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei'
import { motion } from 'framer-motion'

export default function Hero3D() {
  return (
    <motion.div
      className='w-80 h-80 lg:w-96 lg:h-96 rounded-3xl shadow-2xl overflow-hidden'
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[3, 2, 1]} />

        <Sphere args={[1, 100, 200]} scale={2.5}>
          <MeshDistortMaterial
            color='#6366f1'
            envMapIntensity={1}
            distort={0.4}
            speed={2}
          />
        </Sphere>

        <OrbitControls
          enablePan={false}
          enableZoom={false}
          enableRotate={true}
          autoRotate
          autoRotateSpeed={1}
        />
      </Canvas>
    </motion.div>
  )
}
