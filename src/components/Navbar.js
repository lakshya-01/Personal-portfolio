import React, {useState} from "react";
import "./Navbarstyles.css"
import { Link } from 'react-router-dom'

import {FaBars, FaTimes} from "react-icons/fa";

 const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [color, setColor] = useState(false);
  const changeColor = () =>{
    if(window.scrollY >= 100){
      setColor(true);
    }
    else{
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);
 
  return (
    <div className={color ? " header header-bg" : "header"}>
      <a className="link" href="#home">
        <h2 className=" text-white">Portfo</h2>
        <h1>lio .</h1>
      </a>
      <ul className={click ? "navbar active" : "navbar"}>
        <li className="text-white hover:text-sky-400" onClick = {handleClick}><a href="#home">Home</a></li>
        <li className="text-white hover:text-sky-400" onClick = {handleClick}><a href="#aboutme">About Us</a></li>
        <li className="text-white hover:text-sky-400" onClick = {handleClick}><a href="#skills">Skills</a></li>
        <li className="text-white hover:text-sky-400" onClick = {handleClick}><a href="#projects">Projects</a></li>
        <li className="text-white hover:text-sky-400" onClick = {handleClick}><a href="#contact">Contact Us</a></li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes className=" cursor-pointer" size={30} style={{color: "white"}} />
        ) : (
          <FaBars className=" cursor-pointer" size={30} style={{color: "white"}}/>
        )}
      </div>
    </div> 
  );
}
export default Navbar;
