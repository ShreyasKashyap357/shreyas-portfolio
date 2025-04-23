import { Button } from "@/components/ui/button";
import { Download, Video } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center relative pt-16"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full filter blur-3xl opacity-50"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-vibrant/20 rounded-full filter blur-3xl opacity-30"></div>
      </div>
      
      <div className="container px-4 md:px-6 flex flex-col items-center text-center">
        <div className="flex flex-col items-center space-y-4 animate-fade-in">
          <Avatar className="w-64 h-64 border-4 border-primary shadow-md mb-2">
            <AvatarImage 
              src="https://github.com/ShreyasKashyap357/shreyas-portfolio/raw/main/My%20Photo%20Compressed%20Resized.jpg" 
              alt="Shreyas Kashyap" 
            />
            <AvatarFallback>SK</AvatarFallback>
          </Avatar>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
            <span className="text-muted-foreground">Hello, I'm</span>{" "}
            <span className="text-primary">Shreyas Kashyap</span>
          </h1>
          
          <div className="h-px w-16 bg-primary mx-auto my-6"></div>
          
          <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-light">
            Aspiring Data Analyst / ML Engineer
          </h2>
          
          <p className="max-w-[600px] text-muted-foreground/80 mx-auto mt-4 md:text-lg">
            Turning data into meaningful insights and building intelligent solutions.
          </p>
          
          <div className="flex justify-center gap-4 mt-8">
            <Button className="group" size="lg" asChild>
              <a
                href="https://raw.githubusercontent.com/ShreyasKashyap357/shreyas-portfolio/main/My_Resume_LaTeX.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                Download Resume
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a
                href="https://youtu.be/your-video-id"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Video className="mr-2 h-4 w-4" />
                Watch Video CV
              </a>
            </Button>
          </div>
          
          <div className="mt-12 flex items-center justify-center">
            <a href="#about" className="animate-bounce inline-flex items-center justify-center">
              <div className="rounded-full p-1 border border-primary/30">
                <div className="rounded-full p-1 border border-primary/60">
                  <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                      <path d="M12 5v14M5 12l7 7 7-7"/>
                    </svg>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
