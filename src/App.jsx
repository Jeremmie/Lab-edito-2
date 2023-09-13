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
    bgColor: '#d12711',
  })

  return (
    <>
      <Leva hidden collapsed />
      <div id='popUpContainer' className='flex flex-col fixed -bottom-full mb-5 z-10 w-screen h-fit items-center justify-center transitionAll'>
        <div id='popUpBtn' className='justify-center items-center shadow-lg flex flex-row w-5/12 py-3 rounded-full bg-slate-800 text-white h-1/6 mb-5'>
          <p className='ml-2'>Lire plus</p>
          <svg className='h-10 scale-[65%] -mb-[5px]' version="1.1" viewBox="0 0 700 700" xmlns="http://www.w3.org/2000/svg">
            <g fillRule="evenodd">
              <path d="m233.33 177.33c-18.039 0-32.664 14.625-32.664 32.668v186.67c0 18.039 14.625 32.664 32.664 32.664h186.67c18.043 0 32.668-14.625 32.668-32.664v-70c0-7.7344 6.2656-14 14-14 7.7305 0 14 6.2656 14 14v70c0 33.504-27.164 60.664-60.668 60.664h-186.67c-33.504 0-60.664-27.16-60.664-60.664v-186.67c0-33.508 27.16-60.668 60.664-60.668h46.668c7.7305 0 14 6.2695 14 14 0 7.7344-6.2695 14-14 14z" stroke='white' strokeWidth="50" />
              <path d="m513.34 102.67c7.7344 0 14 6.2695 14 14v105c0 7.7305-6.2695 14-14 14-7.7305 0-14-6.2695-14-14v-71.203l-104.44 104.43c-5.4648 5.4688-14.332 5.4688-19.797 0-5.4688-5.4688-5.4688-14.332 0-19.797l104.43-104.43h-71.203c-7.7305 0-14-6.2695-14-14 0-7.7344 6.2695-14 14-14z" stroke='white' strokeWidth="50" />
            </g>
          </svg>
        </div>
        <div id='popUpText' className='AlaskaLight shadow-lg w-[90%] bg-slate-800 text-white h-1/6 rounded-xl p-4

'>
          <h1 className='text-4xl'>Genève</h1>
          <hr />
          <p className='mt-3'>blablabla</p>
        </div>
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
  var popUpContainer = document.querySelector('#popUpContainer')
  var popUpText = document.querySelector('#popUpText')
  var popUpBtn = document.querySelector('#popUpBtn')

  // our callback will run on every animation frame
  useFrame(() => {
    // the length of our sequence
    const sequenceLength = val(sheet.sequence.pointer.length);

    // update the "position" of the playhead in the sequence, as a fraction of its whole length
    sheet.sequence.position = scroll.offset * sequenceLength;



    const scrollCSS = Math.round((scroll.offset) * 10)
    console.log(scrollCSS);

    if (scrollCSS === 4) {
      popUpContainer.classList.add('transitionPopUp')

    } else {
      popUpContainer.classList.remove('transitionPopUp')
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
