import Home from "./pages/Home "
import Header from "./components/Header"
import Footer from "./components/Footer"
import { Route, Routes, BrowserRouter } from "react-router-dom";
import About from "./components/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact"
import Resume from "./pages/Resume";


function App() {

return (
	<BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/Resume" element={<Resume/>} />
		  </Routes>
        <Footer />
    </BrowserRouter>
);
}

export default App;
