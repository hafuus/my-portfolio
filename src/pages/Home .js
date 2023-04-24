import About from "../components/About"
import Skills from "../components/Skills";
import Projects from "./Projects";
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
