import About from "../components/About"
import Header from '../components/Header';
import Skills from "../components/Skills";
import Projects from "./Projects";
import Navbarmenu from '../components/Navbarmenu/Navbarmenu'
function Home() {
  return (
    <div>
      
      <About/>
      <div className="pt-16"> <Skills/> </div>
      <Projects/>
      
   </div>
    
  )
}

export default Home 
