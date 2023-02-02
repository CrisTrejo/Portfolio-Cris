import React, {Suspense} from 'react'
import {Canvas} from '@react-three/fiber'
import  Avatar  from './Avatar/Avatar';
import s from './Styles/Home.module.css'
import Navbar from './NavBar';
import Music from './Music';


export default function  Home  ()  {
  return (
    <div>
    <Music></Music>
    <Navbar></Navbar>
    <div className={s.box}>
    <div className={s.row}>
    <div className={s.font}>
    <h1>FULL+</h1>
    {/* <br></br> */}
    <h1>STACK+</h1>
    {/* <br></br> */}
    <h1>DEVELOPER</h1>
    
    
    </div>
    </div>
    <div className={s.line}></div>
 

    <div style={{width:'50vw', height:'90vh',}}> 
    <Canvas camera={{zoom: 15, position:[-5,2,25]}}>
      <ambientLight intensity={0.5}/>
      <pointLight position={[35,35,0]} intensity={0.4}/>
      <pointLight position={[-35,35,0]} intensity={0.4}/>
     
      <Suspense fallback={null}>
        <Avatar position={[2,-1.5,-8]}/>
        </Suspense>
      {/* <OrbitControls/> */}
    </Canvas>
    </div>
    </div>
    </div>
  )
}
