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
    <section className="relative py-32 bg-gradient-to-br from-background via-accent/10 to-primary/5 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/5 to-transparent rounded-full"></div>
      </div>

      <div className="container relative mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="text-primary text-lg font-medium tracking-widest uppercase animate-fade-in-up">
              Premium Collection
            </span>
          </div>
          <h2 className="font-luxury text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-8 animate-fade-in-up leading-tight" style={{ animationDelay: '0.1s' }}>
            Perfume
            <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Cold Water
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Discover the art of luxury fragrance with our exclusive collection of the world's finest perfumes
          </p>
        </div>
        
        {/* Main Carousel Section */}
        <div className="relative">
          <Carousel className="w-full" opts={{ align: "start", loop: true }}>
            <CarouselContent>
              {products.map((product, index) => (
                <CarouselItem key={product.id}>
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[700px] py-12">
                    
                    {/* Left Side - Product Info */}
                    <div className="lg:col-span-4 space-y-8 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                      <div className="space-y-6">
                        <div className="inline-flex items-center gap-3 bg-gradient-to-r from-primary/20 to-accent/20 backdrop-blur-sm px-6 py-3 rounded-full border border-primary/30">
                          <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                          <span className="text-sm font-medium text-primary tracking-wide">
                            {product.category}
                          </span>
                        </div>
                        
                        <div className="space-y-4">
                          <h4 className="font-luxury text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                            {product.name}
                          </h4>
                          <div className="flex items-center gap-4">
                            <span className="text-2xl font-semibold text-muted-foreground">{product.brand}</span>
                            <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border border-border">
                              <Star className="w-5 h-5 fill-luxury-gold text-luxury-gold" />
                              <span className="text-lg font-medium text-foreground">{product.rating}</span>
                            </div>
                          </div>
                        </div>
                        
                        <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
                          {product.longDescription}
                        </p>
                        
                        <div className="flex items-center gap-6">
                          <span className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                            {product.price}
                          </span>
                          <div className="h-8 w-px bg-border"></div>
                          <span className="text-sm text-muted-foreground">Starting price</span>
                        </div>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Link to={`/product/${product.id}`} className="flex-1">
                          <button className="group w-full bg-gradient-to-r from-primary to-primary/90 text-primary-foreground px-8 py-4 rounded-xl font-semibold shadow-elegant hover:shadow-glow transition-all duration-500 hover:scale-105 relative overflow-hidden">
                            <span className="relative z-10">Explore Details</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-accent/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
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
                          className="group flex-1 border-2 border-primary/50 text-primary px-8 py-4 rounded-xl font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-500 hover:scale-105 hover:border-primary backdrop-blur-sm"
                        >
                          Add to Collection
                        </button>
                      </div>
                    </div>
                    
                    {/* Center - Main Product Image */}
                    <div className="lg:col-span-4 flex justify-center">
                      <div className="relative group">
                        {/* Floating elements */}
                        <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-accent/30 to-primary/30 rounded-2xl blur-xl animate-float"></div>
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
                        
                        {/* Main product container */}
                        <div className="relative">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-primary/30 rounded-3xl blur-2xl transform group-hover:scale-110 transition-transform duration-700 opacity-80"></div>
                          <div className="relative bg-gradient-to-br from-card/80 to-background/60 backdrop-blur-xl rounded-3xl p-8 border border-border/50 shadow-2xl">
                            <img 
                              src={product.image} 
                              alt={product.name}
                              className="w-80 h-96 object-cover rounded-2xl shadow-elegant group-hover:shadow-glow transition-all duration-700 transform group-hover:scale-105 group-hover:rotate-1"
                            />
                            {/* Reflection effect */}
                            <div className="absolute bottom-4 left-8 right-8 h-24 bg-gradient-to-t from-primary/10 to-transparent rounded-b-2xl blur-sm"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Right Side - Additional Info */}
                    <div className="lg:col-span-4 space-y-8 animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                      <div className="space-y-6">
                        <div className="space-y-4">
                          <h5 className="font-luxury text-3xl md:text-4xl font-bold text-foreground leading-tight">
                            Luxury Woven
                            <span className="block text-primary">in Green.</span>
                          </h5>
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-px bg-gradient-to-r from-primary to-accent"></div>
                            <span className="text-lg font-medium text-primary tracking-wide">
                              {product.brand} Privé
                            </span>
                          </div>
                        </div>
                        
                        <p className="text-muted-foreground leading-relaxed text-lg">
                          {product.description}. This exquisite composition captures the essence of sophistication and elegance, creating an unforgettable sensory experience that lingers in memory.
                        </p>
                        
                        <div className="space-y-4">
                          <div className="bg-gradient-to-r from-card/80 to-background/60 backdrop-blur-sm rounded-xl p-6 border border-border/50">
                            <div className="flex items-center justify-between mb-4">
                              <span className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Fragrance Details</span>
                              <div className="w-6 h-6 bg-gradient-to-br from-primary to-accent rounded-full"></div>
                            </div>
                            <div className="space-y-3">
                              <div className="flex justify-between">
                                <span className="text-foreground">Concentration</span>
                                <span className="font-medium text-primary">Eau de Parfum</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-foreground">Longevity</span>
                                <span className="font-medium text-primary">8-12 hours</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-foreground">Projection</span>
                                <span className="font-medium text-primary">Moderate to Strong</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Custom Navigation with enhanced styling */}
            <div className="flex justify-center mt-16 space-x-6">
              <CarouselPrevious className="relative inset-auto translate-y-0 h-14 w-14 rounded-2xl bg-gradient-to-r from-primary to-primary/90 text-primary-foreground hover:from-accent hover:to-primary border-0 shadow-elegant hover:shadow-glow transition-all duration-300 hover:scale-110" />
              <CarouselNext className="relative inset-auto translate-y-0 h-14 w-14 rounded-2xl bg-gradient-to-r from-primary to-primary/90 text-primary-foreground hover:from-accent hover:to-primary border-0 shadow-elegant hover:shadow-glow transition-all duration-300 hover:scale-110" />
            </div>
          </Carousel>
        </div>
        
        {/* Enhanced Thumbnail Images */}
        <div className="flex justify-center mt-16 space-x-6">
          {products.map((product, index) => (
            <div key={product.id} className="relative group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-24 h-32 object-cover opacity-50 hover:opacity-100 transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="absolute bottom-2 left-2 right-2">
                  <div className="bg-background/80 backdrop-blur-sm rounded-lg px-2 py-1 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                    <span className="text-xs font-medium text-foreground">{product.brand}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-20">
          <Link to="/fragrances">
            <button className="group relative px-12 py-5 bg-gradient-to-r from-transparent to-transparent border-2 border-primary/50 text-primary rounded-2xl font-semibold tracking-wide hover:border-primary transition-all duration-500 hover:scale-105 overflow-hidden">
              <span className="relative z-10">Explore Full Collection</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;