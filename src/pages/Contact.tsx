import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      toast({ title: "שגיאה", description: "אנא מלא שם וטלפון", variant: "destructive" });
      return;
    }
    if (sending) return;
    setSending(true);

    try {
      const { data, error } = await supabase.functions.invoke("send-lead-email", {
        body: form,
      });

      if (error) throw error;

      toast({ title: "הפנייה נשלחה בהצלחה! ✅", description: "ניצור אתכם קשר בהקדם" });
      setForm({ name: "", phone: "", email: "", message: "" });
    } catch (err) {
      console.error("Error sending lead:", err);
      toast({ title: "שגיאה בשליחה", description: "נסו שוב מאוחר יותר", variant: "destructive" });
    } finally {
      setSending(false);
    }
  };

  const contactInfo = [
    { icon: Phone, label: "טלפון", value: "050-1234567" },
    { icon: Mail, label: "אימייל", value: "bob@builder.co.il" },
    { icon: MapPin, label: "כתובת", value: "רחוב הבנאים 1, תל אביב" },
    { icon: Clock, label: "שעות פעילות", value: "א'-ה' 07:00-18:00\nו' 07:00-13:00" },
  ];

  return (
    <main>
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-heebo font-black mb-4">צור קשר</h1>
          <p className="text-xl text-primary-foreground/80">נשמח לשמוע מכם ולתת הצעת מחיר</p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-heebo font-bold text-primary mb-6">השאירו פרטים</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <Label htmlFor="name">שם מלא *</Label>
                    <Input
                      id="name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="השם שלכם"
                      maxLength={100}
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">טלפון *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="050-0000000"
                      maxLength={15}
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">אימייל</Label>
                    <Input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="email@example.com"
                      maxLength={255}
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">תיאור הפרויקט</Label>
                    <Textarea
                      id="message"
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="ספרו לנו על הפרויקט שלכם..."
                      rows={5}
                      maxLength={1000}
                    />
                  </div>
                  <Button type="submit" size="lg" disabled={sending} className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold text-lg py-6">
                    {sending ? "שולח..." : "שלח פנייה"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-6">
              <h2 className="text-2xl font-heebo font-bold text-primary mb-2">פרטי התקשרות</h2>
              <p className="text-muted-foreground mb-6">
                אתם מוזמנים ליצור קשר בכל דרך שנוחה לכם. אנחנו זמינים ונשמח לעזור!
              </p>
              {contactInfo.map((item) => (
                <Card key={item.label} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-5 flex items-start gap-4">
                    <div className="bg-secondary/10 rounded-full p-3 shrink-0">
                      <item.icon className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-heebo font-semibold text-primary">{item.label}</h3>
                      <p className="text-muted-foreground text-sm whitespace-pre-line">{item.value}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}

              <Card className="bg-secondary/10 border-secondary/30">
                <CardContent className="p-5 text-center">
                  <p className="font-heebo font-bold text-secondary text-lg">🎉 10% הנחה למזמינים דרך האתר!</p>
                  <p className="text-sm text-muted-foreground mt-1">ציינו שהגעתם דרך האתר ותקבלו הנחה מיוחדת</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
