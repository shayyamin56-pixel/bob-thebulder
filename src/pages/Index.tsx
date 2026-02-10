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
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-primary/75" />
        <div className="relative z-10 text-center text-primary-foreground px-4 py-20">
          <h1 className="text-5xl md:text-7xl font-rubik font-black mb-4 animate-fade-in-up">
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
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-bold text-lg px-8 py-6">
                קרא עלינו
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-rubik font-bold text-center text-primary mb-4">
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
                  <h3 className="font-rubik font-bold text-lg mb-2 text-primary">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { num: "15+", label: "שנות ניסיון" },
              { num: "500+", label: "פרויקטים" },
              { num: "100%", label: "שביעות רצון" },
              { num: "24/7", label: "זמינות" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl md:text-5xl font-rubik font-black text-secondary mb-1">{stat.num}</div>
                <div className="text-primary-foreground/70 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-rubik font-bold text-center text-primary mb-12">
            מה הלקוחות אומרים
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <Card key={t.name} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Quote className="h-8 w-8 text-secondary/30 mb-3" />
                  <p className="text-foreground mb-4 leading-relaxed">{t.text}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-rubik font-semibold text-primary">{t.name}</span>
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
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-rubik font-bold text-secondary-foreground mb-4">
            מוכנים להתחיל?
          </h2>
          <p className="text-secondary-foreground/80 mb-8 text-lg">
            צרו קשר עכשיו וקבלו הצעת מחיר ללא התחייבות
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-10 py-6">
              צור קשר עכשיו
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Index;
