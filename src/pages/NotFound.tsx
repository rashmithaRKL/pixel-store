
import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { AlertCircle, ArrowLeft, Home } from "lucide-react";
import AnimatedText from "@/components/AnimatedText";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="text-center max-w-md mx-auto">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
          <AlertCircle size={32} />
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          <AnimatedText text="404" />
        </h1>
        
        <p className="text-xl text-foreground mb-4">
          <AnimatedText text="Oops! Page not found" tag="p" />
        </p>
        
        <p className="text-muted-foreground mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="button-glow bg-primary text-primary-foreground rounded-lg px-6 py-3 text-base font-medium inline-flex items-center justify-center"
          >
            <Home size={18} className="mr-2" />
            Return Home
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="bg-secondary text-foreground rounded-lg px-6 py-3 text-base font-medium inline-flex items-center justify-center hover:bg-secondary/80 transition-colors"
          >
            <ArrowLeft size={18} className="mr-2" />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
