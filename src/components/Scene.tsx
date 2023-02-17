import { OrbitControls, Stage, Stats } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Ground } from "./Ground";
import { Model } from "./Toyota";

export const Scene = () => {
 
  return (
    <div className=" w-full h-screen bg-zinc-900">
      <Canvas shadows>
        
        <Stats />
        <Stage adjustCamera preset="soft" intensity={0.2} shadows="contact">
        
          <Model />
        </Stage>

        <OrbitControls />
      </Canvas>
    </div>
  );
};
