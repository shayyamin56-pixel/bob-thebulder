import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, HardHat, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "ההודעה נשלחה בהצלחה!",
        description: "נציג מטעמנו יחזור אליך בהקדם האפשרי.",
      });
      setFormData({ name: "", phone: "", email: "", subject: "", message: "" });
    }, 1200);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Construction Background Image */}
      <div 
        className="relative bg-cover bg-center py-24 md:py-32 text-white overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.85), rgba(15, 23, 42, 0.85)), url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop')`
        }}
      >
        {/* Decorative yellow stripe */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-secondary" />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-4 py-1.5 rounded-full text-sm font-bold mb-4 animate-fade-in-up">
            <HardHat className="h-4 w-4" />
            <span>זמינים עבורכם לכל פרויקט</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight font-heebo">
            צור קשר
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            מעוניינים לשפץ, לבנות או להתייעץ? השאירו פרטים ונחזור אליכם עם הצעת מחיר משתלמת ומותאמת אישית.
          </p>
        </div>
      </div>

      {/* Contact Content */}
      <div className="container mx-auto px-4 py-16 -mt-10 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-card text-card-foreground p-8 rounded-2xl shadow-lg border border-border/50 hover:border-secondary/50 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-6 text-primary font-heebo flex items-center gap-2">
                <span className="w-1.5 h-6 bg-secondary rounded-full block" />
                פרטי התקשרות
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-secondary/10 p-3 rounded-xl text-secondary shrink-0">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-medium">טלפון ישיר</p>
                    <a href="tel:050-1234567" className="text-lg font-bold text-foreground hover:text-secondary transition-colors">
                      050-1234567
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-secondary/10 p-3 rounded-xl text-secondary shrink-0">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-medium">כתובת אימייל</p>
                    <a href="mailto:info@bob.co.il" className="text-lg font-bold text-foreground hover:text-secondary transition-colors">
                      info@bob.co.il
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-secondary/10 p-3 rounded-xl text-secondary shrink-0">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-medium">אזור פעילות</p>
                    <p className="text-lg font-bold text-foreground">תל אביב, המרכז והשרון</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card text-card-foreground p-8 rounded-2xl shadow-lg border border-border/50">
              <h3 className="text-xl font-bold mb-4 text-primary font-heebo flex items-center gap-2">
                <Clock className="h-5 w-5 text-secondary" />
                שעות פעילות
              </h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex justify-between border-b border-border/50 pb-2">
                  <span>ימים א׳ - ה׳:</span>
                  <span className="font-semibold text-foreground">08:00 - 18:00</span>
                </div>
                <div className="flex justify-between border-b border-border/50 pb-2">
                  <span>יום שישי וערבי חג:</span>
                  <span className="font-semibold text-foreground">08:00 - 13:00</span>
                </div>
                <div className="flex justify-between pt-1">
                  <span>יום שבת:</span>
                  <span className="font-semibold text-destructive">סגור</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-card text-card-foreground p-8 md:p-10 rounded-2xl shadow-lg border border-border/50">
              <h2 className="text-3xl font-bold mb-2 text-primary font-heebo">
                שלחו לנו הודעה
              </h2>
              <p className="text-muted-foreground mb-8">
                נשמח לענות על כל שאלה ולתת לכם ייעוץ ראשוני ללא כל התחייבות.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-semibold text-foreground">
                      שם מלא *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="ישראל ישראלי"
                      className="bg-background border-border/80 focus-visible:ring-secondary"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-semibold text-foreground">
                      מספר טלפון *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="050-1234567"
                      className="bg-background border-border/80 focus-visible:ring-secondary"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-semibold text-foreground">
                      כתובת אימייל
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@example.com"
                      className="bg-background border-border/80 focus-visible:ring-secondary"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-semibold text-foreground">
                      נושא הפנייה
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="לדוגמה: שיפוץ דירה, בניית תוספת"
                      className="bg-background border-border/80 focus-visible:ring-secondary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-semibold text-foreground">
                    תוכן ההודעה *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="ספרו לנו קצת על הפרויקט שלכם..."
                    className="bg-background border-border/80 focus-visible:ring-secondary resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold px-8 py-6 text-base rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span className="animate-pulse">שולח...</span>
                  ) : (
                    <>
                      <span>שלח הודעה</span>
                      <Send className="h-4 w-4 rotate-180" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
