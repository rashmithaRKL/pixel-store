
import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Heart, Info } from 'lucide-react';

interface ProductCardProps {
  id: string;
  title: string;
  description: string;
  price: number;
  imageSrc: string;
  category: string;
  featured?: boolean;
  link: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  title,
  description,
  price,
  imageSrc,
  category,
  featured = false,
  link,
}) => {
  const [hovered, setHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;
    
    // Tilt effect
    const tiltX = (y - 0.5) * 10; // -5 to 5 degrees
    const tiltY = (x - 0.5) * -10; // -5 to 5 degrees
    
    cardRef.current.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.02, 1.02, 1.02)`;
    
    // Highlight effect
    const shine = cardRef.current.querySelector('.card-shine') as HTMLElement;
    if (shine) {
      shine.style.backgroundImage = `radial-gradient(circle at ${x * 100}% ${y * 100}%, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 60%)`;
    }
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    setHovered(false);
    
    const shine = cardRef.current.querySelector('.card-shine') as HTMLElement;
    if (shine) {
      shine.style.backgroundImage = 'none';
    }
  };

  const priceFormatted = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price);

  return (
    <div
      ref={cardRef}
      className={`relative overflow-hidden rounded-xl transition-all duration-300 ${featured ? 'ring-2 ring-primary' : 'hover:ring-1 hover:ring-primary/50'}`}
      onMouseEnter={() => setHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transformStyle: 'preserve-3d', transition: 'transform 0.3s ease' }}
    >
      <Link to={link} className="block">
        <div className="relative aspect-[4/3] overflow-hidden rounded-t-xl bg-muted">
          <img
            src={imageSrc}
            alt={title}
            className="object-cover w-full h-full transition-transform duration-500"
            style={{ transform: hovered ? 'scale(1.05)' : 'scale(1)' }}
          />
          {featured && (
            <div className="absolute top-2 left-2 bg-primary text-primary-foreground px-2 py-1 rounded-md text-xs font-medium">
              Featured
            </div>
          )}
          <div className="absolute inset-0 card-shine"></div>
        </div>

        <div className="p-5 bg-card text-card-foreground">
          <div className="flex justify-between items-start mb-2">
            <span className="text-xs font-medium px-2 py-1 bg-secondary rounded-full">{category}</span>
            <span className="text-xl font-bold text-primary">{priceFormatted}</span>
          </div>

          <h3 className="text-lg font-semibold leading-tight mb-2">{title}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{description}</p>

          <div className="flex justify-between items-center">
            <button className="button-glow flex items-center justify-center bg-primary text-primary-foreground rounded-lg px-3 py-1.5 text-sm font-medium transition-colors">
              <ShoppingCart size={16} className="mr-1" />
              Add to Cart
            </button>
            <div className="flex gap-2">
              <button className="p-1.5 rounded-lg text-foreground/70 hover:text-primary hover:bg-primary/10 transition-colors">
                <Heart size={18} />
              </button>
              <button className="p-1.5 rounded-lg text-foreground/70 hover:text-primary hover:bg-primary/10 transition-colors">
                <Info size={18} />
              </button>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
