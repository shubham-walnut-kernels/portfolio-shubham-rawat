import { ArrowDown, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const techBadges = [
  'Python', 'SQL', 'Power BI', 'Tableau', 'Machine Learning', 'Data Pipelines'
];

const metrics = [
  { value: '1M+', label: 'Rows Processed' },
  { value: '95.5%', label: 'Variance Explained' },
  { value: '0.89', label: 'Test ROC-AUC' },
];

interface HeroProps {
  profileImage: string;
}

const Hero = ({ profileImage }: HeroProps) => {
  return (
    <section className="min-h-screen flex items-center pt-20 pb-16 relative overflow-hidden">
      {/* Burgundy gradient accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-radial from-burgundy/8 via-burgundy/3 to-transparent rounded-full blur-3xl translate-x-1/3 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-radial from-burgundy/6 via-transparent to-transparent rounded-full blur-3xl -translate-x-1/3 translate-y-1/4" />
        <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-gradient-radial from-primary/5 to-transparent rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2" />
      </div>
      
      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1 animate-fade-in">
            <div className="flex items-center gap-2 text-muted-foreground mb-4">
              <MapPin size={16} className="text-primary" />
              <span className="text-sm">New Delhi, India</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight">
              Hi, I'm{' '}
              <span className="gradient-text">Shubham Rawat</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-primary font-medium mb-3">
              Data Analyst | Data Scientist
            </p>
            
            <p className="text-lg text-muted-foreground mb-6 max-w-xl">
              Transforming large-scale data into actionable business insights using statistics and machine learning.
            </p>

            {/* Tech Badges */}
            <div className="flex flex-wrap gap-2 mb-8">
              {techBadges.map((tech) => (
                <span key={tech} className="tech-badge">
                  {tech}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-10">
              <Button size="lg" asChild>
                <a href="#projects">View My Work</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#contact">Get in Touch</a>
              </Button>
            </div>

            {/* Metrics */}
            <div className="flex flex-wrap gap-4">
              {metrics.map((metric) => (
                <div key={metric.label} className="metric-chip">
                  <span className="font-bold text-foreground">{metric.value}</span>
                  <span>{metric.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden border-4 border-primary/20 shadow-soft-lg">
                <img
                  src={profileImage}
                  alt="Shubham Rawat - Data Analyst"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-2xl -z-10" />
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary/5 rounded-xl -z-10" />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hidden lg:flex justify-center mt-16">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-sm">Scroll to explore</span>
            <ArrowDown size={20} className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
