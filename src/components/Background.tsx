import { Float, Grid, Lightformer } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Color, Depth, LayerMaterial } from "lamina";
import { useRef } from "react";
import { BackSide } from "three";

export function Lightformers() {

  return (
    <>
      <Float speed={5} floatIntensity={2} rotationIntensity={2}>
        <Lightformer
          form="ring"
          color="purple"
          intensity={1}
          scale={10}
          position={[-15, 4, -18]}
          target={[0, 0, 0]}
        />
      </Float>
      <Float speed={5} floatIntensity={2} rotationIntensity={2}>
        <Lightformer
          form="ring"
          color="purple"
          intensity={2}
          scale={10}
          position={[15, 20, 18]}
          target={[0, 0, 0]}
        />
      </Float>
    </>
  );
}
