
import Hero from "../components/Hero";
import About from "../components/About";
import Events from "../components/Events";
import Team from "../components/Team";
import Contact from "../components/Contact";
import Navigation from "../components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Events />
      <Team />
      <Contact />
    </div>
  );
};

export default Index;
