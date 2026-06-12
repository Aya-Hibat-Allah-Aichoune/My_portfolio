import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Text, Stars } from '@react-three/drei'

// Component for the floating numbers and characters
function FloatingData() {
  const group = useRef()
  
  const particles = useMemo(() => {
    const temp = []
    const characters = [
      '0', '1', '∑', 'π', 'μ', 'σ', '∫', '≈', 'f(x)', 
      '{}', '</>', 'pd.pd', ' ', 
      ' ', 'Δ', 'θ', '1010', '0110', 'ML', 'AI'
    ]
    
    // Zedt f l'nombre l 200 bach y3amar ga3 l'espace
    for (let i = 0; i < 200; i++) {
      temp.push({
        char: characters[Math.floor(Math.random() * characters.length)],
        // Kbart l'espace bach ytnaqlo f ga3 l'ecran (from 40 to 80)
        position: [
          (Math.random() - 0.5) * 80, // X axis (widened)
          (Math.random() - 0.5) * 80, // Y axis (widened)
          (Math.random() - 0.5) * 40 - 10 // Z axis (depth)
        ],
        // Randomize floating speed and size
        speed: Math.random() * 0.015 + 0.005,
        scale: Math.random() * 0.8 + 0.2
      })
    }
    return temp
  }, [])

  // Animate the characters floating upwards
  useFrame(() => {
    if (group.current) {
      group.current.children.forEach((child, i) => {
        child.position.y += particles[i].speed
        // Reset position to bottom if it goes too high (kbart l'hauteur l 40)
        if (child.position.y > 40) {
          child.position.y = -40
        }
        // Add a slight rotation for a 3D feel
        child.rotation.y += particles[i].speed * 0.5
        child.rotation.z += particles[i].speed * 0.2
      })
    }
  })

  return (
    <group ref={group}>
      {particles.map((data, i) => (
        <Text
          key={i}
          position={data.position}
          fontSize={data.scale}
          color="rgba(255, 20, 147, 0.4)" // Neon pink with opacity
          anchorX="center"
          anchorY="middle"
          outlineWidth={0.02}
          outlineColor="rgba(255, 20, 147, 0.8)"
        >
          {data.char}
        </Text>
      ))}
    </group>
  )
}

export default function Canvas3D() {
  return (
    // REMOVED: "bg-gray-900" so it inherits var(--bg-primary) smoothly
    <div className="absolute inset-0 z-0 pointer-events-none">
      {/* Kbart l'FOV (Field of View) bach l'camera tchouf l'espace kamel */}
      <Canvas camera={{ position: [0, 0, 15], fov: 75 }}>
        <ambientLight intensity={0.5} />
        
        {/* Floating Data Characters */}
        <FloatingData />
        
        {/* Deep Space Stars Background */}
        <Stars 
          radius={100} 
          depth={50} 
          count={4000} 
          factor={4} 
          saturation={0} 
          fade 
          speed={1.5} 
        />
      </Canvas>
      
      {/* UPDATED: Changed gradient overlay to blend into transparent instead of harsh gray-900 */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-transparent" />
    </div>
  )
}