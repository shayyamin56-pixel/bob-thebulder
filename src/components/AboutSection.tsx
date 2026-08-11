import React from "react";
import { ShieldCheck, Clock, Award, ThumbsUp, HardHat } from "lucide-react";

export function AboutSection() {
  return (
    <section className="py-20 bg-card border-t border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="bg-secondary/10 text-accent font-bold px-4 py-1.5 rounded-full text-sm inline-block mb-3">
            נעים להכיר
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-primary mb-4">
            רוי המלך - בנייה ושיפוצים
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            אנו מתמחים בניהול, תכנון וביצוע של פרויקטי בנייה ושיפוצים מורכבים. עם ניסיון של שנים ומאות לקוחות מרוצים, אנו מביאים את רמת הגימור הגבוהה ביותר ישירות אליכם לבית או לעסק.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Text and Features */}
          <div className="lg:col-span-7 space-y-8">
            <h3 className="text-2xl md:text-3xl font-bold text-primary">
              למה לבחור דווקא ברוי המלך?
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              אנחנו מאמינים ששיפוץ או בנייה של בית הוא אחד הצעדים המשמעותיים ביותר בחייכם. לכן, אנו שמים דגש מוחלט על שקיפות מלאה, עמידה קפדנית בלוחות זמנים ושימוש בחומרים האיכותיים ביותר בעלי תו תקן ישראלי ובינלאומי.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="bg-secondary/10 p-3 rounded-xl text-accent shrink-0 h-12 w-12 flex items-center justify-center">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-primary mb-1">אחריות מלאה</h4>
                  <p className="text-sm text-muted-foreground">אנו מעניקים אחריות מקיפה על כל עבודה ומתחייבים לשקט הנפשי שלכם.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-secondary/10 p-3 rounded-xl text-accent shrink-0 h-12 w-12 flex items-center justify-center">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-primary mb-1">עמידה בזמנים</h4>
                  <p className="text-sm text-muted-foreground">זמן שלכם הוא קדוש. אנו מתחייבים ללוח זמנים מדויק ומפורט בחוזה.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-secondary/10 p-3 rounded-xl text-accent shrink-0 h-12 w-12 flex items-center justify-center">
                  <Award className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-primary mb-1">מקצועיות ללא פשרות</h4>
                  <p className="text-sm text-muted-foreground">צוות מומחים מנוסה ומיומן המקפיד על רמת גימור מושלמת בכל פינה.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-secondary/10 p-3 rounded-xl text-accent shrink-0 h-12 w-12 flex items-center justify-center">
                  <ThumbsUp className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-primary mb-1">ליווי אישי צמוד</h4>
                  <p className="text-sm text-muted-foreground">מנהל פרויקט אישי מלווה אתכם משלב התכנון, דרך בחירת החומרים ועד למפתח.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Image & Stats */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-background">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop"
                alt="רוי המלך בעבודה"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
              
              {/* Floating Badge */}
              <div className="absolute bottom-6 right-6 left-6 bg-background/95 backdrop-blur-sm p-6 rounded-xl border border-border shadow-lg flex items-center gap-4">
                <div className="bg-secondary text-secondary-foreground p-3 rounded-lg">
                  <HardHat className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-semibold">הסטנדרט שלנו</p>
                  <p className="text-base font-bold text-primary">בנייה בטוחה, איכותית וירוקה</p>
                </div>
              </div>
            </div>

            {/* Decorative background elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-secondary/20 rounded-full -z-10 blur-xl" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-full -z-10 blur-xl" />
          </div>
        </div>

        {/* Stats Counter Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 pt-12 border-t border-border/50">
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-black text-secondary mb-2">15+</p>
            <p className="text-sm md:text-base font-bold text-primary">שנות ניסיון בשטח</p>
          </div>
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-black text-secondary mb-2">350+</p>
            <p className="text-sm md:text-base font-bold text-primary">פרויקטים שהושלמו</p>
          </div>
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-black text-secondary mb-2">100%</p>
            <p className="text-sm md:text-base font-bold text-primary">לקוחות מרוצים וממליצים</p>
          </div>
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-black text-secondary mb-2">24/7</p>
            <p className="text-sm md:text-base font-bold text-primary">שירות ותמיכה ללקוחותינו</p>
          </div>
        </div>
      </div>
    </section>
  );
}