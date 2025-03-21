
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card text-card-foreground border-t border-border">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <span className="text-primary text-2xl font-bold">TechPulse</span>
              <span className="text-foreground ml-1">Computers</span>
            </Link>
            <p className="text-muted-foreground mb-4">
              Your trusted partner for premium computer hardware, custom builds, and tech solutions.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                aria-label="Facebook" 
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="#" 
                aria-label="Twitter" 
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="#" 
                aria-label="Instagram" 
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                aria-label="YouTube" 
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                <Youtube size={20} />
              </a>
              <a 
                href="#" 
                aria-label="LinkedIn" 
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/services" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link 
                  to="/packages" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Packages
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/services" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Custom PC Builds
                </Link>
              </li>
              <li>
                <Link 
                  to="/services" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Hardware Upgrades
                </Link>
              </li>
              <li>
                <Link 
                  to="/services" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Tech Consultations
                </Link>
              </li>
              <li>
                <Link 
                  to="/services" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Repairs & Troubleshooting
                </Link>
              </li>
              <li>
                <Link 
                  to="/services" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Networking Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="flex-shrink-0 mr-3 text-primary" />
                <span className="text-muted-foreground">
                  123 Tech Avenue, Silicon Valley,<br />
                  CA 94043, USA
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="flex-shrink-0 mr-3 text-primary" />
                <a 
                  href="tel:+14155552671" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  (415) 555-2671
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="flex-shrink-0 mr-3 text-primary" />
                <a 
                  href="mailto:info@techpulse.com" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  info@techpulse.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            &copy; {currentYear} TechPulse Computers. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link 
              to="/privacy" 
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link 
              to="/terms" 
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Terms of Service
            </Link>
            <Link 
              to="/sitemap" 
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
