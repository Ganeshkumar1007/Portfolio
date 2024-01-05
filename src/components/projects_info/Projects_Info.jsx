import React, { useRef } from "react";
import "./Projects_Info.scss";
import { projects } from "../../Data/data";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset:['start start', 'end start']
  });
  const y = useTransform(scrollYProgress, [0,1],[-300,300]);


  return( <section >
       <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
          <img src={item.imageUrl} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <button><a href={item.githubLink}>GitHub</a></button>
          </motion.div>
          </div>
       </div>
    </section>);
};

const Projects_Info = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX= useSpring(scrollYProgress, {
    stiffness: 100,
    damping:30,
  })
  return (
    <div className="projects_Info">
      <div className="progress">
        <h1>Projects</h1>
        <motion.div style={{scaleX}} className="progressBar"></motion.div>
      </div>
      {projects.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Projects_Info;
