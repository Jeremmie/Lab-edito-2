import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import Scene from './components/Scene'
import { Canvas } from '@react-three/fiber'
import { Leva, useControls } from 'leva'
import { getProject, val } from "@theatre/core";
import { Gltf, ScrollControls, useScroll } from "@react-three/drei";



import {
  SheetProvider,
  PerspectiveCamera,
  useCurrentSheet,
} from "@theatre/r3f";

function App() {
  const sheet = getProject("Fly Through").sheet("Scene");


  const { bgColor } = useControls({
    bgColor: '#6FD2FF',
  })

  return (
    <>
      <Leva collapsed />
      <Canvas gl={{ preserveDrawingBuffer: true }} className='h-screen'>
        <color args={[bgColor]} attach="background" />
        <ScrollControls pages={5}>
          <SheetProvider sheet={sheet}>
            <Scene />
          </SheetProvider>
        </ScrollControls>
      </Canvas>
    </>
  )
}

export default App
