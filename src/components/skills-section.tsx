import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Code,
  Database,
  FileText,
  Layers,
  Terminal,
  Wrench,
} from "lucide-react";

// Skill data
const newSkills = {
  languages: [
    { name: "Java", icon: <Code size={16} />, level: 90 },
    { name: "Python", icon: <Code size={16} />, level: 85 },
    { name: "JavaScript", icon: <Code size={16} />, level: 82 },
    { name: "TypeScript", icon: <Code size={16} />, level: 80 },
  ],
  basic: [
    { name: "C++", icon: <Code size={16} />, level: 65 },
    { name: "HTML", icon: <FileText size={16} />, level: 75 },
    { name: "CSS", icon: <FileText size={16} />, level: 70 },
    { name: "Shell Scripting", icon: <Terminal size={16} />, level: 60 },
    { name: "Linux", icon: <Terminal size={16} />, level: 75 },
    { name: "Bash", icon: <Terminal size={16} />, level: 62 },
    { name: "LaTeX", icon: <FileText size={16} />, level: 75 },
  ],
  frameworks: [
    { name: "Django", icon: <Layers size={16} />, level: 80 },
    { name: "React", icon: <Layers size={16} />, level: 80 },
    { name: "Next.js", icon: <Layers size={16} />, level: 77 },
  ],
  tools: [
    { name: "Git", icon: <Wrench size={16} />, level: 85 },
    { name: "VS Code", icon: <Wrench size={16} />, level: 90 },
    { name: "Visual Studio", icon: <Wrench size={16} />, level: 85 },
    { name: "PyCharm", icon: <Wrench size={16} />, level: 80 },
    { name: "IntelliJ", icon: <Wrench size={16} />, level: 85 },
    { name: "Excel", icon: <Wrench size={16} />, level: 91 },
    { name: "Power BI", icon: <Wrench size={16} />, level: 85 },
  ],
  libraries: [
    { name: "pandas", icon: <FileText size={20} />, level: 90 },
    { name: "NumPy", icon: <FileText size={20} />, level: 85 },
    { name: "Matplotlib", icon: <FileText size={20} />, level: 80 },
    { name: "seaborn", icon: <FileText size={20} />, level: 75 },
    { name: "scikit-learn", icon: <FileText size={20} />, level: 85 },
    { name: "TensorFlow", icon: <FileText size={20} />, level: 70 },
  ],
  databases: [
    { name: "MySQL", icon: <Database size={20} />, level: 85 },
    { name: "MongoDB", icon: <Database size={20} />, level: 75 },
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

// Map categories to icons for tab triggers
const categoryIcons = {
  all: <FileText className="h-5 w-5" />,
  languages: <Code className="h-5 w-5" />,
  basic: <Terminal className="h-5 w-5" />,
  frameworks: <Layers className="h-5 w-5" />,
  tools: <Wrench className="h-5 w-5" />,
  libraries: <FileText className="h-5 w-5" />,
  databases: <Database className="h-5 w-5" />,
};

// Skill with progress bar (category tabs)
const SkillItem = ({ name, level }: { name: string; level: number }) => (
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

          {/* All Skills displays as tags with icons only (no percentages) */}
          <TabsContent value="all" className="space-y-6">
            <Card className="border border-border/40 bg-card/50 backdrop-blur-sm">
              <CardContent className="py-6">
                <div className="flex flex-wrap gap-3 justify-center">
                  {allSkillList.map((skill) => (
                    <Badge
                      key={skill.name}
                      className="flex items-center gap-2 text-sm py-2 px-3 bg-primary/10 border-primary/20 hover:bg-primary/20 transition-all"
                    >
                      {skill.icon}
                      <span>{skill.name}</span>
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Category tabs show progress bars */}
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
                    className="flex items-center gap-2 text-sm py-1 transition-all duration-300"
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    {skill.icon}
                    <span>{skill.name}</span>
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
