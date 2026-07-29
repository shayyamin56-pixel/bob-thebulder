import { useState } from "react";
import { Calendar, Clock, User, ArrowRight, Search, BookOpen, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

interface Article {
  id: number;
  title: string;
  description: string;
  content: string[];
  image: string;
  date: string;
  readTime: string;
  category: string;
  author: string;
}

const articles: Article[] = [
  {
    id: 1,
    title: "איך לבחור קבלן שיפוצים מומלץ: המדריך המלא",
    description: "שיפוץ הבית הוא אחד הצעדים המשמעותיים והיקרים ביותר שתעשו. כדי שהתהליך יעבור בשלום ובאיכות מקסימלית, בחירת הקבלן הנכון היא המפתח להצלחה. הנה כל מה שצריך לבדוק.",
    category: "בחירת בעלי מקצוע",
    date: "15 במאי 2024",
    readTime: "5 דק׳ קריאה",
    author: "בוב הבנאי",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop",
    content: [
      "שיפוץ הבית הוא פרויקט מרגש, אך הוא עלול להפוך לסיוט אם לא בוחרים את איש המקצוע הנכון. קבלן שיפוצים מוסמך ומקצועי לא רק יבצע את העבודה על הצד הטוב ביותר, אלא גם יחסוך לכם זמן, כסף ועוגמת נפש רבה.",
      "1. בדיקת רישום ורישיונות: הדבר הראשון והחשוב ביותר הוא לוודא שהקבלן רשום בפנקס הקבלנים של משרד הבינוי והשיכון. קבלן רשום מחויב בסטנדרטים גבוהים של בטיחות, מקצועיות וביטוחים מתאימים.",
      "2. המלצות וביקור בעבודות קודמות: אל תסתפקו רק בהמלצות טלפוניות. בקשו לבקר בפרויקט פעיל או בפרויקט שהסתיים לאחרונה. כך תוכלו להתרשם מרמת הגימור, הניקיון ואופן העבודה של הצוות בשטח.",
      "3. חוזה עבודה מפורט ומקיף: החוזה הוא ההגנה הטובה ביותר שלכם. ודאו שהוא כולל מפרט טכני מדויק של כל החומרים, לוח זמנים מוגדר עם שלבי ביצוע, פריסת תשלומים לפי התקדמות העבודה (לעולם אל תשלמו הכל מראש!) ואחריות על העבודה.",
      "4. כימיה ותקשורת אישית: שיפוץ יכול לקחת שבועות ואף חודשים. אתם תהיו בקשר יומיומי עם הקבלן, ולכן חשוב שתהיה תקשורת פתוחה, נעימה ומכבדת. אם אתם מרגישים חוסר נוחות כבר בשלב הצעת המחיר, זהו תמרור אזהרה.",
      "לסיכום, אל תתפתו תמיד להצעה הזולה ביותר. לעיתים קרובות, הצעה זולה מדי מעידה על שימוש בחומרים נחותים או על חוסר ניסיון שיעלה לכם ביוקר בהמשך. בחרו באיכות, אמינות ושקט נפשי."
    ]
  },
  {
    id: 2,
    title: "5 טעויות נפוצות בשיפוץ הבית ואיך להימנע מהן",
    description: "כולנו רוצים לחסוך כסף וזמן במהלך השיפוץ, אך טעויות קטנות בתכנון עלולות לעלות ביוקר בהמשך הדרך. הכירו את הטעויות הנפוצות ביותר ואיך לעבור את השיפוץ בשלום.",
    category: "טיפים לשיפוץ",
    date: "28 באפריל 2024",
    readTime: "4 דק׳ קריאה",
    author: "צוות המומחים",
    image: "https://images.unsplash.com/photo-1581094288338-2314dddb7eed?q=80&w=800&auto=format&fit=crop",
    content: [
      "תכנון נכון הוא 80% מהצלחת השיפוץ. למרות זאת, בעלי בתים רבים נוטים לדלג על שלבים קריטיים או לקבל החלטות פזיזות שמתגלות כטעויות קשות בשטח. הנה 5 הטעויות הנפוצות ביותר ואיך להימנע מהן:",
      "טעות 1: חוסר בתקציב בלתי צפוי (בצ״מ). בשיפוצים תמיד יש הפתעות - קיר רטוב שמתגלה, צנרת ישנה שחובה להחליף או שינוי עיצובי ברגע האחרון. חובה להקצות 15%-20% מהתקציב הכולל להוצאות בלתי צפויות.",
      "טעות 2: דילוג על תוכניות עבודה מפורטות. להתחיל לשבור קירות בלי תוכנית אדריכלית או תוכנית אינסטלציה וחשמל מסודרת זו מתכון לאסון. תוכניות ברורות מונעות אי הבנות ומבטיחות שכל שקע וצינור יהיו בדיוק במקום הנכון.",
      "טעות 3: בחירת חומרים זולים ולא עמידים. חיסכון קטן בריצוף, בצבע או באביזרי אינסטלציה עלול להוביל לבלאי מהיר, נזילות וצורך בתיקונים יקרים תוך שנים ספורות. השקיעו בחומרים איכותיים עם תו תקן.",
      "טעות 4: שינויים תכופים במהלך העבודה. כל שינוי שתבקשו מהקבלן לאחר שהעבודה החלה יעלה לכם בזמן יקר ובתוספת תשלום משמעותית. סגרו את כל הפרטים והבחירות העיצוביות לפני תחילת העבודה בשטח.",
      "טעות 5: הזנחת נושא האיטום. איטום לקוי בחדרים רטובים (מקלחת, מרפסת, גג) הוא אחת הבעיות הנפוצות והקשות ביותר לתיקון. ודאו שהקבלן מבצע בדיקת הצפה ומשתמש בחומרי איטום תקניים ואיכותיים ביותר."
    ]
  },
  {
    id: 3,
    title: "טרנדים מובילים בעיצוב ושיפוץ הבית לשנת 2024",
    description: "השנה הקרובה מביאה איתה רוח חדשה של חומרים טבעיים, צבעים חמים וטכנולוגיות חכמות שמשתלבות בתוך הבית. גלו את המגמות החמות שישדרגו את המרחב שלכם.",
    category: "טרנדים ועיצוב",
    date: "10 במרץ 2024",
    readTime: "6 דק׳ קריאה",
    author: "אדריכלות ועיצוב",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop",
    content: [
      "עולם עיצוב הפנים והשיפוצים משתנה ללא הרף, ובשנת 2024 אנו רואים דגש חזק על נוחות, חיבור לטבע ופונקציונליות חכמה. הנה הטרנדים המובילים שכדאי לכם לאמץ בשיפוץ הקרוב:",
      "1. חומרים טבעיים ומרקמים עשירים: העץ הטבעי, האבן, השיש והבטון החשוף ממשיכים להוביל. השנה נראה שילובים מעניינים של טקסטורות - קירות בטיח ערבי או מיקרוצמנט, חיפויי עץ תלת-ממדיים ופרטי ריהוט מחומרים ממוחזרים וידידותיים לסביבה.",
      "2. פלטת צבעים חמה ואדמתית: אחרי שנים של שליטת האפור והלבן הקר, הצבעים החמים חוזרים ובגדול. גווני טרקוטה, חול, ירוק זית, חרדל וגווני שמנת חמימים מעניקים לבית תחושת חמימות, רוגע וביטחון.",
      "3. הבית החכם והאינטגרטיבי: מערכות חשמל חכם כבר אינן מותרות לעשירים בלבד. בשיפוץ מודרני משלבים תשתית חכמה לשליטה בתאורה, מיזוג, תריסים ומערכות שמע ישירות מהנייד או בפקודה קולית, מה שמסייע גם בחיסכון משמעותי באנרגיה.",
      "4. חללי רחצה בסגנון ספא ביתי: חדר הרחצה הופך למרחב של פינוק והתרגעות. מקלחוני ענק עם ראשי גשם מפנקים, תאורה נסתרת וחמה, שילוב של צמחייה עמידה בלחות ושימוש באריחים מדוקקים במידות גדולות המזערים את כמות הפוגות (החיבורים) ומעניקים מראה נקי ויוקרתי.",
      "5. חלוקת חלל גמישה (מחיצות חכמות): עם המעבר לעבודה מהבית, הצורך בחללים דינמיים גדל. במקום קירות גבס קבועים, נעשה שימוש גובר במחיצות זכוכית ואלומיניום בלגי, דלתות אסם מעוצבות או קירות כוח דו-צדדיים המאפשרים להפריד או לאחד חללים לפי הצורך."
    ]
  }
];

const Articles = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);

  const categories = ["הכל", "בחירת בעלי מקצוע", "טיפים לשיפוץ", "טרנדים ועיצוב"];

  const filteredArticles = articles.filter((article) => {
    const matchesSearch = 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory =
      !selectedCategory || selectedCategory === "הכל" || article.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {activeArticle ? (
          // Detailed Article View
          <div className="bg-card rounded-2xl shadow-lg overflow-hidden border border-border animate-fade-in-up">
            <div className="relative h-[300px] md:h-[450px] w-full">
              <img
                src={activeArticle.image}
                alt={activeArticle.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              <div className="absolute bottom-6 right-6 left-6 text-white">
                <span className="bg-secondary text-secondary-foreground text-xs font-bold px-3 py-1.5 rounded-full">
                  {activeArticle.category}
                </span>
                <h1 className="text-2xl md:text-4xl font-black mt-3 leading-tight">
                  {activeArticle.title}
                </h1>
              </div>
            </div>

            <div className="p-6 md:p-10">
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground border-b pb-6 mb-6">
                <div className="flex items-center gap-1.5">
                  <User className="h-4 w-4 text-secondary" />
                  <span>נכתב על ידי: {activeArticle.author}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4 text-secondary" />
                  <span>{activeArticle.date}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4 text-secondary" />
                  <span>{activeArticle.readTime}</span>
                </div>
              </div>

              <div className="space-y-6 text-lg leading-relaxed text-foreground/90">
                {activeArticle.content.map((paragraph, index) => (
                  <p key={index} className="first-letter:text-2xl first-letter:font-bold">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-10 pt-6 border-t flex justify-end">
                <Button
                  onClick={() => setActiveArticle(null)}
                  variant="outline"
                  className="flex items-center gap-2 border-primary text-primary hover:bg-primary/5"
                >
                  <ArrowRight className="h-4 w-4" />
                  חזרה לכל המאמרים
                </Button>
              </div>
            </div>
          </div>
        ) : (
          // Articles List View
          <>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-1.5 rounded-full text-sm font-bold mb-3">
                <BookOpen className="h-4 w-4" />
                <span>מרכז הידע והטיפים שלנו</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-primary mb-4">
                מאמרים ומדריכים מקצועיים
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                כל מה שצריך לדעת על בנייה, שיפוצים, עיצוב הבית ובחירת אנשי מקצוע נכונים.
              </p>
            </div>

            {/* Search and Filter Section */}
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-10 bg-card p-4 rounded-xl border shadow-sm">
              <div className="relative w-full md:w-80">
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="חיפוש מאמרים..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pr-10 bg-background"
                />
              </div>

              <div className="flex flex-wrap gap-2 w-full md:w-auto justify-start md:justify-end">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category || (!selectedCategory && category === "הכל") ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category === "הכל" ? null : category)}
                    className="rounded-full text-xs md:text-sm"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            {/* Articles Grid */}
            {filteredArticles.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredArticles.map((article) => (
                  <Card key={article.id} className="flex flex-col h-full overflow-hidden hover:shadow-md transition-shadow border-border">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                      <span className="absolute top-3 right-3 bg-secondary text-secondary-foreground text-xs font-bold px-2.5 py-1 rounded-full">
                        {article.category}
                      </span>
                    </div>
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {article.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {article.readTime}
                        </span>
                      </div>
                      <CardTitle className="text-xl font-bold text-primary line-clamp-2 hover:text-secondary transition-colors cursor-pointer" onClick={() => setActiveArticle(article)}>
                        {article.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow pb-4">
                      <CardDescription className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                        {article.description}
                      </CardDescription>
                    </CardContent>
                    <CardFooter className="pt-0 border-t border-border/50 mt-auto p-4 flex justify-between items-center">
                      <span className="text-xs text-muted-foreground font-medium">
                        מאת: {article.author}
                      </span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setActiveArticle(article)}
                        className="text-secondary hover:text-secondary/80 hover:bg-secondary/10 font-bold flex items-center gap-1 p-0 px-2"
                      >
                        קרא עוד
                        <ChevronLeft className="h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-card rounded-xl border border-dashed">
                <p className="text-muted-foreground text-lg">לא נמצאו מאמרים העונים על החיפוש שלך.</p>
                <Button
                  variant="link"
                  onClick={() => { setSearchQuery(""); setSelectedCategory(null); }}
                  className="text-secondary font-bold mt-2"
                >
                  אפס סינונים
                </Button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Articles;
