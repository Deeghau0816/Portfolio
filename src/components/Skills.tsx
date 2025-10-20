import { Code2, Database, Smartphone, TrendingUp, GitBranch, Brain } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      icon: Code2,
      skills: ["Python", "Java", "JavaScript", "R", "Kotlin"],
    },
    {
      category: "Web Development",
      icon: Database,
      skills: ["React", "Node.js", "Express", "MongoDB", "SQL"],
    },
    {
      category: "Mobile Development",
      icon: Smartphone,
      skills: ["Android", "Kotlin", "Mobile UI/UX"],
    },
    {
      category: "Data Science",
      icon: TrendingUp,
      skills: ["Data Visualization", "Machine Learning", "Statistical Analysis"],
    },
    {
      category: "Tools & Technologies",
      icon: GitBranch,
      skills: ["Git", "GitHub", "REST APIs", "Agile Methodologies"],
    },
    {
      category: "Core Competencies",
      icon: Brain,
      skills: ["Problem Solving", "Team Collaboration", "Project Management"],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={category.category}
                className="bg-card p-6 rounded-xl shadow-soft hover:shadow-medium transition-smooth border-2 border-border hover:border-primary/30 animate-fade-in-up group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-smooth">
                    <Icon className="text-primary" size={24} />
                  </div>
                  <h3 className="font-semibold text-foreground text-lg">
                    {category.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-muted text-foreground text-sm rounded-full hover:bg-primary/10 hover:text-primary transition-smooth"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
