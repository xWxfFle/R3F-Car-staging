import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { Mesh } from 'three'

export const Light = () => {
  const itemsRef = useRef<Array<Mesh>>([])
  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime()
    for (let i = 0; i < itemsRef.current.length; i++) {
      let mesh = itemsRef.current[i]
      let z = (i - 7) * 3.5 + ((elapsed * 0.8) % 3.5) * 2
      let dist = Math.abs(z)
      mesh.position.set(0, 0, -z)
      mesh.scale.set(1 - dist * 0.04, 1 - dist * 0.04, 1 - dist * 0.04)
    }
  })

  return (
    <>
      {[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].map((v, i) => (
        <mesh
          castShadow
          receiveShadow
          position={[0, 0, 0]}
          key={i}
          ref={(el) => (itemsRef.current[i] = el!)}
        >
          <torusGeometry args={[3.35, 0.05, 16, 100]} />
          <meshStandardMaterial
            color={[0, 0, 0]}
            emissive={i % 2 ? [3, 0, 0] : [0, 0, 5]}
          />
        </mesh>
      ))}
    </>
  )
}
