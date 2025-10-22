import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";
import heroPortrait from "@/assets/profile-photo.jpg";

const Hero = () => {
  const handleDownloadCV = () => {
    // Download CV from public folder
    if (typeof window !== "undefined") {
      const link = document.createElement('a');
      link.href = '/Portfolio/Deeghau_Vidarshana_Resume.pdf';
      link.download = 'Deeghau_Vidarshana_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const handleContactClick = () => {
    if (typeof document !== "undefined") {
      document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in-up space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Hi, I'm{" "}
                <span className="text-primary">Deeghau Vidarshana</span>
              </h1>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-secondary">
                Data Science Intern | MERN Stack Developer
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-xl">
                Turning data and ideas into impactful digital experiences.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" onClick={handleDownloadCV}>
                <Download className="mr-2" size={20} />
                Download CV
              </Button>
              <Button variant="outline" size="lg" onClick={handleContactClick}>
                <Mail className="mr-2" size={20} />
                Contact Me
              </Button>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="flex justify-center lg:justify-end animate-scale-in">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-primary/10 rounded-3xl transform rotate-3"></div>
              <img
                src={heroPortrait}
                alt="Deeghau Vidarshana"
                className="relative rounded-3xl shadow-large w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
