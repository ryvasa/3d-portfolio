import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Project from "./components/Project";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Background from "./components/Background";
function App(): JSX.Element {
  return (
    <div className="bg-primary-dark text-font-primary">
      <Navbar />
      <Hero />
      <About />
      <Project />
      <div className="relative">
        {/*
         */}
        <Background />
        <Skills />
        <Experience />
      </div>
      {/*
      <TimelineDemo />
       */}
      <Contact />
    </div>
  );
}

export default App;
