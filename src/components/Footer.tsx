import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, HardHat } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <HardHat className="h-7 w-7 text-secondary" />
              <span className="text-lg font-rubik font-bold">בוב הבנאי</span>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              שירותי בנייה ושיפוצים מקצועיים. מעל 15 שנות ניסיון בתחום. מחויבים לאיכות ולשביעות רצון הלקוח.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-rubik font-bold text-lg mb-4 text-secondary">קישורים מהירים</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-sm text-primary-foreground/70 hover:text-secondary transition-colors">דף הבית</Link>
              <Link to="/about" className="block text-sm text-primary-foreground/70 hover:text-secondary transition-colors">אודות</Link>
              <Link to="/contact" className="block text-sm text-primary-foreground/70 hover:text-secondary transition-colors">צור קשר</Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-rubik font-bold text-lg mb-4 text-secondary">צור קשר</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-primary-foreground/70">
                <Phone className="h-4 w-4 text-secondary" />
                <span>050-1234567</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-primary-foreground/70">
                <Mail className="h-4 w-4 text-secondary" />
                <span>bob@builder.co.il</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-primary-foreground/70">
                <MapPin className="h-4 w-4 text-secondary" />
                <span>תל אביב, ישראל</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center text-sm text-primary-foreground/50">
          © {new Date().getFullYear()} בוב הבנאי. כל הזכויות שמורות.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
