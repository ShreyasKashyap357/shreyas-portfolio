
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, School, Calendar, ExternalLink } from "lucide-react";

const educationData = [
  {
    degree: "Bachelor of Technology in Computer Science and Engineering",
    grades: "CGPA: 8.07",
    institution: "Lovely Professional University",
    duration: "Aug 2022 - Present",
    location: "Phagwara, IN",
    description:
      "Relevant coursework: Data Structures and Algorithms, Operating Systems, Database Management Systems, Artificial Intelligence, Computer Networks, Machine Learning",
    achievements: [],
    icon: <School className="h-10 w-10 text-primary" />,
  },
  {
    degree: "Senior Secondary School Certificate",
    grades: "70.67%",
    institution: "Lakshya Institute",
    duration: "Apr 2021 - Apr 2022",
    location: "Mumbai, IN",
    description: "Key Subjects: Physics, Chemistry, Mathematics, Computer Science",
    achievements: [],
    icon: <School className="h-10 w-10 text-primary" />,
  },
  {
    degree: "Secondary School Certificate",
    grades: "96.2%",
    institution: "Pawar Public School",
    duration: "Apr 2019 - Mar 2020",
    location: "Mumbai, IN",
    description: "",
    achievements: [],
    icon: <School className="h-10 w-10 text-primary" />,
  },
];

const certificationsData = [
  {
    title: "Introduction to Probability Theory & Statistics",
    issuer: "NPTEL",
    period: "Jul 2023 - Oct 2023",
    link: "https://archive.nptel.ac.in/content/noc/NOC23/SEM2/Ecertificates/111/noc23-ma77/Course/NPTEL23MA77S83790036920376872.pdf"
  },
  {
    title: "Cloud Computing",
    issuer: "NPTEL",
    period: "Jul 2024 - Oct 2024",
    link: "https://archive.nptel.ac.in/content/noc/NOC24/SEM2/Ecertificates/106/noc24-cs118/Course/NPTEL24CS118S167020253304303798.pdf"
  },
  {
    title: "Data Analysis & Algorithms",
    issuer: "Coursera",
    period: "Jan 2024 - May 2024",
    link: "https://shreyaskashyap357.github.io/portfolio-certificates/"
  },
  {
    title: "Generative AI & ChatGPT",
    issuer: "Coursera",
    period: "Jan 2024 - May 2024",
    link: "https://shreyaskashyap357.github.io/portfolio-certificates/"
  }
];

const achievementsData = [
  {
    title: "Quizzes",
    body: "Participated in multiple college-wide quizzes; Achieved 1st, 2nd, and 3rd prizes",
    period: "2022-Present"
  },
  {
    title: "National Competitive Exam",
    body: "Qualified for JEE (Advanced)",
    period: "7th Aug '22"
  },
  {
    title: "Bharat Ko Jano Quiz Competition 2018",
    body: "First Prize, Maharashtra-Konkan Region",
    period: "14th Nov. 2018"
  },
  {
    title: "United Nations Development Program (UNDP)",
    body: "Best Position Paper, Represented Canada, PPSK Model United Nations",
    period: "29th Jun. 2018"
  },
  {
    title: "Bharat Ko Jano Quiz Competition 2017",
    body: "Second Prize, Powai-Chandivali Branch",
    period: "11th Nov. 2017"
  },
  {
    title: "Enactment of a Scene",
    body: "First Prize, Alma Fiesta (Centenary Celebration of JP Vaswani), Sadhu Vaswani International School",
    period: "21st Dec. 2017"
  },
  {
    title: "Theatre De Rue",
    body: "Second Prize, Carnivesta, Gopal Sharma Memorial School",
    period: "20th Dec. 2017"
  },
  {
    title: "Extracurricular Activities",
    body: "Participated in acting and drama competitions; Secured 1st and 2nd prizes",
    period: "8th-10th Std."
  }
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
              <CardHeader className="flex flex-col gap-4 pt-6">
                <div className="p-2 bg-primary/10 rounded-full w-fit">
                  {education.icon}
                </div>
                <div>
                  <CardTitle className="text-lg">{education.degree}</CardTitle>
                  <p className="text-sm font-medium text-primary mt-2">
                    {education.grades}
                  </p>
                  <p className="text-sm font-medium text-muted-foreground">
                    {education.institution}
                  </p>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-muted-foreground mb-4">
                  <Calendar className="h-4 w-4 mr-1" />
                  {education.duration} | {education.location}
                </div>
                {education.description && (
                  <p className="text-sm text-muted-foreground mb-2">
                    {education.description}
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="border border-border/40 bg-card/50 backdrop-blur-sm max-w-3xl mx-auto mb-8">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <Award className="h-5 w-5 text-primary" /> Certifications
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-2">
              {certificationsData.map((cert, index) => (
                <a
                  key={index}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col md:flex-row md:items-center justify-between py-2 px-1 border-b border-border/20 last:border-b-0 hover:bg-accent/5 transition-colors group"
                >
                  <div className="flex items-center gap-1">
                    <span className="font-semibold">{cert.title}</span>
                    <span className="text-xs text-muted-foreground ml-2">
                      {cert.issuer}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground md:ml-4 mt-1 md:mt-0 whitespace-nowrap">
                    {cert.period}
                    <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </a>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border border-border/40 bg-card/50 backdrop-blur-sm max-w-3xl mx-auto">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <Award className="h-5 w-5 text-primary" /> Achievements
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-2">
              {achievementsData.map((ach, idx) => (
                <div
                  key={idx}
                  className="flex flex-col md:flex-row md:items-center justify-between py-2 px-1 border-b border-border/20 last:border-b-0"
                >
                  <div>
                    <span className="font-semibold">{ach.title}:</span>{" "}
                    <span>{ach.body}</span>
                  </div>
                  <span className="text-xs text-muted-foreground md:ml-4 mt-1 md:mt-0 whitespace-nowrap">
                    {ach.period}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
