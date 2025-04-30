
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import { useState } from "react";

// Define project data with images
const projectsData = [
  {
    title: "EJ-InsightX",
    description: "Python-based ATM Electronic Journal (EJ) files parser that extracts valuable transaction data, providing comprehensive insights through data visualization and analysis.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    tags: ["Python", "Data Analysis", "Parsing", "Visualization"],
    github: "#",
    demo: "#",
  },
  {
    title: "Retail Insights Explorer",
    description: "E-commerce data analysis platform that helps businesses identify sales trends, customer behavior patterns, and inventory optimization opportunities through interactive dashboards.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    tags: ["Python", "Pandas", "Data Visualization", "Dashboard"],
    github: "#",
    demo: "#",
  },
  {
    title: "VoteAnalytica",
    description: "Election data visualization web app that presents voting patterns, demographic analysis, and result projections through intuitive interactive charts and geographical maps.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    tags: ["Django", "D3.js", "Data Analysis", "Visualization"],
    github: "#",
    demo: "#",
  },
  {
    title: "QuizWhiz",
    description: "A robust quiz and competition platform with college/school-wide and classroom features. Designed the backend and logic; used for interschool quizzes (mock UN, science olympiads, etc).",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    tags: ["Python", "Django", "Quiz Platform", "Education"],
    github: "#",
    demo: "#",
  },
];

export function ProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 relative">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter">My Projects</h2>
          <div className="h-1 w-12 bg-primary mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, index) => (
            <Card 
              key={index}
              className={`border border-border/40 bg-card/50 backdrop-blur-sm transition-all duration-300 h-full flex flex-col ${
                hoveredProject === index ? "shadow-xl translate-y-[-5px] border-primary/50" : ""
              }`}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/90"></div>
              </div>
              <CardHeader className="p-4 pb-0">
                <CardTitle className="text-xl">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-2 flex-grow">
                <p className="text-sm text-muted-foreground">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0 flex gap-2">
                <Button variant="outline" size="sm" className="gap-1 flex-1" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                    Code
                  </a>
                </Button>
                <Button variant="default" size="sm" className="gap-1 flex-1" asChild>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4" />
                    Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
