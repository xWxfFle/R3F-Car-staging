import { Grid, GridMaterialType } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export function Light() {
  const grid = useRef(null!);
   
  return (
    <Grid
      ref={grid}
      renderOrder={-1}
      position={[0, -0.65, 0]}
      infiniteGrid
      cellSize={0.6}
      cellThickness={0.6}
      sectionSize={3.3}
      sectionThickness={1.5}
      sectionColor={"pink"}
      fadeDistance={30}
    />
  );
}
