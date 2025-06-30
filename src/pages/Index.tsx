
import { useState, useEffect } from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Events from "../components/Events";
import Team from "../components/Team";
import Contact from "../components/Contact";
import Navigation from "../components/Navigation";
import Loading from "../components/Loading";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

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
