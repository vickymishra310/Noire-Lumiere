import { Link } from "react-router-dom";
import perfume1 from "@/assets/perfume-1.jpg";
import perfume2 from "@/assets/perfume-2.jpg";
import perfume3 from "@/assets/perfume-3.jpg";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useState } from "react";

const ProductGrid = () => {
  const { addToCart } = useCart();
  const [currentProduct, setCurrentProduct] = useState(0);
  
  const products = [
    {
      id: 1,
      name: "Black Orchid",
      brand: "Tom Ford",
      price: "$195",
      image: perfume1,
      rating: 4.8,
      description: "A luxurious and sensual fragrance with dark chocolate and black truffle",
      longDescription: "Black Orchid is a private indulgence—a scent that whispers sophistication and breathes life into your presence. Inspired by untouched forests and elite living, it redefines natural luxury.",
      category: "Oriental Floral"
    },
    {
      id: 2,
      name: "No. 5",
      brand: "Chanel",
      price: "$142",
      image: perfume2,
      rating: 4.9,
      description: "The world's most iconic fragrance with aldehydes and ylang-ylang",
      longDescription: "Chanel No. 5 is a timeless masterpiece—a scent that embodies elegance and grace. This legendary fragrance captures the essence of femininity with its exquisite blend of florals.",
      category: "Floral Aldehydic"
    },
    {
      id: 3,
      name: "Sauvage",
      brand: "Dior",
      price: "$128",
      image: perfume3,
      rating: 4.7,
      description: "A fresh and powerful fragrance inspired by wide open spaces",
      longDescription: "Sauvage is inspired by the desert at twilight—a moment when the sky is painted with incandescent colors. This fragrance captures the spirit of adventure and freedom.",
      category: "Aromatic Fresh"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background via-accent/20 to-background overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-luxury text-4xl md:text-5xl font-semibold text-foreground mb-6 animate-fade-in-up">
            Perfume
          </h2>
          <h3 className="font-luxury text-6xl md:text-8xl font-bold text-foreground mb-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Cold Water
          </h3>
        </div>
        
        {/* Main Carousel Section */}
        <div className="relative">
          <Carousel className="w-full" opts={{ align: "start", loop: true }}>
            <CarouselContent>
              {products.map((product, index) => (
                <CarouselItem key={product.id}>
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[600px]">
                    
                    {/* Left Side - Product Info */}
                    <div className="lg:col-span-4 space-y-6 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                      <div className="space-y-4">
                        <span className="inline-block text-sm font-medium text-primary bg-accent px-4 py-2 rounded-full">
                          {product.category}
                        </span>
                        <h4 className="font-luxury text-3xl md:text-4xl font-bold text-foreground">
                          {product.name}
                        </h4>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                          {product.longDescription}
                        </p>
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1">
                            <Star className="w-5 h-5 fill-luxury-gold text-luxury-gold" />
                            <span className="text-lg font-medium text-foreground">{product.rating}</span>
                          </div>
                          <span className="text-2xl font-bold text-primary">{product.price}</span>
                        </div>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Link to={`/product/${product.id}`} className="flex-1">
                          <button className="w-full bg-primary text-primary-foreground px-8 py-4 rounded-lg font-medium shadow-elegant hover:shadow-glow transition-all duration-300 hover:bg-primary/95 hover:scale-105">
                            View Details
                          </button>
                        </Link>
                        <button 
                          onClick={() => addToCart({
                            id: product.id,
                            name: product.name,
                            brand: product.brand,
                            price: product.price,
                            image: product.image
                          })}
                          className="flex-1 border-2 border-primary text-primary px-8 py-4 rounded-lg font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                    
                    {/* Center - Main Product Image */}
                    <div className="lg:col-span-4 flex justify-center">
                      <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-xl transform group-hover:scale-110 transition-transform duration-500"></div>
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="relative w-80 h-96 object-cover rounded-2xl shadow-elegant group-hover:shadow-glow transition-all duration-500 transform group-hover:scale-105"
                        />
                      </div>
                    </div>
                    
                    {/* Right Side - Additional Info */}
                    <div className="lg:col-span-4 space-y-6 animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                      <div className="space-y-4">
                        <h5 className="font-luxury text-2xl font-semibold text-foreground">
                          Luxury Woven in Green.
                        </h5>
                        <h6 className="text-lg font-medium text-primary">
                          {product.brand} Privé
                        </h6>
                        <p className="text-muted-foreground leading-relaxed">
                          {product.description}. This exquisite composition captures the essence of sophistication and elegance, creating an unforgettable sensory experience.
                        </p>
                        <div className="pt-4">
                          <div className="flex items-center justify-between p-4 bg-card rounded-lg border border-border">
                            <span className="text-sm text-muted-foreground">Concentration</span>
                            <span className="font-medium text-foreground">Eau de Parfum</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Custom Navigation */}
            <div className="flex justify-center mt-12 space-x-4">
              <CarouselPrevious className="relative inset-auto translate-y-0 h-12 w-12 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 border-0" />
              <CarouselNext className="relative inset-auto translate-y-0 h-12 w-12 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 border-0" />
            </div>
          </Carousel>
        </div>
        
        {/* Thumbnail Images */}
        <div className="flex justify-center mt-12 space-x-4">
          {products.map((product, index) => (
            <div key={product.id} className="relative group cursor-pointer">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-20 h-24 object-cover rounded-lg opacity-60 hover:opacity-100 transition-opacity duration-300"
              />
              <div className="absolute inset-0 bg-primary/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Link to="/fragrances">
            <button className="border-2 border-primary text-primary px-12 py-4 rounded-lg font-medium tracking-wide hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 shadow-elegant">
              Explore Full Collection
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;