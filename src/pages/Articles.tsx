import { useState } from "react";
import { Search, Calendar, Clock, User, ArrowLeft, BookOpen, Filter, X, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Article {
  id: number;
  title: string;
  excerpt: string;
  content: string[];
  category: string;
  date: string;
  readTime: string;
  author: string;
  image: string;
  tags: string[];
}

const ARTICLES: Article[] = [
  {
    id: 1,
    title: "איך לבחור קבלן שיפוצים אמין: מדריך מעשי ומקיף",
    excerpt: "בחירת קבלן היא ההחלטה החשובה ביותר בפרויקט שלכם. הנה 5 שלבים קריטיים שיבטיחו שתעברו את השיפוץ בשלום, בלי הפתעות ובמסגרת התקציב.",
    content: [
      "שיפוץ הבית הוא אחד הצעדים המשמעותיים והיקרים ביותר שמשפחה עושה במהלך חייה. מעבר להשקעה הכספית, מדובר בתהליך שמלווה בלא מעט מתח, אי-נוחות ושינוי בשגרת החיים. המפתח להצלחת הפרויקט ולשקט הנפשי שלכם טמון בבחירת איש המקצוע הנכון - קבלן השיפוצים.",
      "לצערינו, שוק השיפוצים בישראל פרוץ למדי, וסיפורים על קבלנים שנעלמו באמצע העבודה או דרשו תוספות תשלום מופרזות אינם נדירים. כדי לעזור לכם לעבור את התהליך בשלום, ריכזנו עבורכם את המדריך המעשי לבחירת קבלן אמין.",
      "1. בדיקת רישום בפנקס הקבלנים: הצעד הראשון והחשוב ביותר הוא לוודא שהקבלן רשום בפנקס הקבלנים של משרד הבינוי והשיכון. קבלן רשום עבר הסמכה, מחזיק ברישיונות המתאימים ונמצא תחת פיקוח. אל תתפשרו על סעיף זה, במיוחד בעבודות שלד, הרחבות או שינויים מבניים.",
      "2. קבלת המלצות וביקור באתרים פעילים: אל תסתפקו בהמלצות כתובות או בטלפונים שהקבלן נותן לכם. בקשו לבקר בפרויקט פעיל שלו כעת, או בפרויקט שהסתיים לאחרונה. דברו ישירות עם הלקוחות, שאלו אותם על העמידה בזמנים, על רמת הניקיון, ועל האופן שבו הקבלן פתר בעיות שהתעוררו במהלך הדרך.",
      "3. מפרט טכני וכתב כמויות מפורט: לעולם אל תחתמו על הסכם כללי כמו 'שיפוץ קומפלט לבית'. דרשו כתב כמויות מפורט ככל האפשר המגדיר בדיוק איזה סוג ריצוף, כמה נקודות חשמל, סוג הצבע, חומרי האיטום וכו'. ככל שהמפרט יהיה מפורט יותר, כך יקטן הסיכוי לוויכוחים על 'תוספות' במהלך העבודה.",
      "4. לוח תשלומים מבוסס שלבים: כלל ברזל בשיפוצים - לעולם אל תשלמו מראש! לוח התשלומים צריך להיות צמוד להתקדמות העבודה בשטח. לדוגמה: 10% עם חתימת החוזה, 20% לאחר סיום הריסה ופינוי, 20% לאחר סיום אינסטלציה וחשמל, וכן הלאה. השאירו תמיד לפחות 10% מהסכום לסיום המוחלט של העבודה ולאחר שבדקתם שהכל תקין.",
      "5. חוזה עבודה משפטי ולוח זמנים: החוזה צריך לכלול תאריך התחלה ותאריך סיום מדויקים, כולל סעיף פיצוי על כל שבוע של איחור. כמו כן, ודאו שהחוזה כולל אחריות על העבודה (לרוב בין שנה ל-3 שנים בהתאם לסוג העבודה) וביטוח קבלנים בתוקף המכסה נזקי גוף ורכוש."
    ],
    category: "שיפוצים",
    date: "15 במאי 2024",
    readTime: "5 דק' קריאה",
    author: "בוב הבנאי",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop",
    tags: ["קבלן שיפוצים", "טיפים לשיפוץ", "חוזה עבודה", "תקציב"]
  },
  {
    id: 2,
    title: "טרנדים חמים בעיצוב ושיפוץ הבית לשנת 2024",
    excerpt: "מהחומרים הטבעיים שחוזרים לאופנה ועד לטכנולוגיות הבית החכם שמשתלבות בקירות. גלו את המגמות שיובילו את עולם העיצוב השנה.",
    content: [
      "עולם עיצוב הפנים והאדריכלות משתנה ללא הרף, ושנת 2024 מביאה איתה בשורה מרעננת של חיבור לטבע, פשטות מתוחכמת ופונקציונליות חסרת פשרות. אם אתם מתכננים שיפוץ בקרוב, כדאי להכיר את הטרנדים המובילים שיעניקו לביתכם מראה עדכני שיחזיק מעמד לאורך שנים.",
      "חומרים טבעיים וטקסטורות גולמיות: השנה אנחנו נפרדים מהמראה המנוכר והסינתטי לטובת חומרים חמים ואותנטיים. עץ טבעי (במיוחד אלון וגוונים כהים עמוקים), אבן טבעית כמו שיש טרוורטין, ובטון חשוף משולבים יחד ליצירת מראה עשיר בטקסטורות. גם בחיפויי הקירות נראה שימוש גובר בטיח ערבי, שליכט צבעוני וטפטים בעלי מרקם תלת-ממדי.",
      "צבעי אדמה וחמימות: הלבן הבוהק והאפור התעשייתי מפנים את מקומם לגוונים חמים ועוטפים. צבעי חול, טרקוטה, ירוק זית עמוק, וגווני שמנת חמים הם הבסיס החדש של הבית. צבעים אלו מייצרים תחושת רוגע וביטחון, שהיא בדיוק מה שאנחנו מחפשים כשאנחנו חוזרים הביתה.",
      "מטבחים נסתרים ואינטגרליים: המטבח ממשיך להיות מרכז הבית, אך העיצוב שלו הופך לנקי ומינימליסטי יותר. מוצרי החשמל (מקרר, מדיח כלים, ואפילו תנורים) מוסתרים לחלוטין מאחורי דלתות נגרות תואמות. פתרונות אחסון חכמים מאפשרים לשמור על משטחי עבודה ריקים לחלוטין, מה שיוצר מראה מסודר ואסתטי המשתלב בהרמוניה עם הסלון.
",
      "תאורה נסתרת ואדריכלית: גופי התאורה הופכים לחלק בלתי נפרד מהארכיטקטורה של הבית. במקום נברשות גדולות במרכז החדר, המגמה היא שימוש בפרופילי לד שקועים בתקרה ובקירות, תאורה נסתרת מאחורי מראות ובתוך ארונות, ותאורת אווירה חכמה הניתנת לעמעום ושינוי גוון בהתאם לשעה ביום."
    ],
    category: "עיצוב",
    date: "28 באפריל 2024",
    readTime: "4 דק' קריאה",
    author: "מיכל לוי - מעצבת פנים",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop",
    tags: ["עיצוב פנים", "טרנדים 2024", "מטבחים", "תאורה"]
  },
  {
    id: 3,
    title: "שיפוץ חדר הרחצה: כל מה שצריך לדעת לפני שיוצאים לדרך",
    excerpt: "חדר הרחצה הוא אחד החללים המורכבים ביותר לשיפוץ בשל השילוב של מים, חשמל ואיטום. כך תתכננו אותו נכון ותמנעו מנזילות עתידיות.",
    content: [
      "שיפוץ חדר הרחצה נחשב לפרויקט המורכב ביותר ביחס לגודלו בבית. הוא דורש שילוב מדויק של מספר בעלי מקצוע: אינסטלטור, חשמלאי, טייח, רצף ואיש אלומיניום. טעות קטנה באיטום או בשיפועים עלולה לעלות אלפי שקלים בתיקונים עתידיים. הנה המדריך שיעזור לכם לעשות את זה נכון מההתחלה.",
      "הלב של החדר - מערכת האינסטלציה: אל תתפשרו על צנרת ישנה! אם אתם כבר מפרקים את הריצוף, החליפו את כל הצנרת לצנרת מודרנית ואיכותית (כמו SP או פקסגול) עם מרכזיית מים (חנוכייה) המאפשרת שליטה נפרדת על כל נקודת מים בבית. דרשו מהקבלן לבצע בדיקת לחץ לצנרת החדשה לפני שהוא סוגר את הקירות.",
      "איטום - החלק החשוב ביותר שאף אחד לא רואה: איטום לקוי הוא הסיבה מספר אחת לכשלים בחדרי רחצה. חובה לבצע איטום יסודי של הרצפה והקירות (עד לגובה של לפחות 2 מטר באזור המקלחון/אמבטיה) באמצעות חומרים צמנטיים דו-רכיביים איכותיים. לפני הריצוף, יש לבצע בדיקת הצפה של הרצפה למשך 72 שעות כדי לוודא שאין נזילות.",
      "תכנון פונקציונלי ומרחקי בטיחות: חדר רחצה צריך להיות נוח לשימוש יומיומי. ודאו שיש מספיק מרחב תנועה (לפחות 70 ס"מ מול האסלה והכיור), תכננו פתרונות אחסון עמידים ללחות, והקפידו על מרחקי בטיחות מוגדרים בחוק בין נקודות החשמל למקורות המים.",
      "אוורור נכון למניעת עובש: לחות גבוהה היא האויב הגדול של חדר הרחצה. אם אין לכם חלון גדול מספיק, חובה להתקין ונטה או מפוח (מפלט אוויר) איכותי ושקט שידאג להוצאת האדים והלחות וימנע התפתחות של עובש ופטריות על הקירות והתקרה."
    ],
    category: "שיפוצים",
    date: "10 באפריל 2024",
    readTime: "6 דק' קריאה",
    author: "בוב הבנאי",
    image: "https://images.unsplash.com/photo-1620626011160-9928f1b2b69a?q=80&w=800&auto=format&fit=crop",
    tags: ["חדר רחצה", "איטום", "אינסטלציה", "מניעת עובש"]
  },
  {
    id: 4,
    title: "איך לחסוך בעלויות הבנייה והשיפוץ בלי להתפשר על האיכות",
    excerpt: "האם אפשר להוזיל את עלויות הפרויקט בלי לקבל עבודה סוג ב'? בהחלט כן. הנה כמה דרכים חכמות לחסוך כסף בניהול נכון של התהליך.",
    content: [
      "תקציב הבנייה או השיפוץ נוטה כמעט תמיד לחרוג מהתכנון המקורי. משפחות רבות מוצאות את עצמן חסרות אונים מול הוצאות בלתי צפויות שמצטברות במהירות. עם זאת, חיסכון בעלויות לא חייב לבוא על חשבון איכות החומרים או רמת הגימור. באמצעות תכנון קפדני וקבלת החלטות נכונה, תוכלו לחסוך עשרות אלפי שקלים.",
      "תכנון מוקדם ומניעת שינויים בשטח: השינויים שנעשים תוך כדי תנועה הם גורם החריגה התקציבית הגדול ביותר. החלטתם להזיז נקודת חשמל אחרי שהקיר כבר טויח? החלטתם לשנות את מיקום האסלה אחרי הריצוף? כל שינוי כזה יעלה לכם ביוקר. השקיעו את הזמן והכסף בתכנון אדריכלי מפורט ומלא לפני שפטיש אחד נוגע בקיר.",
      "רכישה עצמית של חומרי גמר: קבלנים רבים מציעים לספק גם את חומרי הגמר (ריצוף, כלים סניטריים, ברזים, דלתות). לרוב, תוכלו לחסוך כסף רב אם תרכשו חומרים אלו בעצמכם ישירות מאולמות התצוגה. נצלו ימי מכירות מיוחדים, השוו מחירים בין מספר ספקים, ואל תתביישו לבקש הנחת כמות.",
      "התמקדות במה שקשה לשנות בעתיד: אם התקציב שלכם מוגבל, חלקו אותו בצורה חכמה. השקיעו את רוב התקציב בתשתיות איכותיות שקשה ויקר מאוד להחליף בעתיד (אינסטלציה, איטום, מערכת חשמל, אלומיניום וחלונות). לעומת זאת, תוכלו לחסוך זמנית בפריטים שקל להחליף או לשדרג בהמשך, כמו גופי תאורה, ריהוט, או אפילו דלתות פנים פשוטות יותר.",
      "עבודה עם קבלן מפתח אחד לעומת פיצול קבלני משנה: ניהול עצמי של קבלני משנה (חשמלאי בנפרד, אינסטלטור בנפרד, טייח בנפרד) עשוי להיראות זול יותר על הנייר, אך הוא דורש מכם זמן עבודה עצום, ידע מקצועי בפיקוח, ועלול להוביל לזריקת אחריות בין בעלי המקצוע ('זה לא אני, זה הטייח עשה עקום'). עבודה עם קבלן מפתח אחד אומנם כוללת דמי ניהול, אך לרוב חוסכת כסף, זמן ועוגמת נפש רבה בזכות ריכוז האחריות במקום אחד."
    ],
    category: "בנייה",
    date: "2 במרץ 2024",
    readTime: "5 דק' קריאה",
    author: "רוני כהן - מנהל פרויקטים",
    image: "https://images.unsplash.com/photo-1581094288338-2314dddb7eed?q=80&w=800&auto=format&fit=crop",
    tags: ["חיסכון בעלויות", "תקציב בנייה", "חומרי גמר", "ניהול פרויקט"]
  },
  {
    id: 5,
    title: "איטום גגות ומניעת רטיבות לחורף: המדריך המלא",
    excerpt: "אל תחכו לגשם הראשון! גלו מתי הזמן הנכון לאטום את הגג, באילו חומרים כדאי להשתמש ואיך לוודא שהעבודה מבוצעת בצורה מקצועית.",
    content: [
      "רטיבות בקירות ובתקרה היא אחד המטרדים הקשים והמתסכלים ביותר בבית. היא גורמת לקילופי צבע, עובש מסוכן לבריאות, ובמקרים קשים אף לפגיעה בקונסטרוקציית הבטון והברזל של המבנה. המפתח למניעת נזקים אלו הוא מערכת איטום איכותית ותקינה בגג הבית. הנה כל מה שצריך לדעת כדי לעבור את החורף יבש ורגוע.",
      "מתי הזמן הנכון לאטום? הזמן הטוב ביותר לבצע עבודות איטום הוא במהלך חודשי הקיץ והסתיו (מאי עד אוקטובר). חומרי האיטום דורשים תשתית יבשה לחלוטין כדי להיצמד בצורה מיטבית לבטון. ביצוע איטום על גג רטוב או לח יגרום לכליאת לחות מתחת לשכבת האיטום, מה שיוביל ליצירת בועות אוויר ופיצוצים בחומר עם הגעת השמש הראשונה.",
      "שיטות האיטום המובילות:",
      "1. יריעות ביטומניות: השיטה הנפוצה והעמידה ביותר כיום לגגות שטוחים. מדובר ביריעות בעובי של 4 או 5 מ"מ המולחמות לגג באמצעות מבער גז. יריעות איכותיות מעניקות שקט נפשי לתקופה של 10 עד 15 שנים.",
      "2. חומרים פוליאוריטניים ומשחות אקריליות: מתאימים בעיקר לגגות קטנים, מרפסות, או גגות עמוסים במערכות (דוודים, מזגנים) שבהם קשה להלחים יריעות. חומרים אלו נמרחים או מותזים בקלות ויוצרים שכבה אחידה ללא חיבורים.",
      "הכנת הגג - 80% מהצלחת העבודה: איטום טוב מתחיל בניקוי יסודי של הגג. חובה להסיר שכבות איטום ישנות ורופפות, לנקות אבק ושומנים, לטפל בסדקים קונסטרוקטיביים, ולוודא שהמרזבים פתוחים ונקיים לחלוטין. כמו כן, יש לוודא שישנם שיפועים נכונים בגג המונעים הצטברות של מים עומדים (שלוליות)."
    ],
    category: "טיפים ותחזוקה",
    date: "18 בינואר 2024",
    readTime: "4 דק' קריאה",
    author: "בוב הבנאי",
    image: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=800&auto=format&fit=crop",
    tags: ["איטום גגות", "חורף", "מניעת רטיבות", "יריעות ביטומניות"]
  },
  {
    id: 6,
    title: "חשיבות הפיקוח ההנדסי בבניית בית פרטי",
    excerpt: "בונים את בית חלומותיכם? אל תוותרו על מפקח בנייה מטעמכם. גלו כיצד מפקח מקצועי חוסך לכם כסף, זמן ועוגמת נפש מול הקבלנים.",
    content: [
      "בניית בית פרטי היא פרויקט מורכב, ארוך ומלא בפרטים טכניים והנדסיים שרוב האנשים אינם בקיאים בהם. בעוד שהאדריכל מתכנן את המראה והחלוקה של הבית, והקבלן מבצע את העבודה בפועל, מי שומר על האינטרסים שלכם בשטח? כאן נכנס לתמונה מפקח הבנייה.",
      "מפקח בנייה הוא העיניים והאוזניים שלכם באתר הבנייה. תפקידו לוודא שהקבלן מבצע את העבודה בדיוק לפי התוכניות ההנדסיות, המפרטים הטכניים ותקני הבנייה הישראליים, תוך שמירה על לוחות הזמנים והתקציב שנקבעו.",
      "בקרת איכות קפדנית בשלבים קריטיים: ישנם שלבים בבנייה שלא ניתן לתקן לאחר מעשה. מפקח הבנייה נוכח בשטח ברגעים קריטיים כמו לפני יציקת יסודות ותקרות (כדי לוודא שברזל הזיון מונח בדיוק לפי תוכנית קונסטרוקטור), במהלך ביצוע עבודות האיטום, ולפני סגירת קירות גבס וחיפויים. גילוי טעות בשלבים אלו חוסך נזקים הנדסיים קשים בעתיד.",
      "מניעת ניגוד עניינים: לעיתים קרובות קבלנים מציעים 'פיקוח פנימי' מטעמם. חשוב להבין שמפקח מטעם הקבלן תמיד יהיה מחויב קודם כל למעסיק שלו (הקבלן) ולרצון שלו לחסוך בעלויות ובזמן. מפקח בנייה עצמאי שאתם שוכרים ומשלמים לו ישירות, מחויב אך ורק לכם ולאיכות הבית שלכם.",
      "אישור תשלומים לקבלן על פי ביצוע בפועל: הקבלן דורש תשלום על סיום שלב השלד? המפקח הוא זה שמגיע לשטח, מודד, בודק ומאשר לכם בכתב שהשלב אכן הסתיים בהצלחה וברמה הנדרשת, ושרק כעת ניתן לשחרר את התשלום לקבלן. זהו הכלי החזק ביותר שלכם לשמירה על כספכם."
    ],
    category: "בנייה",
    date: "5 בינואר 2024",
    readTime: "5 דק' קריאה",
    author: "אינג' יובל ברק",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop",
    tags: ["פיקוח בנייה", "בית פרטי", "קונסטרוקציה", "בטיחות"]
  }
];

const CATEGORIES = ["הכל", "שיפוצים", "בנייה", "עיצוב", "טיפים ותחזוקה"];

export default function Articles() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("הכל");
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const filteredArticles = ARTICLES.filter((article) => {
    const matchesSearch = 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === "הכל" || article.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <div className="min-h-screen bg-background pb-16">
      {/* Hero Section */}
      <div className="bg-primary text-primary-foreground py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="container mx-auto text-center relative z-10 max-w-3xl">
          <span className="bg-secondary/20 text-secondary px-4 py-1.5 rounded-full text-sm font-bold mb-4 inline-block">
            הבלוג המקצועי של בוב הבנאי
          </span>
          <h1 className="text-4xl md:text-5xl font-black mb-4 font-heebo">
            מדריכים, טיפים ורעיונות לעולם הבנייה והשיפוצים
          </h1>
          <p className="text-lg text-primary-foreground/80 leading-relaxed">
            כל הידע המקצועי שצברנו ב-15 שנות ניסיון בשטח, מוגש לכם בצורה פשוטה, ברורה ובגובה העיניים.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-10">
        {/* Search and Filter Bar */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-10 bg-card p-4 rounded-2xl shadow-sm border">
          {/* Search Input */}
          <div className="relative w-full md:w-96">
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <input
              type="text"
              placeholder="חפשו מאמרים, טיפים או תגיות..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pr-10 pl-4 py-2.5 rounded-xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all text-sm"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery("")}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto justify-start md:justify-end">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-secondary text-secondary-foreground font-bold shadow-sm"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Articles Grid */}
        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <article 
                key={article.id}
                className="bg-card rounded-2xl overflow-hidden border shadow-sm hover:shadow-md transition-all flex flex-col group cursor-pointer"
                onClick={() => setSelectedArticle(article)}
              >
                {/* Image Container */}
                <div className="relative aspect-video overflow-hidden bg-muted">
                  <img 
                    src={article.image}
                    alt={article.title}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <span className="absolute top-3 right-3 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  {/* Meta */}
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      {article.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-secondary transition-colors line-clamp-2 font-heebo">
                    {article.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>

                  {/* Tags & Read More */}
                  <div className="mt-auto pt-4 border-t flex items-center justify-between">
                    <span className="text-xs text-muted-foreground font-medium">
                      מאת: {article.author}
                    </span>
                    <span className="text-secondary font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                      קראו עוד
                      <ArrowLeft className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-card rounded-2xl border">
            <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4 opacity-50" />
            <h3 className="text-xl font-bold text-foreground mb-2">לא נמצאו מאמרים</h3>
            <p className="text-muted-foreground">
              נסו לשנות את מילות החיפוש או לבחור קטגוריה אחרת.
            </p>
            <Button 
              variant="outline" 
              className="mt-4" 
              onClick={() => { setSearchQuery(""); setSelectedCategory("הכל"); }}
            >
              איפוס סינונים
            </Button>
          </div>
        )}

        {/* Newsletter Section */}
        <div className="mt-20 bg-secondary/10 rounded-3xl p-8 md:p-12 border border-secondary/20 relative overflow-hidden">
          <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl" />
          <div className="absolute -right-10 -top-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
          
          <div className="max-w-2xl mx-auto text-center relative z-10">
            <h3 className="text-2xl md:text-3xl font-black text-primary mb-3 font-heebo">
              אל תפספסו אף טיפ מקצועי!
            </h3>
            <p className="text-muted-foreground mb-6 text-sm md:text-base">
              הירשמו לניוזלטר שלנו וקבלו ישירות למייל מדריכים בלעדיים, טיפים לתחזוקת הבית והצעות מיוחדות.
            </p>

            {subscribed ? (
              <div className="bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 rounded-xl p-4 flex items-center justify-center gap-2 max-w-md mx-auto animate-fade-in-up">
                <CheckCircle2 className="h-5 w-5" />
                <span className="font-bold">תודה שנרשמתם! המדריך הראשון בדרך אליכם.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  required
                  placeholder="כתובת האימייל שלכם"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-grow px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent text-sm"
                />
                <Button type="submit" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold py-3 px-6 rounded-xl">
                  הרשמה לניוזלטר
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Article Detail Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-card text-foreground rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border flex flex-col">
            {/* Modal Header Image */}
            <div className="relative h-64 md:h-80 w-full bg-muted shrink-0">
              <img 
                src={selectedArticle.image}
                alt={selectedArticle.title}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <button 
                onClick={() => setSelectedArticle(null)}
                className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                aria-label="סגור"
              >
                <X className="h-5 w-5" />
              </button>
              <div className="absolute bottom-6 right-6 left-6 text-white">
                <span className="bg-secondary text-secondary-foreground text-xs font-bold px-3 py-1 rounded-full mb-3 inline-block">
                  {selectedArticle.category}
                </span>
                <h2 className="text-2xl md:text-3xl font-black font-heebo leading-tight">
                  {selectedArticle.title}
                </h2>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 md:p-8 overflow-y-auto">
              {/* Meta info */}
              <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground pb-4 border-b mb-6">
                <span className="flex items-center gap-1">
                  <User className="h-4 w-4 text-secondary" />
                  מאת: {selectedArticle.author}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4 text-secondary" />
                  פורסם ב: {selectedArticle.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4 text-secondary" />
                  {selectedArticle.readTime}
                </span>
              </div>

              {/* Article Body */}
              <div className="space-y-4 text-foreground/90 leading-relaxed text-base md:text-lg">
                {selectedArticle.content.map((paragraph, index) => (
                  <p key={index} className="whitespace-pre-line">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Tags */}
              <div className="mt-8 pt-6 border-t">
                <h4 className="text-sm font-bold text-foreground mb-3">תגיות קשורות:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedArticle.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="bg-muted text-muted-foreground text-xs px-3 py-1.5 rounded-lg font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-muted/50 border-t flex justify-end shrink-0">
              <Button 
                onClick={() => setSelectedArticle(null)}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold"
              >
                סגור קריאה
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}