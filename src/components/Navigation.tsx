import { Search, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="font-luxury text-2xl font-semibold text-foreground hover:text-primary transition-colors duration-300">
            Noire Lumière
          </Link>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`${isActive('/') ? 'text-foreground' : 'text-muted-foreground'} hover:text-primary transition-colors duration-300 font-medium`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`${isActive('/about') ? 'text-foreground' : 'text-muted-foreground'} hover:text-primary transition-colors duration-300 font-medium`}
            >
              About
            </Link>
            <Link 
              to="/fragrances" 
              className={`${isActive('/fragrances') ? 'text-foreground' : 'text-muted-foreground'} hover:text-primary transition-colors duration-300 font-medium`}
            >
              Fragrances
            </Link>
          </div>
          
          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hover:bg-accent">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-accent">
              <ShoppingCart className="h-5 w-5" />
            </Button>
            <Button variant="luxury" className="hidden md:block">
              Contact us
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;