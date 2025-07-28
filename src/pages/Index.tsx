import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import BrandShowcase from "@/components/BrandShowcase";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Navigation />
      <Hero />
      <BrandShowcase />
      <ProductGrid />
      <Footer />
    </div>
  );
};

export default Index;
