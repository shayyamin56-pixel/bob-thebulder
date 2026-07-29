import { HardHat, Award, Users, ShieldCheck, Clock } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Background Image */}
      <div 
        className="relative bg-cover bg-center py-24 md:py-32 text-white"
        style={{ 
          backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.75), rgba(15, 23, 42, 0.85)), url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1400&auto=format&fit=crop')` 
        }}
      >
        <div className="container mx-auto px-4 text-center relative z-10">
          <span className="bg-secondary text-secondary-foreground px-4 py-1.5 rounded-full text-sm font-bold inline-block mb-4 animate-fade-in-up">
            קצת עלינו
          </span>
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight animate-fade-in-up">
            בוב הבנאי - בונים את העתיד שלכם
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed animate-fade-in-up">
            למעלה מ-15 שנות ניסיון של מצוינות, אמינות ומקצועיות ללא פשרות בענף הבנייה והשיפוצים בישראל.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-primary mb-6">הסיפור שלנו</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              חברת "בוב הבנאי" הוקמה מתוך חזון להביא סטנדרט חדש של איכות, שקיפות ומקצועיות לעולם השיפוצים והבנייה בישראל. אנו מאמינים שבית הוא לא רק קירות, אלא המקום הבטוח והחם שלכם, ולכן אנו מתייחסים לכל פרויקט כאילו היה הבית הפרטי שלנו.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              במהלך השנים ביצענו מאות פרויקטים מושקעים - החל משיפוצי קוסמטיקה קלים ועד לבנייה מאפס ושיפוצים קומפלט של דירות יוקרה, משרדים וחנויות. הצוות שלנו מורכב מאנשי המקצוע המובילים בתחומם, המחויבים לרמת הגימור הגבוהה ביותר ולעמידה קפדנית בלוחות הזמנים.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-card p-6 rounded-2xl border shadow-sm text-center">
              <Award className="h-10 w-10 text-secondary mx-auto mb-3" />
              <h3 className="font-bold text-lg text-primary mb-1">15+ שנות ניסיון</h3>
              <p className="text-xs text-muted-foreground">של עבודה מקצועית בשטח</p>
            </div>
            <div className="bg-card p-6 rounded-2xl border shadow-sm text-center">
              <Users className="h-10 w-10 text-secondary mx-auto mb-3" />
              <h3 className="font-bold text-lg text-primary mb-1">500+ לקוחות</h3>
              <p className="text-xs text-muted-foreground">מרוצים וממליצים בכל הארץ</p>
            </div>
            <div className="bg-card p-6 rounded-2xl border shadow-sm text-center">
              <ShieldCheck className=