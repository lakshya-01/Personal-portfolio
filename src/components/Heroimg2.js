// import "./Heroimg2Styles.css"
import Myself from "../assests/Myself.jpg"

const Heroimg2 = () => {
  const handleDownload = () => {
    window.open('https://drive.google.com/file/d/1FSMYUxKlIsM3GPqS0SEmIoefrStMQzPA/view?usp=sharing', '_blank');
  };
 
  return (
    <section id="about" className=" bg-black">
      
      <div className="hero">
        <h1 id="aboutme" className="text-center text-5xl p-7"> <a href="#home">About Me</a></h1>
        {/* <div className='mask'>
             <img className='intro-img' src={coding1} alt="IntroImg"/> 
        </div> */}
        <div className="flex flex-wrap md:flex flex-col md:justify-center md:items-center align-middle justify-between items-center" >
          <div className="right md:text-center rounded-full">
            <img className="myself h-72 mx-auto justify-end rounded-full border-8" src={Myself} alt="my-self"></img>
          </div>
          <button onClick={handleDownload} className="btn-light transform px-4 py-2 text-white border-2 rounded-full border-sky-400 bg-black hover:bg-sky-400  hover:scale-110 transition duration-500 ease-in-out p-1 rounded" href="https://drive.google.com/drive/u/0/recent">Download CV</button>
          <div className="left text-4xl text-center mx-auto">
            <p> Hello, I'm Lakshya Mukhija. I'm currently studying at Indian Institute Of Technology Hyderabad.
            I'm excited to share my insights and experiences with you. Explore my website to learn more about my Portfolio. Feel free to Connect on Social Media to start a conversation !</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Heroimg2;