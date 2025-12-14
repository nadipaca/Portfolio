import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Award, BookOpen } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const courses = [
  "Machine Learning",
  "Data Mining",
  "Azure Data Engineering",
  "Mobile App Tech",
  "Human-Computer Interaction",
  "Cybersecurity",
];

export function Education() {
  return (
    <section id="education" className="py-20 px-4 bg-muted/30 scroll-mt-16">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Education
            </h2>
            <p className="text-muted-foreground">
              Continuous learning and academic excellence
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <Card className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02] border-primary/10">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-2xl">Master's in Information Technology</CardTitle>
                  <p className="text-sm text-muted-foreground mt-1">
                    University of Cincinnati, Cincinnati, OH
                  </p>
                </div>
              </div>
              <Badge variant="secondary" className="text-sm">
                Expected: Dec 2025
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2 mb-6">
              <Award className="h-5 w-5 text-primary" />
              <span className="font-semibold">GPA: 4.0/4.0</span>
            </div>
            
            <div>
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="h-5 w-5 text-primary" />
                <h3 className="font-semibold">Relevant Coursework</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {courses.map((course, index) => (
                  <Badge key={index} variant="outline" className="border-primary/20">
                    {course}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
          </Card>
        </ScrollReveal>
      </div>
    </section>
  );
}

