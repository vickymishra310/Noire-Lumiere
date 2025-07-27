import heroImage from "@/assets/hero-perfume.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-luxury flex items-center justify-center relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-primary rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main heading */}
          <h1 className="font-luxury text-6xl md:text-8xl font-bold text-foreground mb-8 tracking-tight">
            Noire Lumière
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 font-light tracking-wide max-w-2xl mx-auto">
            Discover the art of luxury fragrance. Where elegance meets sophistication in every note.
          </p>
          
          {/* Hero Image */}
          <div className="relative mb-12">
            <div className="relative max-w-md mx-auto">
              {/* Geometric platform base */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-80 h-20 bg-gradient-card rounded-lg shadow-luxury"></div>
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-60 h-16 bg-gradient-card rounded-lg shadow-card"></div>
              
              {/* Perfume bottle */}
              <img 
                src={heroImage} 
                alt="Noire Lumière signature fragrance" 
                className="relative z-10 w-full h-auto drop-shadow-elegant"
              />
            </div>
            
            {/* Floating accent elements */}
            <div className="absolute top-10 left-10 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <div className="absolute top-20 right-10 w-1 h-1 bg-primary rounded-full animate-pulse delay-1000"></div>
            <div className="absolute bottom-20 left-16 w-1.5 h-1.5 bg-primary rounded-full animate-pulse delay-500"></div>
          </div>
          
          {/* CTA */}
          <div className="space-x-6">
            <button className="bg-primary text-primary-foreground px-8 py-4 rounded-md font-medium tracking-wide shadow-luxury hover:shadow-elegant transition-all duration-300 hover:bg-primary/95">
              Explore Collection
            </button>
            <button className="border border-border bg-background/80 backdrop-blur-sm text-foreground px-8 py-4 rounded-md font-medium tracking-wide shadow-card hover:shadow-elegant transition-all duration-300 hover:bg-accent">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;