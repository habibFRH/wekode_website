import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Orb from "./components/Orb";
import CurvedTextSection from "./components/CurvedTextSection";
import SpotlightSection from "./components/SpotlightSection";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="w-full min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <CurvedTextSection />
      <SpotlightSection />
      <Portfolio />
      <Testimonials />
      <Contact />
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="w-full h-full pointer-events-auto">
          <Orb
            hoverIntensity={0.5}
            rotateOnHover={true}
            hue={0}
            forceHoverState={false}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
