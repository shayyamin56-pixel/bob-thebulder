import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Clock, ThumbsUp, Award, Users, CheckCircle } from "lucide-react";

const values = [
  { icon: Shield, title: "אמינות", desc: "עומדים בהבטחות, בלוחות זמנים ובתקציב המוסכם" },
  { icon: Award, title: "מקצועיות", desc: "צוות מיומן עם הכשרה מקצועית וניסיון רב" },
  { icon: ThumbsUp, title: "מחירים הוגנים", desc: "הצעות מחיר שקופות ללא הפתעות. תמורה מלאה לכספכם" },
  { icon: Clock, title: "עמידה בזמנים", desc: "מסיימים בזמן שנקבע, ללא עיכובים מיותרים" },
  { icon: Users, title: "שירות אישי", desc: "ליווי צמוד לאורך כל הפרויקט, מהתכנון ועד הגימור" },
  { icon: CheckCircle, title: "אחריות מלאה", desc: "אחריות על כל העבודות שלנו, שקט נפשי מובטח" },
];

const About = () => {
  return (
    <main>
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-heebo font-black mb-4">אודות בוב הבנאי</h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            מעל 15 שנות ניסיון בבנייה ושיפוצים ברחבי הארץ
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-heebo font-bold text-primary mb-6">הסיפור שלנו</h2>
            <div className="space-y-4 text-foreground/80 leading-relaxed text-lg">
              <p>
                בוב הבנאי הוקמה לפני למעלה מ-15 שנה מתוך אהבה אמיתית למלאכת הבנייה והשיפוץ.
                מה שהתחיל כעסק קטן של אדם אחד, הפך לחברה מובילה בתחום הבנייה והשיפוצים בישראל.
              </p>
              <p>
                לאורך השנים צברנו ניסיון רב במגוון רחב של פרויקטים - משיפוץ דירות ובתים פרטיים,
                דרך בניית תוספות והרחבות, ועד פרויקטים מסחריים. כל פרויקט מלווה בתשומת לב לפרטים,
                מקצועיות ללא פשרות ומחויבות לשביעות רצון הלקוח.
              </p>
              <p>
                אנחנו מאמינים שכל בית ראוי לטיפול מקצועי ואיכותי. הצוות שלנו מורכב מאנשי מקצוע
                מנוסים ומיומנים, המחויבים לספק תוצאות ברמה הגבוהה ביותר.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heebo font-bold text-center text-primary mb-12">
            למה לבחור בנו?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => (
              <Card key={v.title} className="hover:shadow-lg transition-shadow border-r-4 border-r-secondary">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-secondary/10 rounded-full p-3 shrink-0">
                      <v.icon className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-heebo font-bold text-lg text-primary mb-1">{v.title}</h3>
                      <p className="text-muted-foreground text-sm">{v.desc}</p>
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
          <h2 className="text-3xl font-heebo font-bold text-secondary-foreground mb-4">
            רוצים לשמוע עוד?
          </h2>
          <p className="text-secondary-foreground/80 mb-8 text-lg">נשמח לספר לכם עוד ולתת הצעת מחיר</p>
          <Link to="/contact">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-10 py-6">
              צור קשר
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default About;
