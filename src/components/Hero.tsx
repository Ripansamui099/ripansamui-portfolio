import { Button } from '@/components/ui/button';
import { Download, ArrowRight, Code, Database, Shield, Smartphone, Brain, Trophy } from 'lucide-react';
import ripanProfile from '@/assets/ripan-hero-profile.jpg';

const Hero = () => {
  const techIcons = [
    { Icon: Code, delay: '0s', position: 'top-20 left-10' },
    { Icon: Database, delay: '1s', position: 'top-32 right-20' },
    { Icon: Shield, delay: '2s', position: 'bottom-40 left-20' },
    { Icon: Smartphone, delay: '1.5s', position: 'bottom-20 right-10' },
    { Icon: Brain, delay: '0.5s', position: 'top-40 left-1/3' },
    { Icon: Trophy, delay: '2.5s', position: 'bottom-32 right-1/3' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden hero-gradient">
      {/* Floating Tech Icons */}
      {techIcons.map(({ Icon, delay, position }, index) => (
        <div
          key={index}
          className={`absolute ${position} text-primary/20 hidden lg:block`}
          style={{ animationDelay: delay }}
        >
          <Icon size={40} className="floating-animation" />
        </div>
      ))}

      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8 fade-in-up">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Hello, I'm{' '}
                <span className="text-gradient">Ripan Samui</span>
              </h1>
              <h2 className="text-2xl lg:text-3xl font-semibold text-primary">
                Designing Innovation | Building Secure & Smart Solutions
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Passionate about coding, hackathons, and creating secure, user-friendly solutions. 
                I blend creativity with logic to build innovative tech experiences.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => scrollToSection('#projects')}
                className="group"
              >
                View My Work
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
              <Button 
                variant="outline-hero" 
                size="lg"
                onClick={() => scrollToSection('#contact')}
                className="group"
              >
                <Download className="mr-2" size={20} />
                Download Resume
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-8 justify-center lg:justify-start pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">6+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary">10+</div>
                <div className="text-sm text-muted-foreground">Tech Skills</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">2+</div>
                <div className="text-sm text-muted-foreground">Years Learning</div>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end bounce-in">
            <div className="relative">
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full blur-3xl transform scale-110"></div>
              
              {/* Profile Image Container */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-background shadow-2xl card-elegant">
                  <img
                    src={ripanProfile}
                    alt="Ripan Samui - Full Stack Developer"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Floating Badge */}
                <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold shadow-lg bounce-in">
                  Available for Hire
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;