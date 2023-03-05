import { Environment, OrbitControls, Stage, Stats } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Model } from "./Toyota";
import { Light } from "./Light";
import {
  Bloom,
  DepthOfField,
  EffectComposer,
  Noise,
} from "@react-three/postprocessing";
import { Name } from "./text";
export const Scene = () => {
  return (
    <div className=" w-full h-screen bg-zinc-900">
      <Canvas gl={{ logarithmicDepthBuffer: true, antialias: false }}>
        <EffectComposer>
          <Bloom
            intensity={1} // The bloom intensity.
            width={300} // render width
            height={300} // render height
            kernelSize={5} // blur kernel size
            luminanceThreshold={0.15} // luminance threshold. Raise this value to mask out darker elements in the scene.
            luminanceSmoothing={0.025} // smoothness of the luminance threshold. Range is [0, 1]
          />
        </EffectComposer>
        <Stats />
        <Stage intensity={0} shadows="contact">
          <Model scale={0.01} />
        </Stage>
        <Name />

        <Light />
        <Environment frames={Infinity} blur={1} resolution={512} background>
          <Light />
        </Environment>
        <OrbitControls makeDefault enablePan={false} maxPolarAngle={1.45} />
      </Canvas>
    </div>
  );
};
