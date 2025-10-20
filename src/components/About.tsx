import { GraduationCap } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="animate-fade-in-up space-y-4">
            <p className="text-base sm:text-lg text-foreground leading-relaxed">
              I'm a passionate and creative IT undergraduate from Sri Lanka, specializing in 
              <span className="font-semibold text-primary"> Data Science</span> and 
              <span className="font-semibold text-primary"> full-stack web development</span>.
            </p>
            <p className="text-base sm:text-lg text-foreground leading-relaxed">
              I love transforming complex problems into simple, elegant solutions. With a strong 
              foundation in both data analytics and modern web technologies, I bridge the gap 
              between data insights and user-friendly applications.
            </p>
          </div>

          <Card className="p-6 shadow-medium hover:shadow-large transition-smooth animate-scale-in bg-background border-2">
            <div className="flex items-start space-x-4">
              <div className="bg-primary/10 p-3 rounded-lg">
                <GraduationCap className="text-primary" size={32} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Education
                </h3>
                <p className="text-foreground font-medium">
                  SLIIT – Faculty of Computing
                </p>
                <p className="text-muted-foreground">
                  2nd Year, Data Science Specialization
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Sri Lanka Institute of Information Technology
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
