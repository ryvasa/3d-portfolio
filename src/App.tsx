import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Project from './components/Project';
function App(): JSX.Element {
  return (
    <div className="bg-primary-dark text-font-primary">
      <Navbar />
      <Hero />
      <About />

      <Project />
    </div>
  );
}

export default App;
