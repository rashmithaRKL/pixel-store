
import React, { useRef, useState } from 'react';
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
      className="animate-on-scroll feature-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ 
        animationDelay: `${index * 100}ms`,
      }}
    >
      {/* Icon */}
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4 transition-all duration-300 group-hover:scale-110">
        {icon}
      </div>

      {/* Content */}
      <h3 className="text-xl font-semibold mb-2">
        {title}
      </h3>
      
      <p className="text-muted-foreground mb-4">
        {description}
      </p>
      
      {features.length > 0 && (
        <ul className="space-y-2 stagger-animate-children">
          {features.map((feature, idx) => (
            <li 
              key={idx} 
              className="flex items-start space-x-2 text-sm"
              style={{ 
                transitionDelay: `${idx * 50}ms`,
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
