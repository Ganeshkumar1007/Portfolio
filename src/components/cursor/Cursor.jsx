import React, { useEffect, useState } from 'react'
import "./Cursor.scss"
import { motion } from 'framer-motion';
const Cursor = () => {
    const [position, setPosition] = useState({x:0,j:0});

    useEffect(()=>{
        const mouseMove=(e)=>{
            setPosition({x:e.clientX,y:e.clientY});


        };
        window.addEventListener("mousemove",mouseMove);
        return ()=>{
            window.removeEventListener("movemove", mouseMove)
        };
        
    },[])
    console.log(position);
   
  return (
    <motion.div className='cursor' animate={{x: position.x+10, y:position.y+10}}></motion.div>
  )
}

export default Cursor