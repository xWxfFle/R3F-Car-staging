import {
  CameraShake,
  Environment,
  OrbitControls,
  Stage,
  Stats,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Model } from "./Toyota";
import { Light } from "./Light";
import {
  Bloom,
  ChromaticAberration,
  DepthOfField,
  EffectComposer,
  Noise,
  SSAO,
  Vignette,
} from "@react-three/postprocessing";
import { Ground } from "./Ground";
export const Scene = () => {
  return (
    <div className=" w-full h-screen ">
      <Canvas
        shadows="soft"
        gl={{ logarithmicDepthBuffer: true, antialias: false }}
      >
       
        <color args={[0, 0, 0]} attach="background" />
        <Stats />
        <Stage intensity={0.1} preset="soft" shadows="contact">
          <Model scale={0.01} />
        </Stage>
        <Ground />
        <Environment frames={Infinity}  resolution={512}>
          <Light />
        </Environment>
        <Light />
        <CameraShake
          maxYaw={0.1} // Max amount camera can yaw in either direction
          maxPitch={0.1} // Max amount camera can pitch in either direction
          maxRoll={0.1} // Max amount camera can roll in either direction
          yawFrequency={0.1} // Frequency of the the yaw rotation
          pitchFrequency={0.1} // Frequency of the pitch rotation
          rollFrequency={0.1} // Frequency of the roll rotation
        />
        <OrbitControls makeDefault />
      </Canvas>
    </div>
  );
};
