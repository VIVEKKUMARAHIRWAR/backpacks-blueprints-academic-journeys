import { Link } from "react-router-dom";
import { Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container-academic py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/10 rounded flex items-center justify-center">
                <span className="font-display text-xl font-semibold text-foreground">B</span>
              </div>
              <span className="font-display text-lg font-medium text-foreground">
                Backpacks & Blueprints
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Architecture-led travel and academic exploration. 
              Bridging pedagogy and place through structured observation.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium text-foreground uppercase tracking-wider">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2">
              <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
              <Link to="/study-tours" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Study Tours
              </Link>
              <Link to="/heritage-walks" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Heritage Walks
              </Link>
              <Link to="/documentation" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Documentation
              </Link>
              <Link to="/collaborations" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Collaborations
              </Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium text-foreground uppercase tracking-wider">
              Connect
            </h4>
            <div className="space-y-3">
              <a 
                href="mailto:hello@backpacksandblueprints.in" 
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail size={16} />
                hello@backpacksandblueprints.in
              </a>
              <a 
                href="https://instagram.com/backpacksandblueprints" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Instagram size={16} />
                @backpacksandblueprints
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Backpacks & Blueprints. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground">
              An initiative for architectural education through travel
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
