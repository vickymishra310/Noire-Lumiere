const BrandShowcase = () => {
  const brands = [
    {
      name: "Tom Ford",
      description: "Bold and seductive fragrances",
      specialty: "Private Blend Collection"
    },
    {
      name: "Chanel",
      description: "Timeless elegance and sophistication",
      specialty: "Les Exclusifs"
    },
    {
      name: "Dior",
      description: "French luxury and craftsmanship",
      specialty: "Maison Christian Dior"
    },
    {
      name: "Maison Margiela",
      description: "Avant-garde and experimental",
      specialty: "Replica Collection"
    },
    {
      name: "Creed",
      description: "Heritage and artisanal tradition",
      specialty: "Millésime Collection"
    },
    {
      name: "Byredo",
      description: "Modern minimalism meets luxury",
      specialty: "Limited Editions"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-luxury text-4xl md:text-5xl font-semibold text-foreground mb-6 animate-fade-in-up">
            Curated Luxury Brands
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Discover fragrances from the world's most prestigious perfume houses
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {brands.map((brand, index) => (
            <div 
              key={brand.name}
              className="group bg-card border border-border rounded-lg p-8 shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center">
                <h3 className="font-luxury text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {brand.name}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {brand.description}
                </p>
                <div className="text-sm font-medium text-primary bg-accent px-4 py-2 rounded-full inline-block">
                  {brand.specialty}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandShowcase;