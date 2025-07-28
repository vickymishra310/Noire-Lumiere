import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import perfume1 from "@/assets/perfume-1.jpg";
import perfume2 from "@/assets/perfume-2.jpg";
import perfume3 from "@/assets/perfume-3.jpg";
import { Star, Filter, Search } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

const Fragrances = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedBrand, setSelectedBrand] = useState("all");
  const { addToCart } = useCart();

  const fragrances = [
    {
      id: 1,
      name: "Black Orchid",
      brand: "Tom Ford",
      price: "$195",
      originalPrice: "$230",
      image: perfume1,
      rating: 4.8,
      reviews: 342,
      category: "unisex",
      notes: ["Black Truffle", "Dark Chocolate", "Black Orchid"],
      description: "A luxurious and sensual fragrance with dark chocolate and black truffle"
    },
    {
      id: 2,
      name: "No. 5",
      brand: "Chanel",
      price: "$142",
      image: perfume2,
      rating: 4.9,
      reviews: 856,
      category: "women",
      notes: ["Aldehydes", "Ylang-Ylang", "Sandalwood"],
      description: "The world's most iconic fragrance with aldehydes and ylang-ylang"
    },
    {
      id: 3,
      name: "Sauvage",
      brand: "Dior",
      price: "$128",
      image: perfume3,
      rating: 4.7,
      reviews: 623,
      category: "men",
      notes: ["Bergamot", "Sichuan Pepper", "Ambroxan"],
      description: "A fresh and powerful fragrance inspired by wide open spaces"
    },
    {
      id: 4,
      name: "Oud Wood",
      brand: "Tom Ford",
      price: "$285",
      image: perfume1,
      rating: 4.6,
      reviews: 287,
      category: "unisex",
      notes: ["Oud", "Sandalwood", "Vanilla"],
      description: "An exotic blend of rare oud, sandalwood, and vanilla"
    },
    {
      id: 5,
      name: "Coco Mademoiselle",
      brand: "Chanel",
      price: "$168",
      image: perfume2,
      rating: 4.8,
      reviews: 743,
      category: "women",
      notes: ["Orange", "Jasmine", "Patchouli"],
      description: "A vibrant and sophisticated oriental fragrance"
    },
    {
      id: 6,
      name: "Homme Intense",
      brand: "Dior",
      price: "$165",
      image: perfume3,
      rating: 4.5,
      reviews: 456,
      category: "men",
      notes: ["Lavender", "Iris", "Cedar"],
      description: "An intense and sophisticated masculine fragrance"
    }
  ];

  const categories = [
    { value: "all", label: "All Fragrances" },
    { value: "men", label: "Men's" },
    { value: "women", label: "Women's" },
    { value: "unisex", label: "Unisex" }
  ];

  const brands = [
    { value: "all", label: "All Brands" },
    { value: "Tom Ford", label: "Tom Ford" },
    { value: "Chanel", label: "Chanel" },
    { value: "Dior", label: "Dior" }
  ];

  const filteredFragrances = fragrances.filter(fragrance => {
    const categoryMatch = selectedCategory === "all" || fragrance.category === selectedCategory;
    const brandMatch = selectedBrand === "all" || fragrance.brand === selectedBrand;
    return categoryMatch && brandMatch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-luxury">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-luxury text-5xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in-up">
              Luxury Fragrances
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Discover our curated collection of the world's finest perfumes
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-accent/30 border-b border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-muted-foreground" />
              <span className="font-medium text-foreground">Filters:</span>
            </div>
            
            <div className="flex items-center gap-2">
              <label className="text-sm font-medium text-muted-foreground">Category:</label>
              <select 
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-background border border-border rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              >
                {categories.map(category => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>
            
            <div className="flex items-center gap-2">
              <label className="text-sm font-medium text-muted-foreground">Brand:</label>
              <select 
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                className="bg-background border border-border rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              >
                {brands.map(brand => (
                  <option key={brand.value} value={brand.value}>
                    {brand.label}
                  </option>
                ))}
              </select>
            </div>
            
            <div className="ml-auto">
              <span className="text-sm text-muted-foreground">
                {filteredFragrances.length} fragrance{filteredFragrances.length !== 1 ? 's' : ''} found
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredFragrances.map((fragrance, index) => (
              <div 
                key={fragrance.id}
                className="group bg-card border border-border rounded-xl overflow-hidden shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Product Image */}
                <Link to={`/product/${fragrance.id}`}>
                  <div className="relative overflow-hidden bg-gradient-card cursor-pointer">
                    <img 
                      src={fragrance.image} 
                      alt={fragrance.name}
                      className="w-full h-80 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    {fragrance.originalPrice && (
                      <div className="absolute top-4 left-4 bg-destructive text-destructive-foreground px-2 py-1 rounded-full text-xs font-medium animate-bounce-in">
                        Sale
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </Link>
                
                {/* Product Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-primary bg-accent px-3 py-1 rounded-full">
                      {fragrance.brand}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-luxury-gold text-luxury-gold" />
                      <span className="text-sm font-medium text-foreground">{fragrance.rating}</span>
                      <span className="text-sm text-muted-foreground">({fragrance.reviews})</span>
                    </div>
                  </div>
                  
                  <Link to={`/product/${fragrance.id}`}>
                    <h3 className="font-luxury text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300 cursor-pointer">
                      {fragrance.name}
                    </h3>
                  </Link>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                    {fragrance.description}
                  </p>
                  
                  {/* Notes */}
                  <div className="mb-4">
                    <p className="text-xs font-medium text-muted-foreground mb-1">Key Notes:</p>
                    <div className="flex flex-wrap gap-1">
                      {fragrance.notes.map((note, index) => (
                        <span key={index} className="text-xs bg-accent text-accent-foreground px-2 py-1 rounded">
                          {note}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-2xl text-foreground">
                        {fragrance.price}
                      </span>
                      {fragrance.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">
                          {fragrance.originalPrice}
                        </span>
                      )}
                    </div>
                    <button 
                      onClick={() => addToCart({
                        id: fragrance.id,
                        name: fragrance.name,
                        brand: fragrance.brand,
                        price: fragrance.price,
                        image: fragrance.image,
                        notes: fragrance.notes,
                        category: fragrance.category
                      })}
                      className="bg-primary text-primary-foreground px-6 py-2 rounded-md font-medium shadow-card hover:shadow-elegant transition-all duration-300 hover:bg-primary/95 hover:scale-105"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Fragrances;