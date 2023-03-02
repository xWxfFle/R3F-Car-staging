import{ useEffect } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { MeshReflectorMaterial } from "@react-three/drei";
import { LinearEncoding, RepeatWrapping, TextureLoader } from "three";

export function Ground() {
  const [roughness, normal] = useLoader(TextureLoader, [
    "textures/asphalt-rough.png",
    "textures/asphalt-nor.png",
  ]);

  useEffect(() => {
    [normal, roughness].forEach((t) => {
      t.wrapS = RepeatWrapping;
      t.wrapT = RepeatWrapping;
      t.repeat.set(5, 5);
      t.offset.set(0, 0);
    });

    normal.encoding = LinearEncoding;
  }, [normal, roughness]);

  useFrame((state) => {
    let t = -state.clock.getElapsedTime() * 0.2 ;
    roughness.offset.set(0, t );
    normal.offset.set(0, t );
  });

  return (
    <mesh
      rotation-x={-Math.PI * 0.5}
      castShadow
      receiveShadow
      position={[0, -0.65, 0]}
    >
      <planeGeometry args={[30, 30]} />
      <MeshReflectorMaterial
        envMapIntensity={0}
        normalMap={normal}

        roughnessMap={roughness}
        dithering={true}
        color={"black"}
        blur={[1000, 400]} // Blur ground reflections (width, heigt), 0 skips blur
        mixBlur={30} // How much blur mixes with surface roughness (default = 1)
        mixStrength={80} // Strength of the reflections
        mixContrast={1} // Contrast of the reflections
        resolution={512} // Off-buffer resolution, lower=faster, higher=better quality, slower
        depthScale={0.01} // Scale the depth factor (0 = no depth, default = 0)
        minDepthThreshold={0.9} // Lower edge for the depthTexture interpolation (default = 0)
        maxDepthThreshold={1} // Upper edge for the depthTexture interpolation (default = 0)
        depthToBlurRatioBias={0.25} // Adds a bias factor to the depthTexture before calculating the blur amount [blurFactor = 
        mirror={0}      />
    </mesh>
  );
}
