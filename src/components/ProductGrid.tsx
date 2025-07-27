import perfume1 from "@/assets/perfume-1.jpg";
import perfume2 from "@/assets/perfume-2.jpg";
import perfume3 from "@/assets/perfume-3.jpg";
import { Star } from "lucide-react";

const ProductGrid = () => {
  const products = [
    {
      id: 1,
      name: "Black Orchid",
      brand: "Tom Ford",
      price: "$195",
      image: perfume1,
      rating: 4.8,
      description: "A luxurious and sensual fragrance with dark chocolate and black truffle"
    },
    {
      id: 2,
      name: "No. 5",
      brand: "Chanel",
      price: "$142",
      image: perfume2,
      rating: 4.9,
      description: "The world's most iconic fragrance with aldehydes and ylang-ylang"
    },
    {
      id: 3,
      name: "Sauvage",
      brand: "Dior",
      price: "$128",
      image: perfume3,
      rating: 4.7,
      description: "A fresh and powerful fragrance inspired by wide open spaces"
    }
  ];

  return (
    <section className="py-20 bg-accent/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-luxury text-4xl md:text-5xl font-semibold text-foreground mb-6">
            Featured Fragrances
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our carefully selected collection of the finest luxury perfumes
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div 
              key={product.id}
              className="group bg-card border border-border rounded-xl overflow-hidden shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-2"
            >
              {/* Product Image */}
              <div className="relative overflow-hidden bg-gradient-card">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-80 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Product Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-primary bg-accent px-3 py-1 rounded-full">
                    {product.brand}
                  </span>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-luxury-gold text-luxury-gold" />
                    <span className="text-sm font-medium text-foreground">{product.rating}</span>
                  </div>
                </div>
                
                <h3 className="font-luxury text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {product.name}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {product.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-2xl text-foreground">
                    {product.price}
                  </span>
                  <button className="bg-primary text-primary-foreground px-6 py-2 rounded-md font-medium shadow-card hover:shadow-elegant transition-all duration-300 hover:bg-primary/95">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="border border-border bg-background text-foreground px-8 py-4 rounded-md font-medium tracking-wide shadow-card hover:shadow-elegant transition-all duration-300 hover:bg-accent">
            View All Fragrances
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;