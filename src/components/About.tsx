
import { Lightbulb, Users, Trophy, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const features = [
    {
      icon: Lightbulb,
      title: "Innovation Hub",
      description: "A space where creative minds come together to brainstorm, prototype, and bring revolutionary ideas to life."
    },
    {
      icon: Users,
      title: "Community",
      description: "Join a vibrant community of entrepreneurs, developers, designers, and visionaries from across JSS College."
    },
    {
      icon: Trophy,
      title: "Excellence",
      description: "We strive for excellence in everything we do, from hackathons to workshops, fostering a culture of achievement."
    },
    {
      icon: Target,
      title: "Mission Driven",
      description: "Our mission is to empower students with skills, knowledge, and opportunities to become tomorrow's leaders."
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-space font-bold mb-6">
            About <span className="gradient-text">IIC-JSS</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            The Innovation & Incubation Club at JSS College is more than just a club – 
            it's a launchpad for dreams, a catalyst for change, and a home for innovators 
            who dare to think differently and create impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glass-effect border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 group"
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-background" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="glass-effect p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 gradient-text">
              Our Vision
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To be the leading innovation ecosystem in JSS College that nurtures entrepreneurial 
              mindset, fosters technological advancement, and creates a generation of problem-solvers 
              who will shape the future of our society through meaningful innovation and sustainable solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
