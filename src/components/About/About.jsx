import React from 'react'
import "./About.scss"
import { motion } from 'framer-motion'
import {description} from "../../Data/data.js"

const textVariants ={
  initial:{
    x:-500,
    opacity:0,
  },
  animate:{
    x:0,
    opacity:1,
    transition:{
      duration:1,
      staggerChildren:0.1,
    }
  },
  scrollButton:{
    opacity:0,
    y:10,
    transition:{
      duration: 2,
      repeat:Infinity
    }
  }

}
const imageVariants={
  initial:{ scale: 0 },
  animate:{ rotate: 360, scale: 1 },
  transition:{
    delay: 0.5,
    type: "spring",
    stiffness: 400,
    damping: 20
  }
}

const slideVariants ={
  initial:{
    x:0,
 
  },
  animate:{
    x:"-220%",
   
    transition:{
      repeat:Infinity,
      repeatType:"mirror",
      duration:20
      
    }
  },
  scrollButton:{
    opacity:0,
    y:10,
    transition:{
      duration: 2,
      repeat:Infinity
    }
  }

}
const About = () => {
  return (
    <div className='about'>
      <div className="wrapper">
      <motion.div className="textContainer" variants = {textVariants} initial="initial" animate="animate">
        <motion.h2 variants={textVariants}>GANESH KUMAR</motion.h2>
        <motion.h1 variants={textVariants}>Java Developer and Web Developer</motion.h1>
        <motion.p  variants={textVariants}>{description}</motion.p>
        <motion.div variants={textVariants} className="buttons">
          <motion.button variants={textVariants}><a href='/#Projects'>See the Latest Works</a></motion.button>
          <motion.button variants={textVariants}><a href='https://drive.google.com/drive/folders/13TyIeQccon5jXVNQheG5m5Up4ae-AVUU?usp=sharing'>See My Resume</a></motion.button>
        </motion.div>
        <motion.img ariants={textVariants} animate="scrollButton" variants={textVariants} src="/scroll.webp" alt="" />
      </motion.div>
      <motion.div className="slidingTextContainer" variants={slideVariants} initial="initial" animate="animate" >
        Java-Developer Gamer
      </motion.div>
      <motion.div className='imageContainer'  variants={imageVariants} initial="initial" animate="animate">
            <img src="/Logo.png" alt="" />
        </motion.div>
      </div>
        
    </div>
  )
}

export default About