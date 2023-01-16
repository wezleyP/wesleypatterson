import React, { useState } from 'react';
import '../index.css';
import Header from './Header';
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom';
import Star from '../images/star.png'
import Planet from '../images/planetTwo.png'
import Rocket from '../images/rocket.png'


 function Home() {

  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

   const imageLocations = [
      {x: '2.5%', y: 300 + cursorPosition.y * 0.02 },
      {x: '5%', y: 425 + cursorPosition.y * 0.02 },
      {x: '7.5%', y: 100 + cursorPosition.y * 0.02 },
      {x: '10%', y: 10 + cursorPosition.y * 0.02 },
      {x: '12.5%', y: 500 + cursorPosition.y * 0.02 },
      {x: '15%', y: 560 + cursorPosition.y * 0.02 },
      {x: '17.5%', y: 75 + cursorPosition.y * 0.02 },
      {x: '20%', y: 170 + cursorPosition.y * 0.02 },
      {x: '22.5%', y: 100 + cursorPosition.y * 0.02},
      {x: '25%', y: 415 + cursorPosition.y * 0.02 },
      {x: '27.5%', y: 130 + cursorPosition.y * 0.02 },
      {x: '30%', y: 50 + cursorPosition.y * 0.02 },
      {x: '32.5%', y: 350 + cursorPosition.y * 0.02 },
      {x: '35%', y: 550 + cursorPosition.y * 0.02 },
      {x: '37.5%', y: 575 + cursorPosition.y * 0.02 },
      {x: '40%', y: 550 + cursorPosition.y * 0.02 },
      {x: '42.5%', y: 500 + cursorPosition.y * 0.02 },
      {x: '45%', y: 350 + cursorPosition.y * 0.02 },
      {x: '47.5%', y: 300 + cursorPosition.y * 0.02 },
      {x: '50%', y: 150 + cursorPosition.y * 0.02 },
      {x: '52.5%', y: 150 + cursorPosition.y * 0.02 },
      {x: '55', y: 575 + cursorPosition.y * 0.02 },
      {x: '57.5%', y: 30 + cursorPosition.y * 0.02 },
      {x: '60%', y: 480 + cursorPosition.y * 0.02 },
      {x: '62.5%', y: 500 + cursorPosition.y * 0.02 },
      {x: '65%', y: 350 + cursorPosition.y * 0.02 },
      {x: '67.5%', y: 140+ cursorPosition.y * 0.02 },
      {x: '70%', y: 150 + cursorPosition.y * 0.02 },
      {x: '72.5%', y: 15 + cursorPosition.y * 0.02 },
      {x: '75%', y: 150 + cursorPosition.y * 0.02 },
      {x: '77.5%', y: 575 + cursorPosition.y * 0.02 },
      {x: '80%', y: 30 + cursorPosition.y * 0.02 },
      {x: '82.5%', y: 480 + cursorPosition.y * 0.02 },
      {x: '85%', y: 500 + cursorPosition.y * 0.02 },
      {x: '87.5%', y: 350 + cursorPosition.y * 0.02 },
 
     

    ];

  return (
   <>
   <Header />
   
      <div className='background' 
        onMouseMove={(event) => setCursorPosition({ x: event.clientX, y: event.clientY })}
      >
      <div style={{ position: 'relative' }}>
        <img
          src={Planet}
          style={{ height: '3rem', width: '3rem', position: 'absolute', left: 200 + cursorPosition.x * 0.1, top: 300 - cursorPosition.y * 0.1 }}
        />
        <img
          src={Rocket}
          style={{ height: '2rem', width: '2rem', position: 'absolute', left: cursorPosition.x - 75, top: cursorPosition.y - 120}}
        />
      {imageLocations.map(({ x, y }) => (
        <motion.img
        animate={{
          scale: [1, 1.5, 1.5, 1, 1],
        }}
        transition={{
          duration: 10,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
        }}
          src={Star}
          style={{ height: '3rem', width: '3rem', position: 'absolute', left: x, top: y }}
        />
      ))}
    </div>
      
      <div className='middleMain'>
         <div className='topDescription'>
            Welcome! <br/> tap the orb in the middle for my portfolio 
         </div>
         <motion.div
         animate={{
            scale: [1, 1.5, 1.5, 1, 1],
            rotate: [0, 0, 180, 180, 0],
            borderRadius: ["100%", "20%", "35%", "50%", "75%"]
          }}
          transition={{
            duration: 10,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
          }}
         className='greyOrb'>    
         </motion.div>
         <div className='rotatingOrb2'></div>
         
            <motion.div 
               animate={{
               scale: [1, 1.5, 1.5, 1, 1],
               rotate: [0, 0, 180, 180, 0],
               borderRadius: ["100%", "20%", "35%", "50%", "75%"]
            }}
            transition={{
               duration: 10,
               ease: "easeInOut",
               times: [0, 0.2, 0.5, 0.8, 1],
               repeat: Infinity,
            }}
            className='greyOrb3'>
               
            </motion.div>
            <Link className ='centerOrb' to='/portfolio'></Link>
         
      </div>
   </div>
   </>
  )
}

export default Home