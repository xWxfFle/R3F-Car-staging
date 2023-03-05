import { Environment, OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Toyota } from "./Toyota";
import { Light } from "./Light";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
export const Scene = () => {
  return (
    <div className=" w-full h-screen bg-zinc-900">
      <Canvas
        gl={{ logarithmicDepthBuffer: true, antialias: false }}
        camera={{ position: [4, 0, -12], fov: 40 }}
      >
        <EffectComposer>
          <Bloom
            intensity={1}
            kernelSize={5}
            luminanceThreshold={0.15}
            luminanceSmoothing={0.025}
          />
        </EffectComposer>
        <Stage intensity={0} shadows="contact">
          <Toyota />
        </Stage>
        <spotLight
          color={[3, 0, 0]}
          angle={0.6}
          penumbra={0.5}
          position={[5, 5, 0]}
        />
        <spotLight
          color={[0, 0, 3]}
          angle={0.6}
          penumbra={0.5}
          position={[-5, 5, 0]}
        />
        <Light />
        <Environment frames={Infinity} blur={1} resolution={512} background>
          <Light />
        </Environment>
        <OrbitControls enablePan={false} maxPolarAngle={1.55} />
      </Canvas>
    </div>
  );
};
