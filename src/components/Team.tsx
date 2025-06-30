
import { Linkedin, Github, Twitter } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Team = () => {
  const teamMembers = [
    {
      name: "Arjun Sharma",
      role: "President",
      image: "bg-gradient-to-br from-blue-500 to-purple-600",
      bio: "Final year CSE student passionate about AI and entrepreneurship.",
      social: { linkedin: "#", github: "#", twitter: "#" }
    },
    {
      name: "Priya Patel",
      role: "Vice President",
      image: "bg-gradient-to-br from-pink-500 to-rose-600",
      bio: "Leading innovation initiatives and community building.",
      social: { linkedin: "#", github: "#", twitter: "#" }
    },
    {
      name: "Rahul Kumar",
      role: "Technical Lead",
      image: "bg-gradient-to-br from-green-500 to-teal-600",
      bio: "Full-stack developer with expertise in modern web technologies.",
      social: { linkedin: "#", github: "#", twitter: "#" }
    },
    {
      name: "Sneha Reddy",
      role: "Events Coordinator",
      image: "bg-gradient-to-br from-orange-500 to-red-600",
      bio: "Organizing amazing events and building community connections.",
      social: { linkedin: "#", github: "#", twitter: "#" }
    },
    {
      name: "Vikram Singh",
      role: "Marketing Head",
      image: "bg-gradient-to-br from-purple-500 to-indigo-600",
      bio: "Creative strategist driving club's digital presence and outreach.",
      social: { linkedin: "#", github: "#", twitter: "#" }
    },
    {
      name: "Ananya Gupta",
      role: "Finance Lead",
      image: "bg-gradient-to-br from-cyan-500 to-blue-600",
      bio: "Managing club finances and securing sponsorships for events.",
      social: { linkedin: "#", github: "#", twitter: "#" }
    }
  ];

  return (
    <section id="team" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-space font-bold mb-6">
            Meet Our <span className="gradient-text">Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our dedicated team of student leaders works tirelessly to create 
            opportunities, foster innovation, and build a thriving community 
            of creators and entrepreneurs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="glass-effect border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 group overflow-hidden"
            >
              <CardContent className="p-0">
                {/* Avatar */}
                <div className={`h-64 ${member.image} relative flex items-center justify-center`}>
                  <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <span className="text-4xl font-bold text-white">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {member.bio}
                  </p>

                  {/* Social Links */}
                  <div className="flex space-x-3">
                    <a
                      href={member.social.linkedin}
                      className="w-8 h-8 glass-effect rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors group-hover:scale-110 transition-transform"
                    >
                      <Linkedin className="w-4 h-4 text-primary" />
                    </a>
                    <a
                      href={member.social.github}
                      className="w-8 h-8 glass-effect rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors group-hover:scale-110 transition-transform"
                    >
                      <Github className="w-4 h-4 text-primary" />
                    </a>
                    <a
                      href={member.social.twitter}
                      className="w-8 h-8 glass-effect rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors group-hover:scale-110 transition-transform"
                    >
                      <Twitter className="w-4 h-4 text-primary" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Join Team CTA */}
        <div className="text-center mt-16">
          <div className="glass-effect p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 gradient-text">
              Want to Join Our Team?
            </h3>
            <p className="text-muted-foreground mb-6">
              We're always looking for passionate individuals who want to make 
              a difference. Join us and help shape the future of innovation at JSS.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:scale-105 transition-transform glow-effect">
                Apply Now
              </button>
              <button className="px-6 py-3 glass-effect border border-primary/30 rounded-lg font-medium hover:bg-white/10 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
