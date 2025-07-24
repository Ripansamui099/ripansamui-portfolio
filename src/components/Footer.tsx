import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/Ripansamui099'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/in/ripan-samui-421b882b4'
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:ripansamui2024@gmail.com'
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">Ripan Samui</h3>
            <p className="text-background/80 text-sm">
              Full Stack Developer & Tech Enthusiast
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-background/10 p-3 rounded-full hover:bg-primary hover:scale-110 transition-all duration-300 group"
                aria-label={link.name}
              >
                <link.icon 
                  size={20} 
                  className="text-background group-hover:text-primary-foreground" 
                />
              </a>
            ))}
          </div>

          {/* Back to Top */}
          <div className="text-center md:text-right">
            <button
              onClick={scrollToTop}
              className="text-background/80 hover:text-background transition-colors text-sm underline-offset-4 hover:underline"
            >
              Back to Top ↑
            </button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-background/80 text-sm flex items-center justify-center">
            Made with <Heart size={16} className="mx-1 text-red-400" /> by Ripan Samui
            <span className="mx-2">•</span>
            © {currentYear} All rights reserved
          </p>
          <p className="text-background/60 text-xs mt-2">
            Designed & Developed with modern technologies
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;