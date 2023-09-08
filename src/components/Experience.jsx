import React from "react"
import * as THREE from 'three'
import { Environment, Html, OrbitControls, ScrollControls, useScroll } from "@react-three/drei"
import { Canvas, useFrame } from "@react-three/fiber";
import { getProject, val } from "@theatre/core";
import { Leva, useControls } from 'leva'
import Terrain from "./Terrain"


export default function Experience() {
    const { position, color, generalLight, directionalLight } = useControls({
        position: {
            value: { x: 0, y: 0 },
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


    return (<>
        <ambientLight intensity={generalLight} />
        <directionalLight position={[1, 2, 3]} intensity={directionalLight} />
        <group position={[position.x, position.y, 0]} scale={1}>
            <Terrain />
            <meshToonMaterial color={color} />
        </group>
    </>)
}