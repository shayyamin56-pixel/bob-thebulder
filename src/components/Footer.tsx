import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, HardHat, ArrowUp, Clock, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-primary text-primary-foreground relative overflow-hidden">
      <div className="h-1.5 bg-gradient-to-r from-secondary via-accent to-secondary" />

      <div className="container mx-auto px-4 py-14 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & About */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="bg-secondary/20 rounded-xl p-2.5">
                <HardHat className="h-7 w-7 text-secondary" />
              </div>
              <span className="text-2xl font-heebo font-black text-secondary">בוב הבנאי</span>
            </div>
            <p className="text-primary-foreground/70 leading-relaxed text-sm">
              שירותי בנייה ושיפוצים מקצועיים עם למעלה מ-15 שנות ניסיון. אמינות, איכות ומחירים הוגנים.
            </p>
            <div className="flex gap-3 mt-5">
              <a href="#" aria-label="פייסבוק" className="bg-primary-foreground/10 hover:bg-secondary/20 rounded-lg p-2 transition-colors">
                <Facebook className="h-5 w-5 text-secondary" />
              </a>
              <a href="#" aria-label="אינסטגרם" className="bg-primary-foreground/10 hover:bg-secondary/20 rounded-lg p-2 transition-colors">
                <Instagram className="h-5 w-5 text-secondary" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-heebo font-bold text-lg mb-4 text-secondary">ניווט מהיר</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><Link to="/" className="hover:text-secondary transition-colors">דף הבית</Link></li>
              <li><Link to="/about" className="hover:text-secondary transition-colors">אודות</Link></li>
              <li><Link to="/contact" className="hover:text-secondary transition-colors">צור קשר</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heebo font-bold text-lg mb-4 text-secondary">יצירת קשר</h3>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-secondary" />
                <a href="tel:050-1234567" className="hover:text-secondary transition-colors">050-1234567</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-secondary" />
                <a href="mailto:info@bob.co.il" className="hover:text-secondary transition-colors">info@bob.co.il</a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-secondary" />
                <span>תל אביב והמרכז</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-heebo font-bold text-lg mb-4 text-secondary">שעות פעילות</h3>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-secondary" />
                <span>א׳-ה׳: 08:00 - 18:00</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-secondary" />
                <span>ו׳: 08:00 - 13:00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/50 text-sm">© {new Date().getFullYear()} בוב הבנאי. כל הזכויות שמורות.</p>
          <button onClick={scrollToTop} className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-secondary transition-colors">
            <ArrowUp className="h-4 w-4" />
            חזרה למעלה
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
