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
import { Html } from '@react-three/drei'


import {
  SheetProvider,
  PerspectiveCamera,
  useCurrentSheet,
} from "@theatre/r3f";

export default function App() {
  const sheet = getProject("Fly Through", { state: flyThrougState }).sheet("Scene");

  const enterFullScreen = () => {
    document.documentElement.requestFullscreen().catch((e) => {
      console.log(e);
    });
  }
  const takeDownBox = () => {
    FullScreenBox.style.bottom = '-100%';
  }
  const playAll = () => {
    takeDownBox();
    enterFullScreen();
  }


  function openPopUp() {
    const bigPageGPtest = document.querySelector('#bigPageGP');
    bigPageGPtest.style.bottom = '0';
    popUpContainer.style.opacity = '0%';
    console.log(bigPageGPtest);
  };
  function closePopUp() {
    const bigPageGPtest = document.querySelector('#bigPageGP');
    bigPageGPtest.style.bottom = '-100%';

    popUpContainer.style.opacity = '100%';
  };

  function openPopUpGD() {
    const bigPageGPtest = document.querySelector('#bigPageGD');
    bigPageGPtest.style.bottom = '0';
    popUpGD.style.opacity = '0%';
    console.log(bigPageGPtest);
  };
  function closePopUpGD() {
    const bigPageGPtest = document.querySelector('#bigPageGD');
    bigPageGPtest.style.bottom = '-100%';

    popUpContainer.style.opacity = '100%';
  };
  function openPopUpGF() {
    const bigPageGPtest = document.querySelector('#bigPageGF');
    bigPageGPtest.style.bottom = '0';
    popUpGD.style.opacity = '0%';
    console.log(bigPageGPtest);
  };
  function closePopUpGF() {
    const bigPageGPtest = document.querySelector('#bigPageGF');
    bigPageGPtest.style.bottom = '-100%';

    popUpContainer.style.opacity = '100%';
  };
  function openPopUpGG() {
    const bigPageGGtest = document.querySelector('#bigPageGG');
    bigPageGGtest.style.bottom = '0';
    popUpGG.style.opacity = '0%';

  };
  function closePopUpGG() {
    const bigPageGGtest = document.querySelector('#bigPageGG');
    bigPageGGtest.style.bottom = '-100%';

    popUpContainer.style.opacity = '100%';
  };
  function openPopUpGH() {
    const bigPageGHtest = document.querySelector('#bigPageGH');
    bigPageGHtest.style.bottom = '0';
    popUpGH.style.opacity = '0%';

  };
  function closePopUpGH() {
    const bigPageGHtest = document.querySelector('#bigPageGH');
    bigPageGHtest.style.bottom = '-100%';

    popUpContainer.style.opacity = '100%';
  };
  function openPopUpGJ() {
    const bigPageGJtest = document.querySelector('#bigPageGJ');
    bigPageGJtest.style.bottom = '0';
    popUpGJ.style.opacity = '0%';

  };
  function closePopUpGJ() {
    const bigPageGJtest = document.querySelector('#bigPageGJ');
    bigPageGJtest.style.bottom = '-100%';

    popUpContainer.style.opacity = '100%';
  };
  const { bgColor } = useControls({
    bgColor: '#d12711',
  })

  return (
    <>
      <Leva hidden />

      <div id="FullScreenBox" className="h-screen w-screen bg-slate-600/90 fixed -bottom-0 z-10 flex justify-center items-center transitionAll">
        <div className="h-[30vh] w-[90vw] bg-slate-800 rounded-xl flex justify-center flex-col items-center text-white fixed z-20 p-5">

          <div className="mb-7">

            <h1 className='text-3xl'>L'Epopée du Léman</h1>
            <h3 className='text-xl'> À travers les croisières de la CGN</h3>
          </div>
          <div className="bg-slate-600 py-4 flex flex-col justify-center items-center p-4 rounded-xl">
            <p className='mb-3'>Pour commencer l'expérience, cliquez ici:</p>
            <p onClick={playAll} className="bg-green-600 text-white px-3 py-2 w-fit rounded-full shadow-lg mt-3 font-bold">commencer</p>
          </div>
        </div>
      </div>


      <div id='popUpContainer' className='flex flex-col fixed -bottom-full mb-5 z-10 w-screen h-fit items-center justify-center transitionAll'>
        <div id='popUpBtn' className='justify-center items-center shadow-lg flex flex-row w-fit px-3 py-2 text-xs rounded-full bg-green-600 text-white h-1/6 mb-5'>
          <p onClick={openPopUp} className='ml-2'>Lire plus</p>
          <svg className='h-10 scale-[65%] -mb-[5px]' version="1.1" viewBox="0 0 700 700" xmlns="http://www.w3.org/2000/svg">
            <g fillRule="evenodd">
              <path d="m233.33 177.33c-18.039 0-32.664 14.625-32.664 32.668v186.67c0 18.039 14.625 32.664 32.664 32.664h186.67c18.043 0 32.668-14.625 32.668-32.664v-70c0-7.7344 6.2656-14 14-14 7.7305 0 14 6.2656 14 14v70c0 33.504-27.164 60.664-60.668 60.664h-186.67c-33.504 0-60.664-27.16-60.664-60.664v-186.67c0-33.508 27.16-60.668 60.664-60.668h46.668c7.7305 0 14 6.2695 14 14 0 7.7344-6.2695 14-14 14z" stroke='white' strokeWidth="50" />
              <path d="m513.34 102.67c7.7344 0 14 6.2695 14 14v105c0 7.7305-6.2695 14-14 14-7.7305 0-14-6.2695-14-14v-71.203l-104.44 104.43c-5.4648 5.4688-14.332 5.4688-19.797 0-5.4688-5.4688-5.4688-14.332 0-19.797l104.43-104.43h-71.203c-7.7305 0-14-6.2695-14-14 0-7.7344 6.2695-14 14-14z" stroke='white' strokeWidth="50" />
            </g>
          </svg>
        </div>
        <div id='popUpText' className='AlaskaLight shadow-lg w-[90%] bg-slate-800 text-white h-1/6 rounded-xl p-4'>
          <h1 className='text-4xl'>Genève Pâquis</h1>
          <hr />
          <p className='mt-3'>La tradition face à la modernité</p>
        </div>
      </div>
      <div id='bigPageGP' className='h-screen -bottom-[130%] fixed bg-slate-800/90 z-50 w-screen AlaskaLight p-4 text-xl text-white transitionAll'>
        <svg onClick={closePopUp} className='fill-white block ml-auto' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">{/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
          <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>
        <h1 className='text-4xl'>Genève Paquis</h1>
        <hr className='mt-2 mb-3' />
        <p>La compagnie genevoise des bateaux à vapeurs réunis n’a pas pas encore de bateaux fait en métal.</p> <p className='mt-3'>Ces derniers, en bois, ne peuvent pas rivaliser contre les nouveaux bateaux qui arrivent sur le Léman; ceux en fer des frère Knechtenhofer.
          <img className='mt-5 rounded-lg w-fit h-auto bg-white' src="https://www.cgn.ch/media/eav/generic/thumb3_small_2.jpg" alt="" />
        </p>
        <div className='absolute bottom-10 flex flex-col items-center'>
          <p className='w-screen text-center'>infos supplémentaires:</p>
          <div className='flex justify-between mt-4 w-fit'>
            <p className='bg-sky-400 text-white shadow-lg rounded-full px-2 py-1'>Sources</p>
            <p className='bg-sky-400 text-white shadow-lg rounded-full ml-4 px-2 py-1'>Ville de Genève</p>
          </div>
        </div>
      </div >

      {/* POPUPGD */}

      <div id='popUpGD' className='flex flex-col fixed -bottom-full mb-5 z-10 w-screen h-fit items-center justify-center transitionAll'>
        <div id='popUpBtn' className='justify-center items-center shadow-lg flex flex-row w-fit px-3 py-2 text-xs rounded-full bg-green-600 text-white h-1/6 mb-5'>
          <p onClick={openPopUpGD} className='ml-2'>Lire plus</p>
          <svg className='h-10 scale-[65%] -mb-[5px]' version="1.1" viewBox="0 0 700 700" xmlns="http://www.w3.org/2000/svg">
            <g fillRule="evenodd">
              <path d="m233.33 177.33c-18.039 0-32.664 14.625-32.664 32.668v186.67c0 18.039 14.625 32.664 32.664 32.664h186.67c18.043 0 32.668-14.625 32.668-32.664v-70c0-7.7344 6.2656-14 14-14 7.7305 0 14 6.2656 14 14v70c0 33.504-27.164 60.664-60.668 60.664h-186.67c-33.504 0-60.664-27.16-60.664-60.664v-186.67c0-33.508 27.16-60.668 60.664-60.668h46.668c7.7305 0 14 6.2695 14 14 0 7.7344-6.2695 14-14 14z" stroke='white' strokeWidth="50" />
              <path d="m513.34 102.67c7.7344 0 14 6.2695 14 14v105c0 7.7305-6.2695 14-14 14-7.7305 0-14-6.2695-14-14v-71.203l-104.44 104.43c-5.4648 5.4688-14.332 5.4688-19.797 0-5.4688-5.4688-5.4688-14.332 0-19.797l104.43-104.43h-71.203c-7.7305 0-14-6.2695-14-14 0-7.7344 6.2695-14 14-14z" stroke='white' strokeWidth="50" />
            </g>
          </svg>
        </div>
        <div id='popUpText' className='AlaskaLight shadow-lg w-[90%] bg-slate-800 text-white h-1/6 rounded-xl p-4'>
          <h1 className='text-4xl'>Genève ?</h1>
          <hr />
          <p className='mt-3'>Les bateaux de fer</p>
        </div>
      </div>
      <div id='bigPageGD' className='h-screen -bottom-[130%] fixed bg-slate-800/90 z-50 w-screen AlaskaLight p-4 text-xl text-white transitionAll'>
        <svg onClick={closePopUpGD} className='fill-white block ml-auto' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">{/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
          <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>
        <h1 className='text-4xl'>Genève ?</h1>
        <hr className='mt-2 mb-3' />
        <p>Les bateaux de fer.</p> <p className='mt-3'>Les frère Knechtenhofer, qui amènent alors une vrai concurrence sur le Léman, annoncent un bateaux qui pourra aller à 17km/h et faire Ouchy-Genève en 3h : une vrai innovation. Mais la compagnie Genevoise ne veut pas faire de bateau en fer, malgré leur crainte de perdre le combat et décide de faire un nouveau bateau, toujours en bois.
          <img className='mt-5 rounded-lg w-fit h-auto bg-white' src="https://www.cgn.ch/media/eav/generic/thumb3_small_2.jpg" alt="" />
        </p>
        <div className='absolute bottom-10 flex flex-col items-center'>
          <p className='w-screen text-center'>infos supplémentaires:</p>
          <div className='flex justify-between mt-4 w-fit'>
            <p className='bg-sky-400 text-white shadow-lg rounded-full px-2 py-1'>Sources</p>
            <p className='bg-sky-400 text-white shadow-lg rounded-full ml-4 px-2 py-1'>Ville de Genève</p>
          </div>
        </div>
      </div >

      {/* POPUP GF */}

      <div id='popUpGF' className='flex flex-col fixed -bottom-full mb-5 z-10 w-screen h-fit items-center justify-center transitionAll'>
        <div id='popUpBtn' className='justify-center items-center shadow-lg flex flex-row w-fit px-3 py-2 text-xs rounded-full bg-green-600 text-white h-1/6 mb-5'>
          <p onClick={openPopUpGF} className='ml-2'>Lire plus</p>
          <svg className='h-10 scale-[65%] -mb-[5px]' version="1.1" viewBox="0 0 700 700" xmlns="http://www.w3.org/2000/svg">
            <g fillRule="evenodd">
              <path d="m233.33 177.33c-18.039 0-32.664 14.625-32.664 32.668v186.67c0 18.039 14.625 32.664 32.664 32.664h186.67c18.043 0 32.668-14.625 32.668-32.664v-70c0-7.7344 6.2656-14 14-14 7.7305 0 14 6.2656 14 14v70c0 33.504-27.164 60.664-60.668 60.664h-186.67c-33.504 0-60.664-27.16-60.664-60.664v-186.67c0-33.508 27.16-60.668 60.664-60.668h46.668c7.7305 0 14 6.2695 14 14 0 7.7344-6.2695 14-14 14z" stroke='white' strokeWidth="50" />
              <path d="m513.34 102.67c7.7344 0 14 6.2695 14 14v105c0 7.7305-6.2695 14-14 14-7.7305 0-14-6.2695-14-14v-71.203l-104.44 104.43c-5.4648 5.4688-14.332 5.4688-19.797 0-5.4688-5.4688-5.4688-14.332 0-19.797l104.43-104.43h-71.203c-7.7305 0-14-6.2695-14-14 0-7.7344 6.2695-14 14-14z" stroke='white' strokeWidth="50" />
            </g>
          </svg>
        </div>
        <div id='popUpText' className='AlaskaLight shadow-lg w-[90%] bg-slate-800 text-white h-1/6 rounded-xl p-4'>
          <h1 className='text-4xl'>Genève ?</h1>
          <hr />
          <p className='mt-3'>L’Aigle</p>
        </div>
      </div>
      <div id='bigPageGF' className='h-screen -bottom-[130%] fixed bg-slate-800/90 z-50 w-screen AlaskaLight p-4 text-xl text-white transitionAll'>
        <svg onClick={closePopUpGF} className='fill-white block ml-auto' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">{/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
          <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>
        <h1 className='text-4xl'>Genève ?</h1>
        <hr className='mt-2 mb-3' />
        <p>L’Aigle</p> <p className='mt-3'>Le prochain bateau phare que construira de la compagnie genevoise s’appelle l’Aigle et porte bien son nom. Il est le plus rapide de leur flotte. Confortable et rapide, il pourra accueillir 500 personnes et filera sur les flots à 20km/h, avec une puissance de 20 chevaux.
          <img className='mt-5 rounded-lg w-fit h-auto bg-white' src="https://www.cgn.ch/media/eav/generic/thumb3_small_2.jpg" alt="" />
        </p>
        <div className='absolute bottom-10 flex flex-col items-center'>
          <p className='w-screen text-center'>infos supplémentaires:</p>
          <div className='flex justify-between mt-4 w-fit'>
            <p className='bg-sky-400 text-white shadow-lg rounded-full px-2 py-1'>Sources</p>
            <p className='bg-sky-400 text-white shadow-lg rounded-full ml-4 px-2 py-1'>Ville de Genève</p>
          </div>
        </div>
      </div >

      {/* POPUP GG */}

      <div id='popUpGG' className='flex flex-col fixed -bottom-full mb-5 z-10 w-screen h-fit items-center justify-center transitionAll'>
        <div id='popUpBtn' className='justify-center items-center shadow-lg flex flex-row w-fit px-3 py-2 text-xs rounded-full bg-green-600 text-white h-1/6 mb-5'>
          <p onClick={openPopUpGG} className='ml-2'>Lire plus</p>
          <svg className='h-10 scale-[65%] -mb-[5px]' version="1.1" viewBox="0 0 700 700" xmlns="http://www.w3.org/2000/svg">
            <g fillRule="evenodd">
              <path d="m233.33 177.33c-18.039 0-32.664 14.625-32.664 32.668v186.67c0 18.039 14.625 32.664 32.664 32.664h186.67c18.043 0 32.668-14.625 32.668-32.664v-70c0-7.7344 6.2656-14 14-14 7.7305 0 14 6.2656 14 14v70c0 33.504-27.164 60.664-60.668 60.664h-186.67c-33.504 0-60.664-27.16-60.664-60.664v-186.67c0-33.508 27.16-60.668 60.664-60.668h46.668c7.7305 0 14 6.2695 14 14 0 7.7344-6.2695 14-14 14z" stroke='white' strokeWidth="50" />
              <path d="m513.34 102.67c7.7344 0 14 6.2695 14 14v105c0 7.7305-6.2695 14-14 14-7.7305 0-14-6.2695-14-14v-71.203l-104.44 104.43c-5.4648 5.4688-14.332 5.4688-19.797 0-5.4688-5.4688-5.4688-14.332 0-19.797l104.43-104.43h-71.203c-7.7305 0-14-6.2695-14-14 0-7.7344 6.2695-14 14-14z" stroke='white' strokeWidth="50" />
            </g>
          </svg>
        </div>
        <div id='popUpText' className='AlaskaLight shadow-lg w-[90%] bg-slate-800 text-white h-1/6 rounded-xl p-4'>
          <h1 className='text-4xl'>Genève ?</h1>
          <hr />
          <p className='mt-3'>L’Aigle devient le Simplon</p>
        </div>
      </div>
      <div id='bigPageGG' className='h-screen -bottom-[130%] fixed bg-slate-800/90 z-50 w-screen AlaskaLight p-4 text-xl text-white transitionAll'>
        <svg onClick={closePopUpGG} className='fill-white block ml-auto' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">{/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
          <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>
        <h1 className='text-4xl'>Genève ?</h1>
        <hr className='mt-2 mb-3' />
        <p>L’Aigle devient le Simplon</p> <p className='mt-3'>Plus tard, l’Aigle se fera renommer le Simplon, en l’honneur de Napoléon III qui viendra visiter sa nouvelle province, la Savoie.
          En septembre 1861, le Simplon se fera malheureusement ensablé (sera échoué sur un banc de sable) devant les bouches du Rhône
          <img className='mt-5 rounded-lg w-fit h-auto bg-white' src="https://www.cgn.ch/media/eav/generic/thumb3_small_2.jpg" alt="" />
        </p>
        <div className='absolute bottom-10 flex flex-col items-center'>
          <p className='w-screen text-center'>infos supplémentaires:</p>
          <div className='flex justify-between mt-4 w-fit'>
            <p className='bg-sky-400 text-white shadow-lg rounded-full px-2 py-1'>Sources</p>
            <p className='bg-sky-400 text-white shadow-lg rounded-full ml-4 px-2 py-1'>Ville de Genève</p>
          </div>
        </div>
      </div >


      {/* POPUP GH */}

      <div id='popUpGH' className='flex flex-col fixed -bottom-full mb-5 z-10 w-screen h-fit items-center justify-center transitionAll'>
        <div id='popUpBtn' className='justify-center items-center shadow-lg flex flex-row w-fit px-3 py-2 text-xs rounded-full bg-green-600 text-white h-1/6 mb-5'>
          <p onClick={openPopUpGH} className='ml-2'>Lire plus</p>
          <svg className='h-10 scale-[65%] -mb-[5px]' version="1.1" viewBox="0 0 700 700" xmlns="http://www.w3.org/2000/svg">
            <g fillRule="evenodd">
              <path d="m233.33 177.33c-18.039 0-32.664 14.625-32.664 32.668v186.67c0 18.039 14.625 32.664 32.664 32.664h186.67c18.043 0 32.668-14.625 32.668-32.664v-70c0-7.7344 6.2656-14 14-14 7.7305 0 14 6.2656 14 14v70c0 33.504-27.164 60.664-60.668 60.664h-186.67c-33.504 0-60.664-27.16-60.664-60.664v-186.67c0-33.508 27.16-60.668 60.664-60.668h46.668c7.7305 0 14 6.2695 14 14 0 7.7344-6.2695 14-14 14z" stroke='white' strokeWidth="50" />
              <path d="m513.34 102.67c7.7344 0 14 6.2695 14 14v105c0 7.7305-6.2695 14-14 14-7.7305 0-14-6.2695-14-14v-71.203l-104.44 104.43c-5.4648 5.4688-14.332 5.4688-19.797 0-5.4688-5.4688-5.4688-14.332 0-19.797l104.43-104.43h-71.203c-7.7305 0-14-6.2695-14-14 0-7.7344 6.2695-14 14-14z" stroke='white' strokeWidth="50" />
            </g>
          </svg>
        </div>
        <div id='popUpText' className='AlaskaLight shadow-lg w-[90%] bg-slate-800 text-white h-1/6 rounded-xl p-4'>
          <h1 className='text-4xl'>Genève ?</h1>
          <hr />
          <p className='mt-3'>le maire de Verrières</p>
        </div>
      </div>
      <div id='bigPageGH' className='h-screen -bottom-[130%] fixed bg-slate-800/90 z-50 w-screen AlaskaLight p-4 text-xl text-white transitionAll'>
        <svg onClick={closePopUpGH} className='fill-white block ml-auto' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">{/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
          <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>
        <h1 className='text-4xl'>Genève ?</h1>
        <hr className='mt-2 mb-3' />
        <p>Nouvelle air</p> <p className='mt-3'>Cet accident amènera une nouvelle loi qui demandera au bateau de passer obligatoirement sur les débarcadères. Le Simplon sera racheté et mis en exposition, et plus tard, démonté. Le marché des bateaux n’ira pas dans le mieux, et c’est que plus tard qu’un certain Mr Stierchler investira dans un bateau pour en faire un café flottant. Signe que le marché va mal, car la fonction première des bâtiments n’est plus assez rentable.
          <img className='mt-5 rounded-lg w-fit h-auto bg-white' src="https://www.cgn.ch/media/eav/generic/thumb3_small_2.jpg" alt="" />
        </p>
        <div className='absolute bottom-10 flex flex-col items-center'>
          <p className='w-screen text-center'>infos supplémentaires:</p>
          <div className='flex justify-between mt-4 w-fit'>
            <p className='bg-sky-400 text-white shadow-lg rounded-full px-2 py-1'>Sources</p>
            <p className='bg-sky-400 text-white shadow-lg rounded-full ml-4 px-2 py-1'>Ville de Genève</p>
          </div>
        </div>
      </div >

      {/* POPUP GJ */}

      <div id='popUpGJ' className='flex flex-col fixed -bottom-full mb-5 z-10 w-screen h-fit items-center justify-center transitionAll'>
        <div id='popUpBtn' className='justify-center items-center shadow-lg flex flex-row w-fit px-3 py-2 text-xs rounded-full bg-green-600 text-white h-1/6 mb-5'>
          <p onClick={openPopUpGJ} className='ml-2'>Lire plus</p>
          <svg className='h-10 scale-[65%] -mb-[5px]' version="1.1" viewBox="0 0 700 700" xmlns="http://www.w3.org/2000/svg">
            <g fillRule="evenodd">
              <path d="m233.33 177.33c-18.039 0-32.664 14.625-32.664 32.668v186.67c0 18.039 14.625 32.664 32.664 32.664h186.67c18.043 0 32.668-14.625 32.668-32.664v-70c0-7.7344 6.2656-14 14-14 7.7305 0 14 6.2656 14 14v70c0 33.504-27.164 60.664-60.668 60.664h-186.67c-33.504 0-60.664-27.16-60.664-60.664v-186.67c0-33.508 27.16-60.668 60.664-60.668h46.668c7.7305 0 14 6.2695 14 14 0 7.7344-6.2695 14-14 14z" stroke='white' strokeWidth="50" />
              <path d="m513.34 102.67c7.7344 0 14 6.2695 14 14v105c0 7.7305-6.2695 14-14 14-7.7305 0-14-6.2695-14-14v-71.203l-104.44 104.43c-5.4648 5.4688-14.332 5.4688-19.797 0-5.4688-5.4688-5.4688-14.332 0-19.797l104.43-104.43h-71.203c-7.7305 0-14-6.2695-14-14 0-7.7344 6.2695-14 14-14z" stroke='white' strokeWidth="50" />
            </g>
          </svg>
        </div>
        <div id='popUpText' className='AlaskaLight shadow-lg w-[90%] bg-slate-800 text-white h-1/6 rounded-xl p-4'>
          <h1 className='text-4xl'>Genève ?</h1>
          <hr />
          <p className='mt-3'>le maire de Verrières</p>
        </div>
      </div>
      <div id='bigPageGJ' className='h-screen -bottom-[130%] fixed bg-slate-800/90 z-50 w-screen AlaskaLight p-4 text-xl text-white transitionAll'>
        <svg onClick={closePopUpGJ} className='fill-white block ml-auto' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">{/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
          <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>
        <h1 className='text-4xl'>Genève ?</h1>
        <hr className='mt-2 mb-3' />
        <p>le maire de Verrières</p> <p className='mt-3'>Tel est le maire de Verrières, M. de Rênal. Après avoir traversé la rue d’un pas grave, il entre à la mairie et disparaît aux yeux du voyageur. Mais, cent pas plus haut, si celui-ci continue sa promenade, il aperçoit une maison d’assez belle apparence, et, à travers une grille de fer attenante à la maison, des jardins magnifiques. Au delà c’est une ligne d’horizon formée par les collines de la Bourgogne, et qui semble faite à souhait pour le plaisir des yeux. Cette vue fait oublier au voyageur l’atmosphère empestée des petits intérêts d’argent dont il commence à être asphyxié. (Texte remplacement)

        </p>
        <div className='absolute bottom-10 flex flex-col items-center'>
          <p className='w-screen text-center'>infos supplémentaires:</p>
          <div className='flex justify-between mt-4 w-fit'>
            <p className='bg-sky-400 text-white shadow-lg rounded-full px-2 py-1'>Sources</p>
            <p className='bg-sky-400 text-white shadow-lg rounded-full ml-4 px-2 py-1'>Ville de Genève</p>
          </div>
        </div>
      </div >
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
  const FullScreenBox = document.querySelector('#FullScreenBox')



  var popUpContainer = document.querySelector('#popUpContainer')
  var popUpGD = document.querySelector('#popUpGD')
  var popUpGF = document.querySelector('#popUpGF')
  var popUpGG = document.querySelector('#popUpGG')
  var popUpGH = document.querySelector('#popUpGH')
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

    if (scrollCSS === (4)) {
      popUpContainer.classList.add('transitionPopUp')
    } else {
      popUpContainer.classList.remove('transitionPopUp')
    }
    if (scrollCSS === (6)) {
      popUpGD.classList.add('transitionPopUp')
    } else {
      popUpGD.classList.remove('transitionPopUp')
    }
    if (scrollCSS === (7)) {
      popUpGF.classList.add('transitionPopUp')
    } else {
      popUpGF.classList.remove('transitionPopUp')
    }
    if (scrollCSS === (8)) {
      popUpGG.classList.add('transitionPopUp')
    } else {
      popUpGG.classList.remove('transitionPopUp')
    }
    if (scrollCSS === (9)) {
      popUpGH.classList.add('transitionPopUp')
    } else {
      popUpGH.classList.remove('transitionPopUp')
    }
    if (scrollCSS === (10)) {
      popUpGJ.classList.add('transitionPopUp')
    } else {
      popUpGJ.classList.remove('transitionPopUp')
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
