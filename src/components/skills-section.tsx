
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import {
  Code,
  Database,
  FileText,
  Layers,
  Terminal,
  Wrench,
} from "lucide-react";

// Updated skill data with image URLs for official logos
const newSkills = {
  languages: [
    { 
      name: "Java", 
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
      level: 90 
    },
    { 
      name: "Python",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      level: 85 
    },
    { 
      name: "JavaScript",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
      level: 82 
    },
    { 
      name: "TypeScript",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
      level: 80 
    },
  ],
  basic: [
    { 
      name: "C++",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg",
      level: 65 
    },
    { 
      name: "HTML",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
      level: 75 
    },
    { 
      name: "CSS",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
      level: 70 
    },
    { name: "Shell Scripting", icon: <Terminal size={24} />, level: 60 },
    { 
      name: "Linux",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg",
      level: 75 
    },
    { name: "Bash", icon: <Terminal size={24} />, level: 62 },
    { name: "LaTeX", icon: <FileText size={24} />, level: 75 },
  ],
  frameworks: [
    { 
      name: "Django",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/django/django-plain.svg",
      level: 80 
    },
    { 
      name: "React",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
      level: 80 
    },
    { 
      name: "Next.js",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg",
      level: 77 
    },
  ],
  tools: [
    { 
      name: "Git",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg",
      level: 85 
    },
    { 
      name: "VS Code",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg",
      level: 90 
    },
    { name: "Visual Studio", icon: <Wrench size={24} />, level: 85 },
    { 
      name: "PyCharm",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/pycharm/pycharm-original.svg",
      level: 80 
    },
    { 
      name: "IntelliJ",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/intellij/intellij-original.svg",
      level: 85 
    },
    { name: "Excel", icon: <Wrench size={24} />, level: 91 },
    { name: "Power BI", icon: <Wrench size={24} />, level: 85 },
  ],
  libraries: [
    { name: "pandas", icon: <FileText size={24} />, level: 90 },
    { name: "NumPy", icon: <FileText size={24} />, level: 85 },
    { name: "Matplotlib", icon: <FileText size={24} />, level: 80 },
    { name: "seaborn", icon: <FileText size={24} />, level: 75 },
    { name: "scikit-learn", icon: <FileText size={24} />, level: 85 },
    { name: "TensorFlow", icon: <FileText size={24} />, level: 70 },
    { name: "Plotly", icon: <FileText size={24} />, level: 75 },
  ],
  databases: [
    { 
      name: "MySQL",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg",
      level: 85 
    },
    { 
      name: "MongoDB",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
      level: 75 
    },
  ],
};

const SkillCard = ({ name, icon, level }: { name: string; icon: string | JSX.Element; level: number }) => (
  <Card className="overflow-hidden transition-all hover:shadow-lg">
    <CardContent className="p-4 flex flex-col items-center gap-2">
      <div className="w-12 h-12 flex items-center justify-center">
        {typeof icon === 'string' ? (
          <img src={icon} alt={name} className="w-10 h-10" />
        ) : (
          icon
        )}
      </div>
      <h3 className="font-medium text-center">{name}</h3>
      <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
        <div
          className="h-full bg-primary rounded-full transition-all duration-500"
          style={{ width: `${level}%` }}
        />
      </div>
      <span className="text-sm text-muted-foreground">{level}%</span>
    </CardContent>
  </Card>
);

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 relative">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter">My Skills</h2>
          <div className="h-1 w-12 bg-primary mt-4"></div>
        </div>

        <Tabs defaultValue="all" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 mb-8">
            <TabsTrigger value="all" className="flex items-center gap-2 capitalize">
              <FileText className="h-5 w-5" />
              <span className="hidden sm:inline">All Skills</span>
            </TabsTrigger>
            {Object.keys(newSkills).map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                className="flex items-center gap-2 capitalize"
              >
                {category === "languages" && <Code className="h-5 w-5" />}
                {category === "basic" && <Terminal className="h-5 w-5" />}
                {category === "frameworks" && <Layers className="h-5 w-5" />}
                {category === "tools" && <Wrench className="h-5 w-5" />}
                {category === "libraries" && <FileText className="h-5 w-5" />}
                {category === "databases" && <Database className="h-5 w-5" />}
                <span className="hidden sm:inline">{category}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="all">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {Object.values(newSkills).flat().map((skill) => (
                <SkillCard key={skill.name} {...skill} />
              ))}
            </div>
          </TabsContent>

          {Object.entries(newSkills).map(([category, skills]) => (
            <TabsContent key={category} value={category}>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {skills.map((skill) => (
                  <SkillCard key={skill.name} {...skill} />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
