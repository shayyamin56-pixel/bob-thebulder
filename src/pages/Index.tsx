import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, Wrench, PaintBucket, Building2, Star, Quote } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const services = [
  { icon: Home, title: "שיפוצים כלליים", desc: "שיפוץ דירות ובתים מקצה לקצה, כולל תכנון וביצוע" },
  { icon: Building2, title: "בנייה", desc: "בניית מבנים חדשים, תוספות בנייה והרחבות" },
  { icon: Wrench, title: "תיקונים", desc: "תיקוני אינסטלציה, חשמל, ריצוף ועוד" },
  { icon: PaintBucket, title: "צביעה וגימור", desc: "עבודות צביעה פנים וחוץ, גבס וגימורים" },
];

const testimonials = [
  { name: "יוסי כהן", text: "בוב עשה לנו שיפוץ מדהים בדירה. מקצועי, אמין ובזמן. ממליץ בחום!", rating: 5 },
  { name: "רחל לוי", text: "הרחבנו את הבית ובוב ניהל את הפרויקט מצוין. תוצאה מושלמת!", rating: 5 },
  { name: "דוד אברהם", text: "תיקון מהיר ומקצועי. מחיר הוגן ושירות מעולה. תודה בוב!", rating: 5 },
];

const Index = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroBg}
            alt="אתר בנייה ושיפוץ"
            className="w-full h-full object-cover"
            fetchPriority="high"
          />
        </div>
        <div className="absolute inset-0 bg-primary/75" />
        <div className="relative z-10 text-center text-primary-foreground px-4 py-20">
          <h1 className="text-5xl md:text-7xl font-heebo font-black mb-4 animate-fade-in-up text-secondary">
            בוב הבנאי
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto" style={{ animationDelay: "0.2s" }}>
            בונים לכם את הבית שתמיד חלמתם עליו
            <br />
            מקצועיות, אמינות ומחירים הוגנים
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center" style={{ animationDelay: "0.4s" }}>
            <Link to="/contact">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold text-lg px-8 py-6">
                קבל הצעת מחיר חינם
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="outline" className="border-secondary bg-transparent text-secondary hover:bg-secondary/10 font-bold text-lg px-8 py-6">
                קרא עלינו
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heebo font-bold text-center text-primary mb-4">
            השירותים שלנו
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
            מגוון רחב של שירותי בנייה ושיפוצים לכל צורך
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Card key={service.title} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-t-4 border-t-secondary">
                <CardContent className="p-6 text-center">
                  <div className="mx-auto mb-4 bg-secondary/10 rounded-full p-4 w-fit group-hover:bg-secondary/20 transition-colors">
                    <service.icon className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="font-heebo font-bold text-lg mb-2 text-primary">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 text-primary-foreground bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { num: "15+", label: "שנות ניסיון" },
              { num: "500+", label: "פרויקטים" },
              { num: "100%", label: "שביעות רצון" },
              { num: "24/7", label: "זמינות" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-6xl md:text-7xl font-heebo font-black text-secondary mb-2">{stat.num}</div>
                <div className="text-primary-foreground/70 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heebo font-bold text-center text-primary mb-12">
            מה הלקוחות אומרים
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <Card key={t.name} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Quote className="h-8 w-8 text-secondary/30 mb-3" />
                  <p className="text-foreground mb-4 leading-relaxed">{t.text}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-heebo font-semibold text-primary">{t.name}</span>
                    <div className="flex gap-0.5">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        {/* Background with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary to-accent" />
        {/* Decorative shapes */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full translate-x-1/3 translate-y-1/3" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full" />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-block bg-primary/15 backdrop-blur-sm rounded-full px-5 py-2 mb-6">
            <span className="text-sm font-heebo font-bold text-primary">🎉 10% הנחה למזמינים דרך האתר</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-heebo font-black text-primary mb-5">
            מוכנים להתחיל?
          </h2>
          <p className="text-primary/70 mb-10 text-lg md:text-xl max-w-lg mx-auto leading-relaxed">
            צרו קשר עכשיו וקבלו הצעת מחיר מקצועית ללא התחייבות
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-10 py-7 rounded-xl shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300 hover:-translate-y-0.5">
                צור קשר עכשיו →
              </Button>
            </Link>
            <a href="tel:050-1234567" className="text-primary/80 hover:text-primary font-heebo font-semibold transition-colors flex items-center gap-2">
              <span className="bg-primary/10 rounded-full p-2">📞</span>
              או התתקשרו: 050-1234567
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
