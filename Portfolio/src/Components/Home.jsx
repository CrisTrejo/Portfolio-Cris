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
    <h1>FULL+ STACK+DEVELOPER</h1>
    {/* <br></br> */}
    <h1 className={s.font2}>CRISTINA+TREJO</h1>
    {/* <br></br> */}
    {/* <h1>DEVELOPER</h1> */}
    
    
    </div>
    </div>
    <div className={s.line}></div>
 

    <div className={s.avatar} style={{width:'30vw', height:'90vh',display:'flex' }}> 
    
    <Canvas camera={{zoom: 15, position:[-8,2,25]}}>
    
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#333333" fill-opacity="1" d="M0,160L30,176C60,192,120,224,180,224C240,224,300,192,360,176C420,160,480,160,540,154.7C600,149,660,139,720,154.7C780,171,840,213,900,213.3C960,213,1020,171,1080,144C1140,117,1200,107,1260,101.3C1320,96,1380,96,1410,96L1440,96L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
</svg>
    </div>
  )
}
