import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, HardHat, ArrowUp, Clock, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return ( 
    <footer className="bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative top border */}
      <div className="h-1.5 bg-gradient-to-r from-secondary via-accent to-secondary" />

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="container mx-auto px-4 py-14 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & About */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="bg-secondary/20 rounded-xl p-2.5">
                <HardHat className="h-7 w-7 text-secondary" />
              </div>
              <span className="text-xl font-black tracking-tight">בוב הבנאי</span>
            </div>
            <p className="text-primary-foreground/60 text-sm leading-relaxed mb-6">
              שירותי בנייה ושיפוצים מקצועיים. מעל 15 שנות ניסיון בתחום. מחויבים לאיכות ולשביעות רצון הלקוח.
            </p>
            <div className="flex gap-3">
              <a href="#" className="bg-primary-foreground/10 hover:bg-secondary/30 transition-colors rounded-lg p-2.5 group">
                <Facebook className="h-4 w-4 text-primary-foreground/60 group-hover:text-secondary transition-colors" />
              </a>
              <a href="#" className="bg-primary-foreground/10 hover:bg-secondary/30 transition-colors rounded-lg p-2.5 group">
                <Instagram className="h-4 w-4 text-primary-foreground/60 group-hover:text-secondary transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-base mb-5 text-secondary flex items-center gap-2">
              <span className="w-8 h-0.5 bg-secondary rounded-full" />
              קישורים מהירים
            </h3>
            <nav className="space-y-3">
              <Link to="/" className="block text-sm text-primary-foreground/60 hover:text-secondary hover:translate-x-[-4px] transition-all duration-200">דף הבית</Link>
              <Link to="/about" className="block text-sm text-primary-foreground/60 hover:text-secondary hover:translate-x-[-4px] transition-all duration-200">אודות</Link>
              <Link to="/contact" className="block text-sm text-primary-foreground/60 hover:text-secondary hover:translate-x-[-4px] transition-all duration-200">צור קשר</Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-base mb-5 text-secondary flex items-center gap-2">
              <span className="w-8 h-0.5 bg-secondary rounded-full" />
              צור קשר
            </h3>
            <div className="space-y-4">
              <a href="tel:05235466" className="flex items-center gap-3 text-sm text-primary-foreground/60 hover:text-secondary transition-colors group">
                <div className="bg-primary-foreground/10 group-hover:bg-secondary/20 rounded-lg p-2 transition-colors">
                  <Phone className="h-4 w-4" />
                </div>
                <span>052-35466</span>
              </a>
              <a href="mailto:shahy@gmail.com" className="flex items-center gap-3 text-sm text-primary-foreground/60 hover:text-secondary transition-colors group">
                <div className="bg-primary-foreground/10 group-hover:bg-secondary/20 rounded-lg p-2 transition-colors">
                  <Mail className="h-4 w-4" />
                </div>
                <span>shahy@gmail.com</span>
              </a>
              <div className="flex items-center gap-3 text-sm text-primary-foreground/60">
                <div className="bg-primary-foreground/10 rounded-lg p-2">
                  <MapPin className="h-4 w-4" />
                </div>
                <span>תל אביב, ישראל</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-bold text-base mb-5 text-secondary flex items-center gap-2">
              <span className="w-8 h-0.5 bg-secondary rounded-full" />
              שעות פעילות
            </h3>
            <div className="space-y-3 text-sm text-primary-foreground/60">
              <div className="flex items-center gap-3">
                <div className="bg-primary-foreground/10 rounded-lg p-2">
                  <Clock className="h-4 w-4" />
                </div>
                <div>
                  <p>עובדים שבע ימים בשבוע</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold text-sm px-5 py-2.5 rounded-lg transition-colors"
            >
              קבל הצעת מחיר ←
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-primary-foreground/10 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} בוב הבנאי. כל הזכויות שמורות.
          </p>
          <button
            onClick={scrollToTop}
            className="bg-primary-foreground/10 hover:bg-secondary hover:text-secondary-foreground transition-all rounded-lg p-2.5 group flex items-center gap-2 text-xs"
          >
            <span>חזרה למעלה</span>
            <ArrowUp className="h-4 w-4 transition-transform group-hover:-translate-y-1" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;