import React from 'react'
const Skills = () => {
   
    return (
        <div id='skills' className=" items-center bg-zinc-800 my-10 h-auto">
            <h1 id="aboutme" className="text-center text-5xl py-14"> <a href="#home">Skills</a></h1>
            <div className=' md:mx-52 mx-24 text-center text-2xl'>
                <p>I am extremely proficient in Front-End Development using HTML5, Cascade Style Sheets (CSS3), Bootstrap, Advance Javascript, React.Js & Vue.Js And apart from Front-End, I have good knowledge in Back-End using PHP & MySQL and continuously engage in trying to extend my skills with new technology..</p>
            </div>
            <div className = " m-16 text-2xl md:flex justify-evenly text-white">
                <div>
                <div className = "item py-5">
                <div className = "item-text">
                    <span>HTML</span>
                    <span className = " ml-56 w-full">90%</span>
                </div>
                <div className = "progress m-6 rounded-3xl bg-slate-600 w-auto ">
                    <div className = "progress-bar h-4 rounded-3xl bg-sky-400 w-10/12"></div>
                </div>
                </div>                
                <div className = "item py-5">
                <div className = "item-text">
                    <span>CSS</span>
                    <span className = " ml-60 w-full">90%</span>
                </div>
                <div className = "progress m-6 rounded-3xl bg-slate-600 w-auto ">
                    <div className = "progress-bar h-4 rounded-3xl bg-sky-400 w-10/12"></div>
                </div>
                </div>                
                <div className = "item py-5">
                <div className = "item-text">
                    <span>Javascript</span>
                    <span className = " ml-48 w-full">60%</span>
                </div>
                <div className = "progress m-6 rounded-3xl bg-slate-600 w-auto ">
                    <div className = "progress-bar h-4 rounded-3xl bg-sky-400 w-7/12"></div>
                </div>
                </div>   
                </div>
                <div>            
                <div className = "item py-5">
                <div className = "item-text">
                    <span>ReactJS</span>
                    <span className = " ml-48 w-full">70%</span>
                </div>
                <div className = "progress m-6 rounded-3xl bg-slate-600 w-auto ">
                    <div className = "progress-bar h-4 rounded-3xl bg-sky-400 w-8/12"></div>
                </div>
                </div>                
                <div className = "item py-5">
                <div className = "item-text">
                    <span>NodeJS</span>
                    <span className = " ml-48 w-full">50%</span>
                </div>
                <div className = "progress m-6 rounded-3xl bg-slate-600 w-auto ">
                    <div className = "progress-bar h-4 rounded-3xl bg-sky-400 w-1/2"></div>
                </div>
                </div>                
                <div className = "item py-5">
                <div className = "item-text">
                    <span>C++</span>
                    <span className = " ml-60 w-full">95%</span>
                </div>
                <div className = "progress m-6 rounded-3xl bg-slate-600 w-auto ">
                    <div className = "progress-bar h-4 rounded-3xl bg-sky-400 w-11/12"></div>
                </div>
                </div>                
                </div>               
            </div>
        </div>
    )
};
  
  export default Skills;