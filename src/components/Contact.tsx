import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';
import { Mail, MapPin, Phone, Send, Github, Linkedin, Download } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });

    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'ripansamui2024@gmail.com',
      href: 'mailto:ripansamui2024@gmail.com'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/ripan-samui-421b882b4',
      href: 'https://linkedin.com/in/ripan-samui-421b882b4'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/Ripansamui099',
      href: 'https://github.com/Ripansamui099'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start your next project? Let's collaborate and bring your ideas to life!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="p-8 card-elegant fade-in-up">
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Send me a message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Full Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  required
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or just say hello!"
                  required
                  rows={6}
                  className="w-full resize-none"
                />
              </div>
              
              <Button 
                type="submit" 
                variant="hero" 
                size="lg" 
                className="w-full group"
              >
                <Send className="mr-2 group-hover:translate-x-1 transition-transform" size={20} />
                Send Message
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8 fade-in-up" style={{ animationDelay: '0.2s' }}>
            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card 
                  key={index} 
                  className="p-6 card-elegant hover:scale-105 transition-all duration-300 cursor-pointer"
                  onClick={() => window.open(info.href, '_blank')}
                >
                  <div className="flex items-center space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <info.icon size={24} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{info.label}</h4>
                      <p className="text-muted-foreground text-sm">{info.value}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Download Resume */}
            <Card className="p-8 card-elegant text-center bg-gradient-to-br from-primary/5 to-secondary/5">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Interested in my background?
              </h3>
              <p className="text-muted-foreground mb-6">
                Download my resume to learn more about my experience, education, and skills.
              </p>
              <Button variant="outline-hero" size="lg" className="w-full">
                <Download className="mr-2" size={20} />
                Download Resume
              </Button>
            </Card>

            {/* Availability Status */}
            <Card className="p-6 card-elegant">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <div>
                  <h4 className="font-semibold text-foreground">Available for Work</h4>
                  <p className="text-sm text-muted-foreground">
                    Currently open to new opportunities and freelance projects
                  </p>
                </div>
              </div>
            </Card>

            {/* Call to Action */}
            <div className="text-center p-6 rounded-lg bg-muted/30">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Let's Build Something Amazing Together!
              </h3>
              <p className="text-muted-foreground text-sm">
                Whether it's a web application, mobile app, or innovative IoT solution, 
                I'm here to help bring your vision to reality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;