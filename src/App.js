import logo from './logo.svg';
import './App.css';
import Navbar from './components/NavBar/NavBar'
import Title from './components/Title/Title';
import Hero from './components/Hero/Hero';
import Slider from './components/Slider/Slider';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import NavBar1 from './components/NavBar1/NavBar1';


function App() {
  return (
    <div className="App">
      <NavBar1/>
      <Hero/>
      <About/>
      <Title title={"Contact Me"} subtitle={"If you have any queries regarding to this web-page feel free to ask"}/>
      <Contact/>
    </div>
  );
}

export default App;
