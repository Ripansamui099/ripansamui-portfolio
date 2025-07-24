import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Code, Database, Figma, Github, Clock, Users, Zap, BookOpen } from 'lucide-react';

const Skills = () => {
  const technicalSkills = [
    { name: 'JavaScript (ES6+)', level: 90, icon: Code },
    { name: 'TypeScript', level: 85, icon: Code },
    { name: 'React & Next.js', level: 88, icon: Code },
    { name: 'Node.js & Express', level: 82, icon: Database },
    { name: 'MongoDB & MySQL', level: 80, icon: Database },
    { name: 'C/C++/C#', level: 85, icon: Code },
  ];

  const tools = [
    { name: 'GitHub', icon: Github },
    { name: 'Figma', icon: Figma },
    { name: 'PyTorch', icon: Code },
  ];

  const softSkills = [
    { name: 'Time Management', icon: Clock },
    { name: 'Public Speaking', icon: Users },
    { name: 'Team Player', icon: Users },
    { name: 'Fast Learner', icon: Zap },
  ];

  return (
    <section id="skills" className="py-20 hero-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit of technologies and soft skills that I've mastered through continuous learning
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div className="space-y-8 fade-in-up">
            <Card className="p-8 card-elegant">
              <div className="flex items-center mb-6">
                <Code className="text-primary mr-3" size={28} />
                <h3 className="text-2xl font-semibold text-foreground">Technical Skills</h3>
              </div>
              
              <div className="space-y-6">
                {technicalSkills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <skill.icon size={20} className="text-primary" />
                        <span className="font-medium text-foreground">{skill.name}</span>
                      </div>
                      <span className="text-primary font-semibold">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2"
                    />
                  </div>
                ))}
              </div>
            </Card>

            {/* Tools & Technologies */}
            <Card className="p-8 card-elegant">
              <div className="flex items-center mb-6">
                <Figma className="text-secondary mr-3" size={28} />
                <h3 className="text-2xl font-semibold text-foreground">Tools & Technologies</h3>
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                {tools.map((tool, index) => (
                  <div 
                    key={index} 
                    className="flex flex-col items-center p-4 rounded-lg bg-muted/50 hover:bg-primary/10 transition-colors group"
                  >
                    <tool.icon 
                      size={32} 
                      className="text-muted-foreground group-hover:text-primary transition-colors mb-2" 
                    />
                    <span className="text-sm font-medium text-center">{tool.name}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Soft Skills & Learning */}
          <div className="space-y-8 fade-in-up" style={{ animationDelay: '0.2s' }}>
            <Card className="p-8 card-elegant">
              <div className="flex items-center mb-6">
                <Users className="text-secondary mr-3" size={28} />
                <h3 className="text-2xl font-semibold text-foreground">Soft Skills</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {softSkills.map((skill, index) => (
                  <div 
                    key={index} 
                    className="flex items-center space-x-3 p-4 rounded-lg bg-muted/50 hover:bg-secondary/10 transition-colors group"
                  >
                    <skill.icon 
                      size={24} 
                      className="text-muted-foreground group-hover:text-secondary transition-colors" 
                    />
                    <span className="font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Learning Philosophy */}
            <Card className="p-8 card-elegant">
              <div className="flex items-center mb-6">
                <BookOpen className="text-primary mr-3" size={28} />
                <h3 className="text-2xl font-semibold text-foreground">Learning Philosophy</h3>
              </div>
              
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  I believe in continuous learning and staying updated with the latest technologies. 
                  My approach involves hands-on practice, building real projects, and participating in hackathons.
                </p>
                
                <div className="space-y-2">
                  <Badge variant="secondary" className="bg-primary/10 text-primary">
                    Problem-Solving Oriented
                  </Badge>
                  <Badge variant="secondary" className="bg-secondary/10 text-secondary ml-2">
                    Innovation Focused
                  </Badge>
                  <Badge variant="secondary" className="bg-primary/10 text-primary ml-2">
                    Security Conscious
                  </Badge>
                </div>
              </div>
            </Card>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 text-center card-elegant">
                <div className="text-3xl font-bold text-primary mb-2">10+</div>
                <div className="text-sm text-muted-foreground">Technologies</div>
              </Card>
              <Card className="p-6 text-center card-elegant">
                <div className="text-3xl font-bold text-secondary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Hours Coding/Week</div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;