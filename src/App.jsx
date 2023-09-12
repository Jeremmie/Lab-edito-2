import { useState, useEffect } from 'react'
import Experience from './components/Experience'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import { Canvas, useFrame } from '@react-three/fiber'
import { Leva, useControls } from 'leva'
import { getProject, val } from "@theatre/core";
import { Gltf, OrbitControls, ScrollControls, useScroll } from "@react-three/drei";
import flyThrougState from "./flystate.json";


import {
  SheetProvider,
  PerspectiveCamera,
  useCurrentSheet,
} from "@theatre/r3f";

export default function App() {
  const sheet = getProject("Fly Through", { state: flyThrougState }).sheet("Scene");




  const { bgColor } = useControls({
    bgColor: '#6FD2FF',
  })

  return (
    <>
      <Leva collapsed />
      <div id='portGeneve' className='w-full bg-melon h-1/4 fixed z-10 -bottom-full rounded-t-lg p-4
transitionAll 
'>
        <h1>Geneve</h1>
        <p>blablabla</p>
      </div>
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
function Scene() {
  const sheet = useCurrentSheet();
  const scroll = useScroll();
  var firstPopUp = document.querySelector('#portGeneve')

  // our callback will run on every animation frame
  useFrame(() => {
    // the length of our sequence
    const sequenceLength = val(sheet.sequence.pointer.length);

    // update the "position" of the playhead in the sequence, as a fraction of its whole length
    sheet.sequence.position = scroll.offset * sequenceLength;



    const scrollCSS = Math.round((scroll.offset) * 10)

    if (scrollCSS === 4) {
      firstPopUp.classList.toggle('transitionPopUp')
    }

  });



  return (
    <>
      <Experience />
      <PerspectiveCamera
        theatreKey="Camera"
        makeDefault
        position={[0, 0, 0]}
        fov={60}
        near={0.1}
        far={70}
      />
    </>
  );
}
