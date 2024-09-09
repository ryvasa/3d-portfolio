import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Project from './components/Project';
import Work from './components/Work';
function App(): JSX.Element {
  return (
    <div className="bg-primary-dark text-font-primary">
      <Navbar />
      <Hero />
      <About />
      <Work />
      <Project />
    </div>
  );
}

export default App;
