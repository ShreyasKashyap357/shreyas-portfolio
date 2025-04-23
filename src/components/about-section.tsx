
import { Card, CardContent } from "@/components/ui/card";

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 relative"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter">About Me</h2>
          <div className="h-1 w-12 bg-primary mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-12">
          <Card className="border border-border/40 bg-card/50 backdrop-blur-sm">
            <CardContent className="pt-6">
              <div className="text-center">
                <h3 className="text-xl font-medium mb-2">Who Am I</h3>
                <p className="text-muted-foreground">
                  I am a pre-final year Bahcelor of Technology Computer Science & Engineering student, passionate about data science, machine learning,
                  and creating impactful technological solutions.
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border border-border/40 bg-card/50 backdrop-blur-sm">
            <CardContent className="pt-6">
              <div className="text-center">
                <h3 className="text-xl font-medium mb-2">Professional Goals</h3>
                <p className="text-muted-foreground">
                  To leverage data-driven insights and machine learning techniques to solve complex problems
                  and contribute to innovations that make a positive difference.
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border border-border/40 bg-card/50 backdrop-blur-sm">
            <CardContent className="pt-6">
              <div className="text-center">
                <h3 className="text-xl font-medium mb-2">Interests</h3>
                <p className="text-muted-foreground">
                  Data analysis, predictive modeling, machine learning algorithms, and developing intuitive 
                  visualizations that communicate complex data stories effectively.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-12 max-w-3xl mx-auto text-center">
          <p className="text-muted-foreground">
            I'm a detail-oriented student with a strong foundation in computer science and a growing expertise in 
            data analytics and machine learning. My journey is driven by curiosity and a desire to convert raw data into
            actionable intelligence that can enhance decision-making processes and create innovative solutions.
          </p>
        </div>
      </div>
    </section>
  );
}
