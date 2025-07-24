import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Award, Users, Calendar } from 'lucide-react';

const About = () => {
  const hobbies = [
    'Coding on HackerRank', 'UI/UX Designing', 'Learning', 'Gaming',
    'Story Writing', 'Reading', 'Dancing'
  ];

  const achievements = [
    {
      title: 'Java Programming Intern',
      organization: 'The Website Makers',
      period: 'Feb 2024 - July 2024',
      icon: Award
    },
    {
      title: 'Intel IoT Club Member',
      organization: 'Web & App Development',
      period: '2024-2025',
      icon: Users
    },
    {
      title: 'IETE Amrita Student Forum',
      organization: 'Active Participant',
      period: 'March 2025',
      icon: Calendar
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A passionate tech enthusiast who blends creativity with logic to build innovative solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Personal Bio */}
          <div className="space-y-6 fade-in-up">
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed">
                I'm a passionate computer science student at Amrita Vishwa Vidyapeetham, deeply fascinated by the intersection of technology and creativity. My journey in tech spans across multiple domains including Full Stack Development, UI/UX Design, Mobile App Development, Cybersecurity, and Machine Learning.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                What drives me is the thrill of solving complex problems through code and the satisfaction of creating user-friendly, secure solutions. I actively participate in hackathons, constantly pushing myself to learn new technologies and methodologies.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My approach combines analytical thinking with creative problem-solving, whether I'm designing intuitive user interfaces, building robust backend systems, or implementing security protocols.
              </p>
            </div>

            {/* Hobbies */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Hobbies & Interests</h3>
              <div className="flex flex-wrap gap-2">
                {hobbies.map((hobby, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    {hobby}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Education & Experience */}
          <div className="space-y-8 fade-in-up" style={{ animationDelay: '0.2s' }}>
            {/* Education */}
            <Card className="p-6 card-elegant">
              <div className="flex items-center mb-4">
                <GraduationCap className="text-primary mr-3" size={24} />
                <h3 className="text-xl font-semibold text-foreground">Education</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground">B.Tech Computer Science Engineering</h4>
                  <p className="text-primary">Amrita Vishwa Vidyapeetham</p>
                  <p className="text-sm text-muted-foreground">2023-2027 (Ongoing)</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Class 12</h4>
                  <p className="text-primary">Narayana Junior College</p>
                  <p className="text-sm text-muted-foreground">2021-2023 • 84.9%</p>
                </div>
              </div>
            </Card>

            {/* Experience & Achievements */}
            <Card className="p-6 card-elegant">
              <h3 className="text-xl font-semibold text-foreground mb-6">Experience & Achievements</h3>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start space-x-3 group">
                    <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <achievement.icon size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{achievement.title}</h4>
                      <p className="text-primary text-sm">{achievement.organization}</p>
                      <p className="text-muted-foreground text-xs">{achievement.period}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Certificates */}
            <Card className="p-6 card-elegant">
              <h3 className="text-xl font-semibold text-foreground mb-4">Certificates</h3>
              <div className="space-y-3">
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-medium text-foreground">Excel Using AI Workshop</h4>
                  <p className="text-sm text-muted-foreground">Certification in AI-powered Excel automation</p>
                </div>
                <div className="border-l-4 border-secondary pl-4">
                  <h4 className="font-medium text-foreground">Python Basic Quiz Completion</h4>
                  <p className="text-sm text-muted-foreground">16/02/2024</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;