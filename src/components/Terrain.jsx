import { useGLTF } from '@react-three/drei'
import { MeshToonMaterial } from 'three';
import { useControls } from 'leva';

export default function Terrain() {
    const modelTerrain = useGLTF('../src/assets/model/geneve.glb')

    const { color } = useControls({
        color: '#ff0000',
    })

    return (<>
        <mesh scale={0.1} geometry={modelTerrain.nodes.geneve.geometry}>
            <meshToonMaterial color={color} />
        </mesh>
    </>)
}