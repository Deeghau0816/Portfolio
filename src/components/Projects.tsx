import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "SafeZone Disaster Management System",
      description:
        "A comprehensive MERN Stack application for real-time disaster alerts and management with weather API integration for predictive analytics.",
      techStack: ["React", "Node.js", "Express", "MongoDB", "Weather API"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop",
    },
    {
      title: "TravelMania Mobile App",
      description:
        "Android tourism application showcasing Sri Lanka's beauty with interactive maps, destination guides, and personalized travel recommendations.",
      techStack: ["Kotlin", "Android SDK", "Firebase", "Google Maps API"],
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&auto=format&fit=crop",
    },
    {
      title: "TravelMania Web Application",
      description:
        "Full-stack web platform for exploring Sri Lankan tourism with dynamic content management, user authentication, and booking features.",
      techStack: ["Java Servlets", "JSP", "MySQL", "HTML/CSS", "JavaScript"],
      image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&auto=format&fit=crop",
    },
    {
      title: "Online Pharmacy System",
      description:
        "E-commerce web application for online pharmacy with prescription management, order processing, and secure payment integration.",
      techStack: ["PHP", "MySQL", "Bootstrap", "jQuery", "HTML/CSS"],
      image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=800&auto=format&fit=crop",
    },
    {
      title: "WellTrack",
      description:
        "Android wellness tracker helping users monitor mood patterns, hydration levels, and daily habits with intuitive data visualization.",
      techStack: ["Kotlin", "SQLite", "MPAndroidChart", "Material Design"],
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&auto=format&fit=crop",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="overflow-hidden shadow-medium hover:shadow-large transition-smooth group animate-fade-in-up border-2 border-border hover:border-primary/30"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent opacity-60"></div>
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-foreground">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-primary/10 text-primary text-xs font-medium rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 pt-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <ExternalLink size={16} className="mr-1" />
                    View
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Github size={16} />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
