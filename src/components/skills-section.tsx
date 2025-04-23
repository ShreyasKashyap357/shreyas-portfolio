
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Code,
  Database,
  FileCode,
  Layers,
  Terminal,
  Wrench,
  // New icon for All Skills
} from "lucide-react";

const newSkills = {
  // Adding additional user-provided skills (as example entries, adjust as needed)
  languages: [
    { name: "Java", level: 90 },
    { name: "Python", level: 85 },
    { name: "JavaScript", level: 82 },
    { name: "TypeScript", level: 80 },
  ],
  basic: [
    { name: "C++", level: 65 },
    { name: "HTML", level: 75 },
    { name: "CSS", level: 70 },
    { name: "Shell Scripting", level: 60 },
    { name: "Linux", level: 75 },
    { name: "Bash", level: 62 },
    { name: "LaTeX", level: 75 },
  ],
  frameworks: [
    { name: "Django", level: 80 },
    { name: "React", level: 80 },
    { name: "Next.js", level: 77 },
  ],
  tools: [
    { name: "Git", level: 85 },
    { name: "VS Code", level: 90 },
    { name: "Visual Studio", level: 85 },
    { name: "PyCharm", level: 80 },
    { name: "IntelliJ", level: 85 },
    { name: "Excel", level: 91 },
    { name: "Power BI", level: 85 },
  ],
  libraries: [
    { name: "pandas", level: 90 },
    { name: "NumPy", level: 85 },
    { name: "Matplotlib", level: 80 },
    { name: "seaborn", level: 75 },
    { name: "scikit-learn", level: 85 },
    { name: "TensorFlow", level: 70 },
    { name: "Plotly", level: 68 },
  ],
  databases: [
    { name: "MySQL", level: 85 },
    { name: "MongoDB", level: 75 },
    { name: "PostgreSQL", level: 78 },
  ],
};

const allSkillList = [
  ...newSkills.languages,
  ...newSkills.basic,
  ...newSkills.frameworks,
  ...newSkills.tools,
  ...newSkills.libraries,
  ...newSkills.databases,
];

// Map categories to icons
const categoryIcons = {
  all: <FileCode className="h-5 w-5" />,
  languages: <Code className="h-5 w-5" />,
  basic: <Terminal className="h-5 w-5" />,
  frameworks: <Layers className="h-5 w-5" />,
  tools: <Wrench className="h-5 w-5" />,
  libraries: <FileCode className="h-5 w-5" />,
  databases: <Database className="h-5 w-5" />,
};

// Skill component with progress bar
const SkillItem = ({ name, level }: { name: string; level: number }) => {
  return (
    <div className="space-y-2">
      <div className="flex justify-between">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-sm text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 w-full bg-secondary/50 rounded-full overflow-hidden">
        <div
          className="h-full bg-primary rounded-full transition-all duration-500"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
};

export function SkillsSection() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section id="skills" className="py-20 relative">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter">My Skills</h2>
          <div className="h-1 w-12 bg-primary mt-4"></div>
        </div>

        <Tabs defaultValue="all" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 mb-8">
            <TabsTrigger
              value="all"
              className="flex items-center gap-2 capitalize"
            >
              {categoryIcons["all"]}
              <span className="hidden sm:inline">All Skills</span>
            </TabsTrigger>
            {Object.keys(newSkills).map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                className="flex items-center gap-2 capitalize"
              >
                {categoryIcons[category as keyof typeof categoryIcons]}
                <span className="hidden sm:inline">{category}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="all" className="space-y-6">
            <Card className="border border-border/40 bg-card/50 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {allSkillList.map((skill) => (
                    <SkillItem
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
            <div className="flex flex-wrap gap-2 justify-center">
              {allSkillList.map((skill) => (
                <Badge
                  key={skill.name}
                  variant={hoveredSkill === skill.name ? "default" : "outline"}
                  className="text-sm py-1 transition-all duration-300"
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  {skill.name}
                </Badge>
              ))}
            </div>
          </TabsContent>

          {Object.entries(newSkills).map(([category, skills]) => (
            <TabsContent key={category} value={category} className="space-y-6">
              <Card className="border border-border/40 bg-card/50 backdrop-blur-sm">
                <CardContent className="pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {skills.map((skill) => (
                      <SkillItem
                        key={skill.name}
                        name={skill.name}
                        level={skill.level}
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
              <div className="flex flex-wrap gap-2 justify-center">
                {skills.map((skill) => (
                  <Badge
                    key={skill.name}
                    variant={hoveredSkill === skill.name ? "default" : "outline"}
                    className="text-sm py-1 transition-all duration-300"
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    {skill.name}
                  </Badge>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
