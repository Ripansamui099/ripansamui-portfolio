import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Filter } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'Rental Car Booking System',
      description: 'Full-stack car rental platform with booking management, user authentication, and payment integration. Features include vehicle search, availability checking, and reservation management.',
      image: '/api/placeholder/400/250',
      tags: ['React', 'Node.js', 'MongoDB', 'Express'],
      category: 'Full Stack',
      github: '#',
      live: '#',
      featured: true
    },
    {
      id: 2,
      title: 'Smart Secure Home System',
      description: 'IoT-based security system with emergency response capabilities. Includes motion detection, camera monitoring, and real-time alerts with mobile app integration.',
      image: '/api/placeholder/400/250',
      tags: ['IoT', 'Python', 'React Native', 'Arduino'],
      category: 'IoT',
      github: '#',
      live: '#',
      featured: true
    },
    {
      id: 3,
      title: 'Traffic Safety Learning App',
      description: 'Educational mobile application featuring interactive animations and quizzes to teach road safety rules. Gamified learning experience for better engagement.',
      image: '/api/placeholder/400/250',
      tags: ['React Native', 'TypeScript', 'Animations'],
      category: 'Mobile',
      github: '#',
      live: '#',
      featured: false
    },
    {
      id: 4,
      title: 'Autonomous Traffic Control',
      description: 'Adaptive traffic management system for smart cities using AI algorithms to optimize traffic flow based on real-time conditions and patterns.',
      image: '/api/placeholder/400/250',
      tags: ['Python', 'AI/ML', 'Computer Vision', 'TensorFlow'],
      category: 'AI/ML',
      github: '#',
      live: '#',
      featured: true
    },
    {
      id: 5,
      title: 'Secure Cryptographic System',
      description: 'End-to-end encryption model for secure data transmission with advanced cryptographic protocols and key management system.',
      image: '/api/placeholder/400/250',
      tags: ['Cryptography', 'Security', 'C++', 'Algorithms'],
      category: 'Security',
      github: '#',
      live: '#',
      featured: false
    },
    {
      id: 6,
      title: 'RIDE ALIGN',
      description: 'Graph-based dynamic ride-sharing platform optimizing routes and matching riders efficiently. Features real-time location tracking and fare calculation.',
      image: '/api/placeholder/400/250',
      tags: ['Graph Algorithms', 'React', 'Node.js', 'Maps API'],
      category: 'Full Stack',
      github: '#',
      live: '#',
      featured: true
    }
  ];

  const categories = ['All', 'Full Stack', 'Mobile', 'IoT', 'AI/ML', 'Security'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 hero-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            My <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of innovative solutions I've built, from web applications to IoT systems
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 fade-in-up">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeFilter === category ? 'default' : 'outline'}
              onClick={() => setActiveFilter(category)}
              className="rounded-full"
            >
              <Filter size={16} className="mr-2" />
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.id} 
              className="relative overflow-hidden bg-gradient-to-br from-background/80 to-background/60 backdrop-blur-sm border border-border/50 rounded-3xl p-6 group hover:shadow-xl transition-all duration-300 fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Featured Badge */}
              {project.featured && (
                <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground rounded-full px-3 py-1 text-xs font-medium">
                  Featured
                </Badge>
              )}
              
              {/* Project Links */}
              <div className="absolute top-4 right-4 flex space-x-2">
                <Button
                  size="sm"
                  variant="secondary"
                  className="rounded-full w-10 h-10 p-0 bg-muted/80 hover:bg-muted"
                  onClick={() => window.open(project.github, '_blank')}
                >
                  <Github size={16} />
                </Button>
                <Button
                  size="sm"
                  variant="default"
                  className="rounded-full w-10 h-10 p-0 bg-primary/80 hover:bg-primary"
                  onClick={() => window.open(project.live, '_blank')}
                  >
                  <ExternalLink size={16} />
                </Button>
              </div>

              {/* Project Image Area */}
              <div className="relative h-40 mb-6 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                <div className="text-6xl text-primary/30 font-bold">
                  {project.category}
                </div>
              </div>

              {/* Project Content */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="text-xs rounded-full px-3 py-1 bg-muted/50">
                    {project.category}
                  </Badge>
                </div>
                
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex} 
                      variant="secondary"
                      className="text-xs bg-primary/10 text-primary rounded-full px-3 py-1"
                    >
                      {tag}
                    </Badge>
                  ))}
                  {project.tags.length > 3 && (
                    <Badge 
                      variant="secondary"
                      className="text-xs bg-muted/50 text-muted-foreground rounded-full px-3 py-1"
                    >
                      +{project.tags.length - 3}
                    </Badge>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* More Projects CTA */}
        <div className="text-center mt-16 fade-in-up">
          <p className="text-muted-foreground mb-6">
            Want to see more of my work? Check out my GitHub for additional projects and contributions.
          </p>
          <Button 
            variant="outline-hero" 
            size="lg"
            onClick={() => window.open('https://github.com/Ripansamui099', '_blank')}
          >
            <Github className="mr-2" size={20} />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;