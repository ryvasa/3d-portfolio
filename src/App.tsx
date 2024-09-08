import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
function App(): JSX.Element {
  return (
    <div className="bg-primary-dark">
      <Navbar />
      <Hero />
      <About />
    </div>
  );
}

export default App;
