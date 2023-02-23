import {
  ContactShadows,
  Environment,
  OrbitControls,
  SoftShadows,
  Stage,
  Stats,
} from "@react-three/drei";
import { Canvas} from "@react-three/fiber";
import { Lightformers } from "./Background";
import { Model } from "./Toyota";
import { Light } from "./Light";
import { Bloom, DepthOfField, EffectComposer, Noise, Vignette } from "@react-three/postprocessing";

export const Scene = () => {
  return (
    <div className=" w-full h-screen bg-zinc-900">
      <Canvas shadows>
        <EffectComposer>
        
          <Bloom luminanceThreshold={0.9} luminanceSmoothing={0.1}  />
          
        </EffectComposer>
        <Stats />
        <Light />
        <Stage intensity={0.5} shadows='contact'>
          <Model scale={0.01} />
        </Stage>

        <Environment background preset="city" blur={0.8} />

        <OrbitControls />
      </Canvas>
    </div>
  );
};
