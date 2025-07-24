import { Card } from '@/components/ui/card';
import { Palette, Shield, TestTube, Code, Database, Smartphone } from 'lucide-react';

const Experience = () => {
  const services = [
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Creating intuitive and beautiful user interfaces with a focus on user experience. I design responsive layouts that work seamlessly across all devices.',
      skills: ['Figma', 'User Research', 'Prototyping', 'Responsive Design'],
      color: 'primary'
    },
    {
      icon: Shield,
      title: 'Ethical Hacking',
      description: 'Identifying security vulnerabilities and implementing robust security measures. I help secure applications and systems against potential threats.',
      skills: ['Penetration Testing', 'Security Audits', 'Vulnerability Assessment', 'Secure Coding'],
      color: 'secondary'
    },
    {
      icon: TestTube,
      title: 'Software Testing',
      description: 'Ensuring software quality through comprehensive testing strategies. I create test cases and implement automated testing solutions.',
      skills: ['Test Automation', 'Unit Testing', 'Integration Testing', 'Performance Testing'],
      color: 'primary'
    }
  ];

  const expertise = [
    {
      icon: Code,
      title: 'Full Stack Development',
      description: 'End-to-end web application development using modern technologies and frameworks.'
    },
    {
      icon: Database,
      title: 'Database Design',
      description: 'Designing efficient database schemas and optimizing query performance.'
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Creating cross-platform mobile applications with native performance.'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            My <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Specialized services and expertise I offer to help bring your ideas to life
          </p>
        </div>

        {/* Main Services */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="p-8 card-elegant hover:scale-105 transition-all duration-300 fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center space-y-6">
                <div className={`inline-flex p-4 rounded-full bg-${service.color}/10`}>
                  <service.icon 
                    size={40} 
                    className={`text-${service.color}`}
                  />
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {service.description}
                  </p>
                </div>

                <div className="space-y-2">
                  {service.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex}
                      className={`inline-block bg-${service.color}/10 text-${service.color} px-3 py-1 rounded-full text-sm font-medium mr-2 mb-2`}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Expertise */}
        <div className="bg-muted/30 rounded-2xl p-8 fade-in-up">
          <h3 className="text-2xl font-semibold text-foreground text-center mb-8">
            Additional Expertise
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {expertise.map((item, index) => (
              <div 
                key={index} 
                className="flex items-start space-x-4 p-4 rounded-lg hover:bg-background/50 transition-colors"
              >
                <div className="bg-primary/10 p-3 rounded-lg">
                  <item.icon size={24} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Work Process */}
        <div className="mt-16 fade-in-up">
          <h3 className="text-2xl font-semibold text-foreground text-center mb-8">
            My Work Process
          </h3>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Discovery', desc: 'Understanding your requirements and goals' },
              { step: '02', title: 'Planning', desc: 'Creating detailed project roadmap and timeline' },
              { step: '03', title: 'Development', desc: 'Building with best practices and clean code' },
              { step: '04', title: 'Delivery', desc: 'Testing, deployment, and ongoing support' }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm mx-auto mb-4">
                  {process.step}
                </div>
                <h4 className="font-semibold text-foreground mb-2">{process.title}</h4>
                <p className="text-sm text-muted-foreground">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;