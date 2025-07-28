import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Star, ArrowLeft, Heart, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import perfume1 from '@/assets/perfume-1.jpg';
import perfume2 from '@/assets/perfume-2.jpg';
import perfume3 from '@/assets/perfume-3.jpg';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState('50ml');
  const [isFavorite, setIsFavorite] = useState(false);

  // Sample product data - in a real app, this would come from an API
  const products = [
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
      description: "A luxurious and sensual fragrance with dark chocolate and black truffle that creates an opulent and mysterious aura.",
      fullDescription: "Black Orchid is Tom Ford's original signature scent. This is a luxurious and sensual fragrance of rich, dark accords and an alluring potion of black orchids and spice, Tom Ford's sexy signature is an ultra-glamorous fragrance."
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
      description: "The world's most iconic fragrance with aldehydes and ylang-ylang.",
      fullDescription: "CHANEL N°5 is the very essence of femininity. Its floral-aldehydic bouquet is timeless and sophisticated. The fragrance is composed around May rose and jasmine."
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
      description: "A fresh and powerful fragrance inspired by wide open spaces.",
      fullDescription: "Sauvage is an act of creation inspired by wide-open spaces. An ozone blue sky stretched out over rocky peaks, a white-hot desert wind."
    }
  ];

  const product = products.find(p => p.id === parseInt(id || ''));

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-luxury mb-4">Product not found</h1>
          <Link to="/fragrances" className="text-primary hover:underline">
            Back to Fragrances
          </Link>
        </div>
      </div>
    );
  }

  const sizes = ['30ml', '50ml', '100ml'];

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      brand: product.brand,
      price: product.price,
      image: product.image,
      notes: product.notes,
      category: product.category
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-6 py-8">
        {/* Back button */}
        <Link 
          to="/fragrances" 
          className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors duration-200 mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-200" />
          Back to Fragrances
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Image */}
          <div className="relative">
            <div className="sticky top-8">
              <div className="relative overflow-hidden rounded-2xl bg-gradient-card shadow-elegant">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-[600px] object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 flex gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    className="bg-background/80 backdrop-blur-sm"
                    onClick={() => setIsFavorite(!isFavorite)}
                  >
                    <Heart className={`w-4 h-4 ${isFavorite ? 'fill-destructive text-destructive' : ''}`} />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="bg-background/80 backdrop-blur-sm"
                  >
                    <Share2 className="w-4 h-4" />
                  </Button>
                </div>
                {product.originalPrice && (
                  <div className="absolute top-4 left-4 bg-destructive text-destructive-foreground px-3 py-1 rounded-full text-sm font-medium animate-pulse">
                    Sale
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-primary bg-accent px-3 py-1 rounded-full text-sm font-medium">
                  {product.brand}
                </span>
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 fill-luxury-gold text-luxury-gold" />
                  <span className="font-medium">{product.rating}</span>
                  <span className="text-muted-foreground">({product.reviews} reviews)</span>
                </div>
              </div>
              
              <h1 className="font-luxury text-4xl md:text-5xl font-bold text-foreground mb-4">
                {product.name}
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                {product.description}
              </p>
            </div>

            {/* Price */}
            <div className="flex items-center gap-4 mb-6">
              <span className="font-semibold text-3xl text-foreground">
                {product.price}
              </span>
              {product.originalPrice && (
                <span className="text-xl text-muted-foreground line-through">
                  {product.originalPrice}
                </span>
              )}
            </div>

            {/* Size Selection */}
            <div className="space-y-3">
              <label className="text-sm font-medium text-foreground">Size:</label>
              <div className="flex gap-3">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 rounded-md border transition-all duration-200 ${
                      selectedSize === size
                        ? 'border-primary bg-primary text-primary-foreground'
                        : 'border-border bg-background text-foreground hover:border-primary'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Notes */}
            <div className="space-y-3">
              <label className="text-sm font-medium text-foreground">Key Notes:</label>
              <div className="flex flex-wrap gap-2">
                {product.notes.map((note, index) => (
                  <span 
                    key={index} 
                    className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {note}
                  </span>
                ))}
              </div>
            </div>

            {/* Add to Cart */}
            <div className="space-y-4 pt-6">
              <Button 
                onClick={handleAddToCart}
                className="w-full bg-primary text-primary-foreground py-4 text-lg font-medium shadow-elegant hover:shadow-luxury transition-all duration-300 hover:scale-105"
              >
                Add to Cart - {product.price}
              </Button>
              
              <Button 
                variant="outline" 
                className="w-full py-4 text-lg font-medium border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                Buy Now
              </Button>
            </div>

            {/* Full Description */}
            <div className="pt-6 border-t border-border">
              <h3 className="font-semibold text-lg text-foreground mb-3">About this fragrance</h3>
              <p className="text-muted-foreground leading-relaxed">
                {product.fullDescription}
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;