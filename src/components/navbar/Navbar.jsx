import React from "react";
import { motion } from "framer-motion";
import "./Navbar.scss";
import Sidebar from "../sidebar/Sidebar";
const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar/>
      <div className="wrapper">
        <motion.span initial={{ opacity: 0, scale: 0.5 }}
        animate={{opacity:1, scale: 1}} transition={{duration:0.5}} className="navbar_span"
        >
          Portfolio
        </motion.span>
        <div className="social">
          <button><a href="https://github.com/Ganeshkumar1007">Github Profile</a></button>
          <button><a href="https://www.linkedin.com/in/ganesh-kumar-9988b8205/">LinkedIn Profile</a></button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
