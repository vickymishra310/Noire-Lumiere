const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="font-luxury text-3xl font-semibold mb-4">Noire Lumière</h3>
            <p className="text-primary-foreground/80 leading-relaxed max-w-md">
              Curating the world's finest luxury fragrances. Experience the art of perfumery 
              with our carefully selected collection from prestigious houses.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Home</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">About</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Fragrances</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Brands</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>support@noirelumiere.com</li>
              <li>+1 (555) 123-4567</li>
              <li>Mon - Fri: 9AM - 6PM EST</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © 2024 Noire Lumière. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;