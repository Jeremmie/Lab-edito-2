// import { useRef, useState } from "react";


// export default function RequestFullScreen(){

//     // const toggleFullScreenBtn = useRef()
//     // console.log(toggleFullScreenBtn);
//     // const [isClosed, setIsClosed] = useState(false)

//     // const enterFullScreen = () => {
//     //     document.documentElement.requestFullscreen().catch((e)=>{
//     //         console.log(e);
//     //     });
//     // }
//     // const takeDownBox = () => {
//     //     FullScreenBox.style.opacity = '0%';
//     //     console.log('gone');
//     // }
//     // const playAll = () => {
//     //     isClosed
//     // }
//     console.log(FullScreenBox);
//     return<>
//     <div id="FullScreenBox" className="h-screen w-screen bg-slate-600/90 fixed z-10 flex justify-center items-center transitionAll">
//     <div className="h-[30vh] w-[90vw] bg-slate-800 rounded-lg flex justify-center flex-col items-center text-white fixed z-20 p-5">
//     <div className="mb-7">
//         <h1>L'Epopée du Léman</h1>
//         <h3> À travers les croisières de la CGN</h3>
//     </div>
//     <div className="bg-emerald-900 py-4 flex flex-col justify-center items-center p-4 rounded-xl">
//     <p>Pour avoir la meilleure épérience, activé le mode pleine écran:</p>
//     <p onClick={document.querySelector('#FullScreenBox').style.opacity = '0%'} className="bg-white text-slate-800 px-3 py-2 w-fit rounded-full shadow-lg mt-3 font-bold">fullscreen</p>
//     </div>
//     </div>
//     </div>
//     </>
// }