
import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

interface ServiceItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features?: string[];
  index?: number;
}

const ServiceItem: React.FC<ServiceItemProps> = ({
  icon,
  title,
  description,
  features = [],
  index = 0,
}) => {
  const [hovered, setHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div 
      ref={ref}
      className="animate-on-scroll group relative p-6 rounded-xl bg-card hover:bg-card/80 border border-border/50 transition-all duration-300 overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ 
        animationDelay: `${index * 100}ms`,
        transformStyle: 'preserve-3d'
      }}
    >
      {/* Background gradient */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          transform: 'translateZ(-1px)'
        }}
      ></div>
      
      {/* Icon */}
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
        {icon}
      </div>

      {/* Content */}
      <h3 className="text-xl font-semibold mb-2 transition-transform duration-300 group-hover:translate-x-1">
        {title}
      </h3>
      
      <p className="text-muted-foreground mb-4">
        {description}
      </p>
      
      {features.length > 0 && (
        <ul className="space-y-2">
          {features.map((feature, idx) => (
            <li 
              key={idx} 
              className="flex items-start space-x-2 text-sm"
              style={{ 
                transitionDelay: `${idx * 50}ms`,
                opacity: hovered ? 1 : 0.8,
                transform: hovered ? 'translateX(4px)' : 'translateX(0)',
                transition: 'opacity 0.3s ease, transform 0.3s ease'
              }}
            >
              <Check size={16} className="flex-shrink-0 mt-0.5 text-primary" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ServiceItem;
