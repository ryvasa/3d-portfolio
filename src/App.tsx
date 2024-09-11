import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Project from "./components/Project";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Background from "./components/Background";
import { TimelineDemo } from "./components/TimeLine";
function App(): JSX.Element {
  return (
    <div className="bg-primary-dark text-font-primary">
      <Navbar />
      <Hero />
      <About />
      <div className="relative">
        {/*
        <Background />
         */}
        <Project />
        <Skills />
      </div>
      <Work />
      {/*
      <TimelineDemo />
       */}
      <Contact />
    </div>
  );
}

export default App;
