
import { useState } from 'react';
import Hero from '@/components/Hero';
import AnimatedText from '@/components/AnimatedText';
import { Check, X, ChevronRight, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductCard from '@/components/ProductCard';

const Packages = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const packages = [
    {
      id: 'basic',
      title: 'Basic Package',
      description: 'Reliable prebuilt PCs for everyday home and office tasks',
      monthlyPrice: 0,
      oneTimePrice: 899,
      features: [
        'Intel Core i5 / AMD Ryzen 5',
        '16GB DDR4 RAM',
        '512GB NVMe SSD',
        'Integrated Graphics',
        'Windows 11 Home',
        'Standard Cooling',
        'Basic Peripherals Kit'
      ],
      missingFeatures: [
        'Dedicated Graphics Card',
        'RGB Lighting',
        'Custom Cable Management',
        'Overclocking Support',
      ],
      popular: false,
      recommended: false,
      primaryColor: 'bg-blue-500',
      type: 'prebuilt'
    },
    {
      id: 'gaming',
      title: 'Gaming Package',
      description: 'High-performance gaming PCs for serious players',
      monthlyPrice: 0,
      oneTimePrice: 1899,
      features: [
        'Intel Core i7 / AMD Ryzen 7',
        '32GB DDR4 RAM',
        '1TB NVMe SSD + 2TB HDD',
        'RTX 3070 / RX 6800',
        'RGB Lighting System',
        'Advanced Air Cooling',
        'Windows 11 Home',
        'Gaming Keyboard & Mouse',
        'Cable Management'
      ],
      missingFeatures: [
        'Liquid Cooling',
        'Premium Case',
      ],
      popular: true,
      recommended: true,
      primaryColor: 'bg-violet-600',
      type: 'gaming'
    },
    {
      id: 'business',
      title: 'Business Package',
      description: 'Workstation PCs for professional and creative work',
      monthlyPrice: 0,
      oneTimePrice: 2499,
      features: [
        'Intel Core i9 / AMD Ryzen 9',
        '64GB DDR4 RAM',
        '2TB NVMe SSD',
        'RTX A4000 / RX Pro',
        'Windows 11 Pro',
        'Advanced Cooling',
        'UPS & Surge Protection',
        'Dual Monitor Setup',
        'Extended Warranty',
        'Business Support Plan'
      ],
      missingFeatures: [],
      popular: false,
      recommended: false,
      primaryColor: 'bg-emerald-600',
      type: 'workstation'
    },
    {
      id: 'custom',
      title: 'Custom Build Package',
      description: 'Fully customized PCs built to your exact specifications',
      monthlyPrice: 0,
      oneTimePrice: 2999,
      features: [
        'Premium CPU of Choice',
        'Custom RAM Configuration',
        'Custom Storage Setup',
        'Top-tier Graphics Card',
        'Custom Liquid Cooling',
        'Premium Case Selection',
        'Full RGB Ecosystem',
        'Custom Cable Management',
        'Overclocking & Optimization',
        'Parts Sourcing Service',
        'Extended 3-Year Warranty'
      ],
      missingFeatures: [],
      popular: false,
      recommended: false,
      primaryColor: 'bg-rose-600',
      type: 'custom'
    }
  ];

  // Sample products data
  const products = [
    {
      id: '1',
      title: 'Pro Gaming Desktop',
      description: 'High-performance gaming PC with RTX 4080, 32GB RAM, and lightning-fast SSD storage.',
      price: 2499.99,
      imageSrc: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?q=80&w=2070&auto=format&fit=crop',
      category: 'gaming',
      featured: true,
      link: '/contact'
    },
    {
      id: '2',
      title: 'Ultra Slim Laptop',
      description: 'Lightweight and powerful laptop for professionals on the go with stunning 4K display.',
      price: 1899.99,
      imageSrc: 'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?q=80&w=2069&auto=format&fit=crop',
      category: 'laptop',
      featured: false,
      link: '/contact'
    },
    {
      id: '3',
      title: 'Business Workstation',
      description: 'Professional workstation designed for content creation, 3D rendering, and intensive workloads.',
      price: 3299.99,
      imageSrc: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?q=80&w=2070&auto=format&fit=crop',
      category: 'workstation',
      featured: false,
      link: '/contact'
    },
    {
      id: '4',
      title: 'Home Office PC',
      description: 'Reliable desktop computer for everyday tasks, web browsing, and office applications.',
      price: 799.99,
      imageSrc: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=2042&auto=format&fit=crop',
      category: 'prebuilt',
      featured: false,
      link: '/contact'
    },
    {
      id: '5',
      title: 'Premium Mechanical Keyboard',
      description: 'Responsive mechanical keyboard with RGB lighting and programmable keys.',
      price: 149.99,
      imageSrc: 'https://images.unsplash.com/photo-1615869442320-fd02a129c77c?q=80&w=2070&auto=format&fit=crop',
      category: 'accessory',
      featured: false,
      link: '/contact'
    },
    {
      id: '6',
      title: 'Gaming Monitor',
      description: '27" 1440p display with 165Hz refresh rate and 1ms response time for competitive gaming.',
      price: 349.99,
      imageSrc: 'https://images.unsplash.com/photo-1616763355548-1b606f439f86?q=80&w=2070&auto=format&fit=crop',
      category: 'accessory',
      featured: false,
      link: '/contact'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'gaming', name: 'Gaming PCs' },
    { id: 'workstation', name: 'Workstations' },
    { id: 'prebuilt', name: 'Prebuilt PCs' },
    { id: 'laptop', name: 'Laptops' },
    { id: 'accessory', name: 'Accessories' }
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <div>
      {/* Hero Section */}
      <Hero
        title="Our Packages"
        subtitle="Find the perfect computer package for your needs"
        imageSrc="https://images.unsplash.com/photo-1623282033815-40b05d96c333?q=80&w=2070&auto=format&fit=crop"
      />

      {/* Package Pricing Tables */}
      <section className="py-20 bg-background">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              <AnimatedText text="Choose Your Package" />
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We offer a range of computer packages to meet different needs and budgets. Each package includes assembly, testing, and delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg, index) => (
              <div 
                key={pkg.id}
                className={`animate-on-scroll relative rounded-xl border ${
                  pkg.recommended ? 'border-primary' : 'border-border'
                } bg-card overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {pkg.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-primary text-primary-foreground text-center py-1 text-xs font-semibold">
                    Most Popular
                  </div>
                )}
                
                <div className={`${pkg.primaryColor} h-2 w-full ${pkg.popular ? 'mt-6' : ''}`}></div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{pkg.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{pkg.description}</p>
                  
                  <div className="mb-6">
                    <div className="text-3xl font-bold">
                      ${pkg.oneTimePrice}
                    </div>
                    <div className="text-muted-foreground text-sm">One-time purchase</div>
                  </div>
                  
                  <Link
                    to="/contact"
                    className={`w-full inline-flex items-center justify-center rounded-lg px-4 py-2 font-medium text-sm transition-colors mb-6 ${
                      pkg.recommended 
                        ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                        : 'bg-secondary text-foreground hover:bg-secondary/90'
                    }`}
                  >
                    Select Package
                    <ChevronRight size={16} className="ml-1" />
                  </Link>
                  
                  <div className="space-y-2">
                    {pkg.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <Check size={18} className="text-green-500 flex-shrink-0 mt-0.5 mr-2" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                    
                    {pkg.missingFeatures.map((feature, idx) => (
                      <div key={idx} className="flex items-start text-muted-foreground">
                        <X size={18} className="text-muted-foreground flex-shrink-0 mt-0.5 mr-2" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Catalog */}
      <section className="py-20 bg-card">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                <AnimatedText text="Featured Products" />
              </h2>
              <p className="text-muted-foreground max-w-2xl">
                Browse our selection of computers, laptops, and accessories.
              </p>
            </div>
            
            <div className="mt-4 md:mt-0 flex overflow-x-auto pb-2 md:pb-0 space-x-2 max-w-full">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`whitespace-nowrap px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === category.id 
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-secondary text-foreground hover:bg-secondary/80'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredProducts.map((product, index) => (
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

      {/* Custom Build */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="absolute top-0 bottom-0 right-0 w-1/3 bg-gradient-to-l from-primary/5 to-transparent transform -skew-x-12 hidden lg:block"></div>
        <div className="container px-4 md:px-6 relative">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium animate-fade-in mb-4">
              Custom Solutions
            </span>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              <AnimatedText text="Can't Find What You Need?" />
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Our custom build service allows you to create the perfect computer tailored to your exact specifications and budget.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-card rounded-xl p-5 border border-border">
                <h3 className="font-semibold mb-3 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-2">1</span>
                  Consultation
                </h3>
                <p className="text-muted-foreground text-sm">
                  Discuss your needs, use cases, and budget with our technical experts.
                </p>
              </div>
              <div className="bg-card rounded-xl p-5 border border-border">
                <h3 className="font-semibold mb-3 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-2">2</span>
                  Component Selection
                </h3>
                <p className="text-muted-foreground text-sm">
                  Choose from premium components or let us recommend the optimal parts.
                </p>
              </div>
              <div className="bg-card rounded-xl p-5 border border-border">
                <h3 className="font-semibold mb-3 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-2">3</span>
                  Expert Assembly
                </h3>
                <p className="text-muted-foreground text-sm">
                  Our technicians carefully build and test your system to ensure perfection.
                </p>
              </div>
              <div className="bg-card rounded-xl p-5 border border-border">
                <h3 className="font-semibold mb-3 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-2">4</span>
                  Delivery & Support
                </h3>
                <p className="text-muted-foreground text-sm">
                  Receive your custom PC with full documentation and ongoing technical support.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="button-glow bg-primary text-primary-foreground rounded-lg px-6 py-3 text-base font-medium inline-flex items-center justify-center"
              >
                Start Your Custom Build
                <ChevronRight size={18} className="ml-2" />
              </Link>
              <Link
                to="/services"
                className="bg-secondary text-foreground rounded-lg px-6 py-3 text-base font-medium inline-flex items-center justify-center hover:bg-secondary/80 transition-colors"
              >
                Learn About Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-card">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              <AnimatedText text="Frequently Asked Questions" />
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about our packages and services.
            </p>
          </div>

          <div className="max-w-3xl mx-auto grid gap-6">
            {[
              {
                question: "What's included in each package?",
                answer: "All packages include computer assembly, testing, Windows installation, and delivery. Higher-tier packages include additional components, software, and extended warranty options."
              },
              {
                question: "Can I customize a pre-designed package?",
                answer: "Yes, any of our packages can be customized to your specific needs. Contact us to discuss your requirements and we'll provide a custom quote."
              },
              {
                question: "What is the warranty on your computers?",
                answer: "Our Basic Package includes a standard 1-year warranty on parts and labor. Gaming, Business, and Custom packages include extended 2-3 year warranties with priority support."
              },
              {
                question: "Do you offer financing options?",
                answer: "Yes, we provide flexible financing options through our partners. You can apply during checkout or contact our sales team for more details."
              },
              {
                question: "What is your delivery timeframe?",
                answer: "Standard packages typically ship within 3-5 business days. Custom builds may take 7-14 business days depending on complexity and component availability."
              }
            ].map((faq, index) => (
              <div 
                key={index} 
                className="animate-on-scroll rounded-lg border border-border bg-card overflow-hidden transition-all duration-300"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2 flex items-start">
                    <Info size={20} className="flex-shrink-0 mr-2 text-primary" />
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Packages;
