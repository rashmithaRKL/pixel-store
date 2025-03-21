import Hero from '@/components/Hero';
import AnimatedText from '@/components/AnimatedText';
import ServiceItem from '@/components/ServiceItem';
import { Link } from 'react-router-dom';
import { 
  Cpu, Monitor, HardDrive, Headphones, Settings, Tablet, 
  Wifi, Shield, Clock, Users, Star, BarChart, Server, Database,
  Wrench, HelpCircle, Zap
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Cpu size={24} />,
      title: 'Custom PC Builds',
      description: 'Tailor-made computers designed to your exact specifications and budget.',
      features: [
        'Component selection guidance',
        'Premium assembly service',
        'Extensive testing & benchmarking',
        'Clean cable management',
        'OS installation & optimization'
      ]
    },
    {
      icon: <Monitor size={24} />,
      title: 'Hardware Upgrades',
      description: 'Boost your existing system with the latest technology upgrades.',
      features: [
        'System performance analysis',
        'Compatible component recommendations',
        'Professional installation',
        'Data migration & backup',
        'Performance verification'
      ]
    },
    {
      icon: <Wrench size={24} />,
      title: 'PC & Laptop Repairs',
      description: 'Expert diagnosis and repair of hardware and software issues.',
      features: [
        'Comprehensive diagnostics',
        'Component replacement',
        'Virus & malware removal',
        'System optimization',
        'Same-day service available'
      ]
    },
    {
      icon: <HardDrive size={24} />,
      title: 'Data Recovery',
      description: 'Retrieve important files from damaged or corrupted storage devices.',
      features: [
        'Hard drive recovery',
        'SSD data retrieval',
        'RAID array reconstruction',
        'Secure data transfer',
        'Confidential handling'
      ]
    },
    {
      icon: <Tablet size={24} />,
      title: 'Mobile Device Services',
      description: 'Repairs and support for smartphones, tablets, and other mobile devices.',
      features: [
        'Screen replacement',
        'Battery replacement',
        'Software troubleshooting',
        'Data transfer services',
        'Performance optimization'
      ]
    },
    {
      icon: <Wifi size={24} />,
      title: 'Networking Solutions',
      description: 'Complete networking setup and optimization for homes and businesses.',
      features: [
        'Wi-Fi network design',
        'Router configuration',
        'Network security setup',
        'NAS & server installation',
        'Remote access configuration'
      ]
    },
    {
      icon: <Server size={24} />,
      title: 'Server Setup & Management',
      description: 'Professional server deployment and ongoing maintenance services.',
      features: [
        'Server hardware selection',
        'OS installation & configuration',
        'Virtualization solutions',
        'Backup & recovery planning',
        '24/7 monitoring options'
      ]
    },
    {
      icon: <Database size={24} />,
      title: 'Cloud Services',
      description: 'Help transitioning to and managing cloud-based solutions.',
      features: [
        'Cloud migration planning',
        'Microsoft 365 setup',
        'Google Workspace configuration',
        'Cloud backup solutions',
        'Hybrid infrastructure design'
      ]
    },
    {
      icon: <Shield size={24} />,
      title: 'Security Services',
      description: 'Protect your digital assets with comprehensive security solutions.',
      features: [
        'Security assessment',
        'Antivirus implementation',
        'Firewall configuration',
        'VPN setup',
        'Security awareness training'
      ]
    }
  ];

  const processList = [
    {
      number: '01',
      title: 'Initial Consultation',
      description: 'We discuss your needs, requirements, and budget to understand your goals.'
    },
    {
      number: '02',
      title: 'Solution Design',
      description: 'Our experts create a customized plan based on your specific requirements.'
    },
    {
      number: '03',
      title: 'Implementation',
      description: 'We execute the plan with precision, keeping you informed throughout the process.'
    },
    {
      number: '04',
      title: 'Testing & Verification',
      description: 'Comprehensive testing ensures everything works perfectly before delivery.'
    },
    {
      number: '05',
      title: 'Knowledge Transfer',
      description: 'We provide guidance on maximizing the benefits of your new technology.'
    },
    {
      number: '06',
      title: 'Ongoing Support',
      description: 'Our relationship continues with dedicated technical support when you need it.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <Hero
        title="Our Services"
        subtitle="Comprehensive tech solutions for all your computing needs"
        imageSrc="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop"
      />

      {/* Services Overview */}
      <section className="py-20 bg-background">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              <AnimatedText text="What We Offer" />
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From custom PC builds to complete IT solutions, we provide a comprehensive range of technical services tailored to your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceItem
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-card relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
        <div className="container px-4 md:px-6 relative">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              <AnimatedText text="Our Process" />
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We follow a structured approach to ensure exceptional results for every project.
            </p>
          </div>

          <div className="relative">
            {/* Process timeline line */}
            <div className="absolute top-12 bottom-12 left-[32px] w-0.5 bg-border hidden lg:block"></div>

            <div className="space-y-12">
              {processList.map((process, index) => (
                <div 
                  key={index} 
                  className="animate-on-scroll relative flex flex-col lg:flex-row gap-6"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex-shrink-0 flex items-start">
                    <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold relative z-10">
                      {process.number}
                    </div>
                  </div>
                  <div className="flex-grow lg:pt-2">
                    <h3 className="text-xl font-semibold mb-2">{process.title}</h3>
                    <p className="text-muted-foreground">{process.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                <AnimatedText text="Why Choose Our Services" />
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                With over a decade of experience in the tech industry, we've built a reputation for excellence through our commitment to quality, expertise, and customer satisfaction.
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="mr-4 mt-1 text-primary">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Quick Turnaround Time</h3>
                    <p className="text-muted-foreground">We value your time and strive to complete services efficiently without compromising quality.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 mt-1 text-primary">
                    <Users size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Expert Technicians</h3>
                    <p className="text-muted-foreground">Our certified professionals bring years of experience and continuous training to every project.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 mt-1 text-primary">
                    <Star size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Quality Components</h3>
                    <p className="text-muted-foreground">We use only premium, reliable parts from trusted manufacturers to ensure longevity.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 mt-1 text-primary">
                    <BarChart size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Performance Optimization</h3>
                    <p className="text-muted-foreground">We fine-tune every system for maximum performance and efficiency.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="animate-on-scroll grid grid-cols-2 gap-4">
              <div className="aspect-square rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1580894897591-ff1e18c89183?q=80&w=1974&auto=format&fit=crop" 
                  alt="Technician working on computer" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?q=80&w=2070&auto=format&fit=crop" 
                  alt="Computer components" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1635310569109-38d5c1d5121a?q=80&w=2070&auto=format&fit=crop" 
                  alt="PC case with RGB lighting" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1600267185393-e158a98703de?q=80&w=2070&auto=format&fit=crop" 
                  alt="Custom PC" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-card">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium animate-fade-in mb-4">
              Ready to Get Started?
            </span>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              <AnimatedText text="Let's Discuss Your Tech Needs" />
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Contact us today for a free consultation. Our experts will help you find the perfect solution for your computing requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="button-glow bg-primary text-primary-foreground rounded-lg px-6 py-3 text-base font-medium inline-flex items-center justify-center"
              >
                Request a Consultation
              </Link>
              <Link
                to="/packages"
                className="bg-secondary text-foreground rounded-lg px-6 py-3 text-base font-medium inline-flex items-center justify-center hover:bg-secondary/80 transition-colors"
              >
                View Our Packages
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
