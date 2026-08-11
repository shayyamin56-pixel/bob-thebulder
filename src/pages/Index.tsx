import { HeroScrollDemo } from "@/components/HeroScrollDemo";
import { AboutSection } from "@/components/AboutSection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Phone } from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <HeroScrollDemo />
      <AboutSection />
      
      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-black mb-4">מוכנים להתחיל את פרויקט החלומות שלכם?</h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            צרו קשר עוד היום לפגישת ייעוץ ראשונית ללא התחייבות. אנחנו כאן כדי להגשים לכם את החלום!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="font-bold gap-2">
                <Phone className="h-5 w-5" />
                דברו איתנו עכשיו
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="outline" className="bg-transparent text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/10 font-bold gap-2">
                קראו עוד עלינו
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}