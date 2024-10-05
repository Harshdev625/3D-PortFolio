import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import Achievements from "./components/Achievements";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <main className="relative z-10">
          <About />
          <Experience />
          <Tech />
          <Works />
          <Achievements />
        </main>
        <footer className="relative z-0">
          <Contact />
          <StarsCanvas />
        </footer>
      </div>
    </BrowserRouter>
  );
};

export default App;
