import React,{useRef} from "react";
import "./Internship.scss";

import { internship } from "../../Data/data";
import { animate, motion , useInView} from "framer-motion";

const variants={
  initial:{
    x:-500,
    y:100,
    opacity:0
  },
  animate:{
    x:0,
    opacity:1,
    y:0,
    transition:{
      duration:1,
      staggerChildren:0.1
    }
  }
}
const Internship = () => {
  const ref = useRef();
  const isInView = useInView(ref, {margin:'-100px'})
  return (
    <motion.div className="internship" variants={variants} initial="initial" animate="animate" ref={ref}>
      <motion.div className="progress" variants={variants}>
      <h1 className="title">Internship</h1>
      <div className="progressBar"></div>
      </motion.div>

      <motion.div className="internship_content" variants={variants}>
        <motion.div className="wrapper" variants={variants}>
          <motion.div className="imageContainer" variants={variants}>
            <img src="/internship_image.png" alt="" />
          </motion.div>
          <motion.div className="contentDetails" variants={variants}>
            <h2>{internship.company}</h2>
            <h3>{internship.role}</h3>
            <p>{internship.description}</p>
            <button><a href={internship.link}>View Certificate</a></button>
          </motion.div>
        </motion.div>
      
      </motion.div>
    </motion.div>
  );
};

export default Internship;
