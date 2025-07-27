import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import perfumeCollection from "@/assets/perfume-collection.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-luxury">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-luxury text-5xl md:text-6xl font-bold text-foreground mb-6">
              About Noire Lumière
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Where luxury meets artistry in the world of fine fragrances
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-luxury text-4xl font-semibold text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Founded with a passion for the finest fragrances, Noire Lumière represents 
                  the pinnacle of luxury perfumery. We curate an exclusive collection from 
                  the world's most prestigious perfume houses, bringing you scents that 
                  define elegance and sophistication.
                </p>
                <p>
                  Our journey began with a simple belief: that fragrance is more than just 
                  a scent—it's a personal signature, a memory, an emotion captured in a bottle. 
                  Each perfume in our collection is carefully selected for its artistry, 
                  quality, and the story it tells.
                </p>
                <p>
                  From the bold and mysterious Tom Ford creations to the timeless elegance 
                  of Chanel, we offer a gateway to the most coveted fragrances in the world. 
                  Our commitment is to provide an unparalleled luxury experience, from 
                  discovery to delivery.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={perfumeCollection} 
                alt="Luxury perfume collection"
                className="w-full rounded-xl shadow-elegant"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-luxury text-4xl font-semibold text-foreground mb-6">
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our curation and service
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card border border-border rounded-xl p-8 shadow-card text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-primary rounded-full"></div>
              </div>
              <h3 className="font-luxury text-xl font-semibold text-foreground mb-4">
                Authenticity
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Every fragrance is guaranteed authentic, sourced directly from 
                authorized retailers and luxury perfume houses.
              </p>
            </div>
            
            <div className="bg-card border border-border rounded-xl p-8 shadow-card text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-primary rounded-full"></div>
              </div>
              <h3 className="font-luxury text-xl font-semibold text-foreground mb-4">
                Curation
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Our expert team carefully selects only the finest fragrances, 
                ensuring each scent meets our exacting standards.
              </p>
            </div>
            
            <div className="bg-card border border-border rounded-xl p-8 shadow-card text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-primary rounded-full"></div>
              </div>
              <h3 className="font-luxury text-xl font-semibold text-foreground mb-4">
                Experience
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                From personalized recommendations to luxury packaging, 
                we create an unforgettable fragrance discovery journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-luxury text-4xl font-semibold text-foreground mb-8">
              Our Mission
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              To democratize access to luxury fragrances while preserving the artistry 
              and craftsmanship that makes each scent extraordinary. We believe that 
              everyone deserves to experience the transformative power of exceptional perfumery.
            </p>
            <div className="bg-gradient-card border border-border rounded-xl p-8 shadow-luxury">
              <p className="font-luxury text-2xl text-foreground italic">
                "Fragrance is the most intense form of memory."
              </p>
              <p className="text-muted-foreground mt-4">— Jean-Claude Ellena, Master Perfumer</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;