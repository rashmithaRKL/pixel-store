
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Hero from '@/components/Hero';
import ProductCard from '@/components/ProductCard';
import AnimatedText from '@/components/AnimatedText';
import { ChevronRight, Monitor, Cpu, HardDrive, Headphones, Settings } from 'lucide-react';
import ServiceItem from '@/components/ServiceItem';

const Index = () => {
  // Sample products data
  const featuredProducts = [
    {
      id: '1',
      title: 'Pro Gaming Desktop',
      description: 'High-performance gaming PC with RTX 4080, 32GB RAM, and lightning-fast SSD storage.',
      price: 2499.99,
      imageSrc: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?q=80&w=2070&auto=format&fit=crop',
      category: 'Gaming PC',
      featured: true,
      link: '/packages'
    },
    {
      id: '2',
      title: 'Ultra Slim Laptop',
      description: 'Lightweight and powerful laptop for professionals on the go with stunning 4K display.',
      price: 1899.99,
      imageSrc: 'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?q=80&w=2069&auto=format&fit=crop',
      category: 'Laptops',
      featured: false,
      link: '/packages'
    },
    {
      id: '3',
      title: 'Premium Mechanical Keyboard',
      description: 'Responsive mechanical keyboard with RGB lighting and programmable keys.',
      price: 149.99,
      imageSrc: 'https://images.unsplash.com/photo-1615869442320-fd02a129c77c?q=80&w=2070&auto=format&fit=crop',
      category: 'Accessories',
      featured: false,
      link: '/packages'
    }
  ];

  // Sample services data
  const services = [
    {
      icon: <Cpu size={24} />,
      title: 'Custom PC Builds',
      description: 'Tailor-made computers designed to your specifications and budget.',
      features: ['Premium Components', 'Expert Assembly', 'Extensive Testing']
    },
    {
      icon: <Monitor size={24} />,
      title: 'Hardware Upgrades',
      description: 'Boost your existing system with the latest technology upgrades.',
      features: ['Performance Analysis', 'Compatible Components', 'Professional Installation']
    },
    {
      icon: <Settings size={24} />,
      title: 'Repairs & Support',
      description: 'Fast and reliable technical support for all your computer issues.',
      features: ['Diagnostics', 'Component Replacement', '24/7 Technical Support']
    },
    {
      icon: <HardDrive size={24} />,
      title: 'Networking Solutions',
      description: 'Complete networking setup and optimization for homes and businesses.',
      features: ['Secure Wi-Fi Setup', 'Network Optimization', 'Remote Access Configuration']
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <Hero
        title="Cutting-Edge Computing Solutions"
        subtitle="Experience peak performance with our custom-built PCs and expert tech services"
        imageSrc="https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?q=80&w=2070&auto=format&fit=crop"
        primaryCta={{ text: 'Explore Packages', link: '/packages' }}
        secondaryCta={{ text: 'Our Services', link: '/services' }}
      />

      {/* Featured Products Section */}
      <section className="py-20 bg-background">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                <AnimatedText text="Featured Products" />
              </h2>
              <p className="text-muted-foreground max-w-2xl">
                Discover our most popular high-performance computers and accessories.
              </p>
            </div>
            <Link
              to="/packages"
              className="inline-flex items-center mt-4 md:mt-0 text-primary hover:text-primary/80 transition-colors"
            >
              View all packages
              <ChevronRight size={16} className="ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {featuredProducts.map((product, index) => (
              <div 
                key={product.id} 
                className="animate-on-scroll" 
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-card">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              <AnimatedText text="Expert Tech Services" />
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We offer comprehensive computer solutions for all your tech needs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
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

          <div className="mt-12 text-center">
            <Link
              to="/services"
              className="button-glow bg-primary text-primary-foreground rounded-lg px-6 py-3 text-base font-medium inline-flex items-center justify-center"
            >
              Explore All Services
              <ChevronRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary/10 z-0"></div>
        <div className="container px-4 md:px-6 relative z-10 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              <AnimatedText text="Ready to Upgrade Your Tech?" />
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Whether you need a custom PC build, hardware upgrades, or expert tech support, 
              we're here to provide premium computing solutions tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="button-glow bg-primary text-primary-foreground rounded-lg px-6 py-3 text-base font-medium inline-flex items-center justify-center"
              >
                Get a Free Consultation
              </Link>
              <Link
                to="/packages"
                className="bg-secondary text-foreground rounded-lg px-6 py-3 text-base font-medium inline-flex items-center justify-center hover:bg-secondary/80 transition-colors"
              >
                View Packages
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
