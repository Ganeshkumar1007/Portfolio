import React, { useState } from "react";
import { motion } from "framer-motion";



const Test = () => {

  const [open, setOpen] = useState(false);

    const variants ={
        visible : {opacity:1},
        hidden : {opacity: 0}
    }
  return (
    <div className="course">
      <motion.div
        className="box"
        // initial={{opacity:0.5, scale: 0.5}}
        transition={{ duration: 2}}
        variants={variants}
        // whileHover={{opacity:1, scale : 1}}
        animate={open ? "visbile" : "hidden"}
      ></motion.div>
      <button onClick={()=> setOpen(prev => !prev)}>Click</button>
    </div>
  );
};

export default Test;
