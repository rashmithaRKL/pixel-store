
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, MousePointer } from 'lucide-react';
import AnimatedText from './AnimatedText';

interface HeroProps {
  title: string;
  subtitle: string;
  videoSrc?: string;
  imageSrc?: string;
  primaryCta?: {
    text: string;
    link: string;
  };
  secondaryCta?: {
    text: string;
    link: string;
  };
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  videoSrc,
  imageSrc,
  primaryCta,
  secondaryCta,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width;
      const y = (e.clientY - top) / height;
      
      // Subtle parallax effect
      containerRef.current.style.setProperty('--mouse-x', x.toString());
      containerRef.current.style.setProperty('--mouse-y', y.toString());
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        '--mouse-x': '0.5',
        '--mouse-y': '0.5',
      } as React.CSSProperties}
    >
      {/* Background Video or Image */}
      {videoSrc ? (
        <>
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className="video-bg"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
          <div className="video-overlay"></div>
        </>
      ) : imageSrc ? (
        <>
          <img 
            src={imageSrc} 
            alt="Hero Background" 
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-background/40"></div>
        </>
      ) : (
        <div className="hero-gradient"></div>
      )}

      {/* Moving Background Particles */}
      <div className="absolute inset-0 overflow-hidden opacity-30 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div 
            key={i} 
            className="absolute rounded-full bg-primary/20"
            style={{
              width: `${Math.random() * 300 + 50}px`,
              height: `${Math.random() * 300 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 15}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-4 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium animate-fade-in backdrop-blur-sm">
            Next-Gen Computing Solutions
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            <AnimatedText text={title} tag="h1" />
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/80 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            {primaryCta && (
              <Link
                to={primaryCta.link}
                className="button-glow fancy-border bg-primary text-primary-foreground rounded-lg px-6 py-3 text-base md:text-lg font-medium inline-flex items-center justify-center"
              >
                {primaryCta.text}
                <ChevronRight size={18} className="ml-2" />
              </Link>
            )}
            
            {secondaryCta && (
              <Link
                to={secondaryCta.link}
                className="bg-secondary text-foreground rounded-lg px-6 py-3 text-base md:text-lg font-medium inline-flex items-center justify-center hover:bg-secondary/80 transition-colors"
              >
                {secondaryCta.text}
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce text-foreground/60">
        <span className="text-sm font-medium mb-2">Scroll to explore</span>
        <MousePointer size={20} />
      </div>
    </div>
  );
};

export default Hero;
