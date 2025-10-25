import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, Briefcase, Award } from "lucide-react";

const Resume = () => {
  const handleDownload = () => {
    // Download CV from public folder - try multiple paths
    if (typeof window !== "undefined") {
      const link = document.createElement('a');
      // For GitHub Pages with base path
      link.href = `${import.meta.env.BASE_URL}Deeghau_Vidarshana_Resume_v2.pdf`;
      link.download = 'Deeghau_Vidarshana_Resume.pdf';
      link.target = '_blank'; // Open in new tab as fallback
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <section id="resume" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Resume
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="space-y-8">
          {/* Download CV Card */}
          <Card className="p-8 shadow-medium text-center animate-scale-in border-2 border-primary/20">
            <div className="space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full">
                <Download className="text-primary" size={32} />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">
                Download My Resume
              </h3>
              <p className="text-muted-foreground max-w-md mx-auto">
                Get a comprehensive overview of my education, experience, and skills.
              </p>
              <Button size="lg" onClick={handleDownload} className="mt-4">
                <Download className="mr-2" size={20} />
                Download CV (PDF)
              </Button>
            </div>
          </Card>

          {/* Experience Timeline */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 shadow-soft hover:shadow-medium transition-smooth animate-fade-in-up border-2 border-border">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Briefcase className="text-primary" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    Data Science Intern
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">Current Position</p>
                  <p className="text-sm text-foreground leading-relaxed">
                    Working on real-world data analysis projects, developing ML models, 
                    and creating data visualizations for business insights.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 shadow-soft hover:shadow-medium transition-smooth animate-fade-in-up border-2 border-border" style={{ animationDelay: "0.1s" }}>
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Award className="text-primary" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    Academic Achievements
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">SLIIT</p>
                  <p className="text-sm text-foreground leading-relaxed">
                    Consistent high performer with focus on Data Science specialization 
                    and full-stack development coursework.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
