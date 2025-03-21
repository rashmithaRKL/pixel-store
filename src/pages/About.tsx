
import { useEffect, useRef } from 'react';
import Hero from '@/components/Hero';
import AnimatedText from '@/components/AnimatedText';
import { Users, Award, Clock, TrendingUp, CheckCircle, Building } from 'lucide-react';

const About = () => {
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!statsRef.current) return;
      
      const rect = statsRef.current.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight * 0.75;
      
      if (isVisible) {
        // Animate counters when visible
        const counters = statsRef.current.querySelectorAll('.counter');
        counters.forEach((counter) => {
          const el = counter as HTMLElement;
          const target = parseInt(el.dataset.target || '0', 10);
          const duration = 2000; // ms
          const startTime = performance.now();
          
          const updateCounter = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function for smooth counting
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const current = Math.floor(easeOutQuart * target);
            
            el.innerText = current.toString();
            
            if (progress < 1) {
              requestAnimationFrame(updateCounter);
            } else {
              el.innerText = target.toString();
            }
          };
          
          requestAnimationFrame(updateCounter);
        });
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const timelineItems = [
    {
      year: '2010',
      title: 'Company Founded',
      description: 'TechPulse Computers was established with a mission to provide quality computer hardware and expert services.'
    },
    {
      year: '2013',
      title: 'Expansion to Custom PCs',
      description: 'Launched our custom PC building service, offering tailored computing solutions for gamers and professionals.'
    },
    {
      year: '2016',
      title: 'Opened Flagship Store',
      description: 'Established our main retail location with a dedicated workshop for custom builds and repairs.'
    },
    {
      year: '2018',
      title: 'Technical Support Division',
      description: 'Expanded our services to include comprehensive IT support and networking solutions for businesses.'
    },
    {
      year: '2021',
      title: 'Online Store Launch',
      description: 'Launched our e-commerce platform, bringing our products and services to customers nationwide.'
    },
    {
      year: '2023',
      title: 'Innovation Lab Created',
      description: 'Established our R&D department focused on emerging technologies and cutting-edge PC configurations.'
    }
  ];

  const values = [
    {
      icon: <CheckCircle size={24} />,
      title: 'Quality',
      description: 'We never compromise on components and build quality, ensuring reliability and performance.'
    },
    {
      icon: <Users size={24} />,
      title: 'Customer Focus',
      description: 'Your needs drive our solutions, with personalized recommendations and support.'
    },
    {
      icon: <TrendingUp size={24} />,
      title: 'Innovation',
      description: 'We stay at the cutting edge of technology to offer the latest advancements.'
    },
    {
      icon: <Award size={24} />,
      title: 'Expertise',
      description: 'Our certified technicians bring years of experience and continuous training.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <Hero
        title="Our Story"
        subtitle="Building the future of computing since 2010"
        imageSrc="https://images.unsplash.com/photo-1581092921461-eab98af7480d?q=80&w=2070&auto=format&fit=crop"
      />

      {/* Mission & Vision */}
      <section className="py-20 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                <AnimatedText text="Our Mission & Vision" />
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                At TechPulse Computers, we're dedicated to providing cutting-edge technology solutions that empower users to achieve their goals, whether they're professional creators, competitive gamers, or businesses seeking reliable IT infrastructure.
              </p>
              <p className="text-lg text-muted-foreground">
                Our vision is to be the leading provider of custom computing solutions, recognized for our technical expertise, exceptional customer service, and unwavering commitment to quality. We strive to stay at the forefront of technological innovation, bringing the latest advancements to our customers.
              </p>
            </div>
            <div className="relative animate-on-scroll">
              <div className="relative rounded-xl overflow-hidden aspect-video">
                <img
                  src="https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?q=80&w=2148&auto=format&fit=crop"
                  alt="Team working on computers"
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-white text-sm font-medium px-3 py-1 bg-primary/80 rounded-full">Our Workshop</span>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary rounded-xl hidden md:flex items-center justify-center animate-float">
                <Building size={40} className="text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-card relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
        <div ref={statsRef} className="container px-4 md:px-6 relative">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              <AnimatedText text="Growing Together" />
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Over the years, we've built a strong track record of success and customer satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="animate-on-scroll text-center p-6 rounded-xl bg-card shadow-sm border border-border/50">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                <span className="counter" data-target="12">0</span>+
              </div>
              <p className="text-muted-foreground">Years in Business</p>
            </div>
            <div className="animate-on-scroll text-center p-6 rounded-xl bg-card shadow-sm border border-border/50" style={{ animationDelay: '100ms' }}>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                <span className="counter" data-target="15000">0</span>+
              </div>
              <p className="text-muted-foreground">PCs Built</p>
            </div>
            <div className="animate-on-scroll text-center p-6 rounded-xl bg-card shadow-sm border border-border/50" style={{ animationDelay: '200ms' }}>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                <span className="counter" data-target="98">0</span>%
              </div>
              <p className="text-muted-foreground">Customer Satisfaction</p>
            </div>
            <div className="animate-on-scroll text-center p-6 rounded-xl bg-card shadow-sm border border-border/50" style={{ animationDelay: '300ms' }}>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                <span className="counter" data-target="24">0</span>/7
              </div>
              <p className="text-muted-foreground">Technical Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-background">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              <AnimatedText text="Our Journey" />
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From humble beginnings to industry leadership, explore the key milestones in our company's history.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-border transform -translate-x-1/2 hidden md:block"></div>

            <div className="space-y-12">
              {timelineItems.map((item, index) => (
                <div 
                  key={index} 
                  className="animate-on-scroll relative grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-8"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Year - visible on mobile, hidden on desktop */}
                  <div className="md:hidden text-xl font-bold text-primary">{item.year}</div>
                  
                  {/* Left side (odd) - right aligned text */}
                  <div className={`md:col-span-2 ${index % 2 === 0 ? 'md:text-right' : 'md:hidden'}`}>
                    {index % 2 === 0 && (
                      <>
                        <div className="text-xl font-bold text-primary hidden md:block">{item.year}</div>
                        <h3 className="text-lg font-semibold mt-2">{item.title}</h3>
                        <p className="text-muted-foreground mt-1">{item.description}</p>
                      </>
                    )}
                  </div>

                  {/* Center dot */}
                  <div className="hidden md:flex justify-center items-start">
                    <div className="w-4 h-4 rounded-full bg-primary mt-1 relative">
                      {/* Pulse effect */}
                      <div className="absolute inset-0 rounded-full bg-primary/30 animate-ping"></div>
                    </div>
                  </div>

                  {/* Right side (even) - left aligned text */}
                  <div className={`md:col-span-2 ${index % 2 === 1 ? '' : 'md:hidden'}`}>
                    {index % 2 === 1 && (
                      <>
                        <div className="text-xl font-bold text-primary hidden md:block">{item.year}</div>
                        <h3 className="text-lg font-semibold mt-2">{item.title}</h3>
                        <p className="text-muted-foreground mt-1">{item.description}</p>
                      </>
                    )}
                    {/* Show on mobile for all items */}
                    {index % 2 === 0 && (
                      <div className="md:hidden">
                        <h3 className="text-lg font-semibold">{item.title}</h3>
                        <p className="text-muted-foreground mt-1">{item.description}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-card">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              <AnimatedText text="Our Values" />
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The core principles that guide our business and customer relationships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="animate-on-scroll p-6 rounded-xl bg-card border border-border/50 hover:border-primary/50 transition-colors duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4">
                  {value.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section - Placeholder */}
      <section className="py-20 bg-background">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              <AnimatedText text="Meet Our Team" />
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The skilled experts behind our exceptional products and services.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((item, index) => (
              <div 
                key={index} 
                className="animate-on-scroll group relative rounded-xl overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <img
                  src={`https://randomuser.me/api/portraits/${index % 2 === 0 ? 'men' : 'women'}/${index + 60}.jpg`}
                  alt="Team member"
                  className="w-full aspect-[3/4] object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-white text-lg font-semibold">Team Member {index + 1}</h3>
                  <p className="text-white/90 text-sm">
                    {['Technical Director', 'Senior Engineer', 'Customer Support Lead', 'Sales Manager'][index]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
