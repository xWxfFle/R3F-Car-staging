import { Text3D } from "@react-three/drei";

export const Name = () => {
  return (
    <Text3D
      rotation={[-0.5, 0, 0]}
      curveSegments={32}
      bevelEnabled
      bevelSize={0.04}
      bevelThickness={0.1}
      height={0.5}
      lineHeight={0.6}
      letterSpacing={-0.06}
      size={1.5}
      font="/font.json"
    >
      xWxfFle
      <meshNormalMaterial />
    </Text3D>
  );
};
