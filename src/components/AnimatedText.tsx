
import { useEffect, useRef } from 'react';

interface AnimatedTextProps {
  text: string;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  className?: string;
  once?: boolean;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  tag = 'span',
  className = '',
  once = true
}) => {
  // Create a generic ref that accommodates all possible HTML elements
  const elementRef = useRef<HTMLElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!elementRef.current) return;

    const animateLetters = () => {
      if (once && hasAnimated.current) return;
      
      const element = elementRef.current;
      if (!element) return;

      // Split text into spans if not already done
      if (!element.classList.contains('text-animated')) {
        const textContent = element.textContent || '';
        element.textContent = '';
        element.classList.add('text-animated');
        
        // Create spans for each letter
        [...textContent].forEach((char, index) => {
          const span = document.createElement('span');
          span.textContent = char;
          span.style.setProperty('--index', index.toString());
          span.classList.add('inline-block', 'opacity-0', 'translate-y-4');
          element.appendChild(span);
        });
      }

      // Animate each letter
      Array.from(element.children).forEach((span, index) => {
        const delay = index * 30; // ms between each letter
        setTimeout(() => {
          (span as HTMLElement).classList.add('transition-all', 'duration-300', 'ease-out');
          (span as HTMLElement).classList.remove('opacity-0', 'translate-y-4');
        }, delay);
      });

      hasAnimated.current = true;
    };

    // Set up intersection observer
    if (!observerRef.current) {
      observerRef.current = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animateLetters();
            if (once) {
              observerRef.current?.unobserve(entry.target);
            }
          }
        });
      }, { threshold: 0.2 });
      
      observerRef.current.observe(elementRef.current);
    }

    return () => {
      observerRef.current?.disconnect();
      observerRef.current = null;
    };
  }, [text, once]);

  // Use createElement instead of JSX to handle dynamic component type
  const Element = tag as keyof JSX.IntrinsicElements;
  
  return (
    <Element
      ref={elementRef as any}
      className={className}
    >
      {text}
    </Element>
  );
};

export default AnimatedText;
