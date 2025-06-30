
import { Calendar, MapPin, Clock, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Events = () => {
  const events = [
    {
      title: "TechFest 2024",
      date: "Jan 15, 2024",
      time: "10:00 AM",
      location: "Main Auditorium",
      attendees: "500+",
      description: "Annual technology festival featuring competitions, workshops, and tech talks from industry experts.",
      status: "upcoming",
      image: "bg-gradient-to-br from-blue-500 to-purple-600"
    },
    {
      title: "Startup Pitch Night",
      date: "Jan 22, 2024",
      time: "6:00 PM",
      location: "Innovation Lab",
      attendees: "100+",
      description: "Present your startup ideas to investors and mentors. Win prizes and get funding opportunities.",
      status: "upcoming",
      image: "bg-gradient-to-br from-green-500 to-teal-600"
    },
    {
      title: "AI/ML Workshop",
      date: "Jan 8, 2024",
      time: "2:00 PM",
      location: "Computer Lab",
      attendees: "150+",
      description: "Hands-on workshop on Machine Learning fundamentals and practical AI applications.",
      status: "past",
      image: "bg-gradient-to-br from-pink-500 to-rose-600"
    },
    {
      title: "Hackathon 48hrs",
      date: "Dec 15, 2023",
      time: "9:00 AM",
      location: "Tech Hub",
      attendees: "200+",
      description: "48-hour coding marathon to build innovative solutions for real-world problems.",
      status: "past",
      image: "bg-gradient-to-br from-orange-500 to-red-600"
    }
  ];

  const upcomingEvents = events.filter(event => event.status === "upcoming");
  const pastEvents = events.filter(event => event.status === "past");

  return (
    <section id="events" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-space font-bold mb-6">
            Our <span className="gradient-text">Events</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From workshops to hackathons, we organize events that inspire learning, 
            collaboration, and innovation among our community members.
          </p>
        </div>

        {/* Upcoming Events */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">
            <span className="gradient-text">Upcoming Events</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {upcomingEvents.map((event, index) => (
              <Card
                key={index}
                className="glass-effect border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 overflow-hidden group"
              >
                <div className={`h-48 ${event.image} relative`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    Upcoming
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-foreground">
                    {event.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{event.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-primary" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-primary" />
                      <span>{event.attendees}</span>
                    </div>
                  </div>
                  
                  <Button className="w-full glow-effect hover:scale-105 transition-transform">
                    Register Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Past Events */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">
            <span className="text-muted-foreground">Past Events</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pastEvents.map((event, index) => (
              <Card
                key={index}
                className="glass-effect border-muted/20 hover:border-muted/40 transition-all duration-300 hover:scale-105 overflow-hidden opacity-75 hover:opacity-100"
              >
                <div className={`h-48 ${event.image} relative`}>
                  <div className="absolute inset-0 bg-black/40"></div>
                  <div className="absolute top-4 right-4 bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm font-medium">
                    Completed
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-foreground">
                    {event.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{event.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-muted-foreground" />
                      <span>{event.attendees}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
