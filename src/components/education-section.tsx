
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { School, Award, Calendar } from "lucide-react";

// Education data (updated with correct names/titles/achievements as per user instruction)
const educationData = [
  {
    degree: "B.Tech in Computer Science and Engineering (Data Science)",
    institution: "Lovely Professional University",
    duration: "2020 - 2024",
    location: "Punjab, India",
    description: "Specialized in Data Science and Machine Learning, with coursework on DBMS, DSA, Software Engineering.",
    achievements: ["Dean's List", "Research Project on Data Analytics"],
    icon: <School className="h-10 w-10 text-primary" />,
  },
  {
    degree: "Senior Secondary (Physics, Chemistry, Mathematics, Computer Science)",
    institution: "Lakshya Institute",
    duration: "2018 - 2020",
    location: "Mumbai, Maharashtra, India",
    description: "Physics, Chemistry, Mathematics; Computer Science as elective.",
    achievements: ["Top 5% in State Examinations", "School Technical Club Lead"],
    icon: <School className="h-10 w-10 text-primary" />,
  },
  {
    degree: "Secondary School",
    institution: "Pawar Public School, Chandivali, Mumbai",
    duration: "2008 - 2018",
    location: "Mumbai, Maharashtra, India",
    description: "All round foundational education, focus on mathematics and science. Best Position Paper in mock UN (UNDP) representing Canada.",
    achievements: [
      "Best Position Paper in School Model UN (UNDP, representing Canada, team of 2)",
      "Merit Scholarship Recipient",
      "Science Olympiad Finalist"
    ],
    icon: <School className="h-10 w-10 text-primary" />,
  },
];

// Certifications data (now separated from achievements)
const certificationsData = [
  "Machine Learning Specialization - Coursera",
  "Data Analysis with Python - FreeCodeCamp",
  "SQL Advanced Certification - HackerRank",
  "Big Data Analytics - IBM",
  "Git & GitHub Fundamentals - LinkedIn Learning",
];

const achievementsList = [
  "Dean's List in University",
  "Research Project on Data Analytics",
  "Top 5% in State Examinations (Senior Secondary)",
  "Best Position Paper in School Model UN",
  "Merit Scholarship Recipient",
  "Science Olympiad Finalist"
];

export function EducationSection() {
  return (
    <section id="education" className="py-20 relative">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter">Education</h2>
          <div className="h-1 w-12 bg-primary mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {educationData.map((education, index) => (
            <Card key={index} className="border border-border/40 bg-card/50 backdrop-blur-sm overflow-hidden">
              <div className="h-2 bg-primary"></div>
              <CardHeader className="flex flex-row items-center gap-4 pt-6">
                <div className="p-2 bg-primary/10 rounded-full">{education.icon}</div>
                <div>
                  <CardTitle className="text-lg">{education.degree}</CardTitle>
                  <p className="text-sm font-medium text-muted-foreground">{education.institution}</p>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-muted-foreground mb-4">
                  <Calendar className="h-4 w-4 mr-1" />
                  {education.duration} | {education.location}
                </div>
                <p className="text-sm text-muted-foreground mb-4">{education.description}</p>
                <div className="space-y-2">
                  <h4 className="text-sm font-medium flex items-center gap-2">
                    <Award className="h-4 w-4 text-primary" /> Achievements
                  </h4>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    {education.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Separate Achievements Card */}
        <Card className="border border-border/40 bg-card/50 backdrop-blur-sm max-w-3xl mx-auto mb-8">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <Award className="h-5 w-5 text-primary" /> Achievements
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {achievementsList.map((ach, idx) => (
                <Badge key={idx} className="py-1.5 px-2.5 bg-primary/10 hover:bg-primary/20 text-foreground border-primary/20">
                  {ach}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Certifications (Separate Card) */}
        <Card className="border border-border/40 bg-card/50 backdrop-blur-sm max-w-3xl mx-auto">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <Award className="h-5 w-5 text-primary" /> Certifications
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {certificationsData.map((cert, index) => (
                <Badge key={index} className="py-1.5 px-2.5 bg-primary/10 hover:bg-primary/20 text-foreground border-primary/20">
                  {cert}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
