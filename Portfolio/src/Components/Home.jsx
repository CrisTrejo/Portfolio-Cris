import React, {Suspense} from 'react'
import {Canvas} from '@react-three/fiber'
import  Avatarmixamoready1  from './Avatar/Avatarmixamoready1.js';
import s from './Styles/Home.module.css'
import Navbar from './NavBar';
import Music from './Music';
import BarraTec from './BarraTec'
import Cuerpo from './Cuerpo';
import Footer from './Footer'


export default function  Home  ()  {
  return (
    <div>
    
    <Navbar></Navbar>
    <div className={s.box}>
    <div className={s.row}>
    <div className={s.font}>
    <h1 className={s.font2}>CRIS+TREJO+LA+VALLE</h1>
    <h1>FULL+ STACK+DEVELOPER</h1>
    {/* <br></br> */}
    {/* <br></br> */}
    {/* <h1>DEVELOPER</h1> */}
    
    
    </div>
    </div>
    
  
 

    <div className={s.avatar} style={{width:'30vw', height:'70vh',display:'flex' }}> 
    <Music></Music>
    <Canvas camera={{zoom: 15, position:[-8,2,25]}}>
    
      <ambientLight intensity={0.5}/>
      <pointLight position={[35,35,0]} intensity={0.4}/>
      <pointLight position={[-35,35,0]} intensity={0.4}/>
     
      <Suspense fallback={null}>
        <Avatarmixamoready1 position={[2,-1.5,-8]}/>
        </Suspense>
      {/* <OrbitControls/> */}
    </Canvas>
    </div>
    </div>
<Footer></Footer>
{/* <Cuerpo></Cuerpo> */}
    </div>
  )
}
