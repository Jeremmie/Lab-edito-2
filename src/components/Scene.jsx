import React from "react"
import * as THREE from 'three'
import { Environment, Html, OrbitControls, ScrollControls, useScroll } from "@react-three/drei"
import { Canvas, useFrame } from "@react-three/fiber";
import { getProject, val } from "@theatre/core";
import { Leva, useControls } from 'leva'
import Terrain from "./Terrain"

import {
    SheetProvider,
    PerspectiveCamera,
    useCurrentSheet,
} from "@theatre/r3f";

export default function Scene() {
    const { position, positionText, color, generalLight, directionalLight } = useControls({
        position: {
            value: { x: 0, y: 0 },
            min: - 10,
            max: 10,
            step: 0.01,
            joystick: 'invertY',
        },
        positionText: {
            value: { x: 1, y: -0.2, z: 1 },
            min: - 10,
            max: 10,
            step: 0.01,
            joystick: 'invertY',
        },
        color: '#ff0000',
        generalLight: {
            value: -4.3,
            min: - 10,
            max: 10,
            step: 0.01,
        },
        directionalLight: {
            value: 6.47,
            min: - 10,
            max: 10,
            step: 0.01,
        }
    })

    const sheet = useCurrentSheet();
    const scroll = useScroll();

    useFrame(() => {
        // the length of our sequence
        const sequenceLength = val(sheet.sequence.pointer.length);
        // update the "position" of the playhead in the sequence, as a fraction of its whole length
        sheet.sequence.position = scroll.offset * sequenceLength;
    });


    return (<>
        <ambientLight intensity={generalLight} />
        <directionalLight position={[1, 2, 3]} intensity={directionalLight} />
        <group position={[position.x, position.y, 0]} scale={1}>
            <Terrain />
            <meshToonMaterial color={color} />
        </group>
        <PerspectiveCamera
            theatreKey="Camera"
            makeDefault
            position={[0, 0, 0]}
            fov={90}
            near={0.1}
            far={700}
        />
    </>)
}