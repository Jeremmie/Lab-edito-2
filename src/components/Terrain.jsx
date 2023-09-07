import { useGLTF } from '@react-three/drei'
import { MeshToonMaterial } from 'three';
import { useControls } from 'leva';

export default function Terrain() {
    const modelTerrain = useGLTF('../src/assets/model/terrain1.glb')
    const { color, colorLac } = useControls({
        color: '#ff0000',
        colorLac: '#ff0000',
    })

    return (<>
        <mesh scale={1} castShadow receiveShadow geometry={modelTerrain.nodes.geneve.geometry}>
            <meshToonMaterial color={color} />
        </mesh>
        <mesh scale={1} castShadow receiveShadow position-y={-0.01} geometry={modelTerrain.nodes.lac.geometry}>
            <meshToonMaterial color={colorLac} />
        </mesh>
    </>)
}