import Footer from './components/Footer';
import Heroimg from './components/Heroimg';
import Heroimg2 from './components/Heroimg2';
import Navbar from './components/Navbar';
import './index.css';
import Skills from './components/Skills';
import Projects from './components/Projects';


function App() {
  return (
  <div className='bg-scroll' >
    <Navbar/>
    <Heroimg/>
    <Heroimg2/>
    {/* <About3/>
    <About4/>
    <About/>
    <About2/> */}
    <Skills/>
    <Projects/>
    <Footer/>
  </div>
  
  );
}

export default App;
