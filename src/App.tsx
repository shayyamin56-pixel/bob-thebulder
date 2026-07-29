import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import DiscountPopup from "./components/DiscountPopup";
import Dashboard from "./pages/Dashboard";

// Mock pages to ensure router works perfectly
const Home = () => (
  <div className="container mx-auto px-4 py-16 text-center">
    <h1 className="text-5xl font-black text-primary mb-6">בוב הבנאי - בנייה ושיפוצים</h1>
    <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
      שירותי בנייה, שיפוצים, עבודות גמר ואיטום ברמה הגבוהה ביותר. אמינות, מקצועיות ועמידה בלוחות זמנים.
    </p>
    <div className="flex justify-center gap-4">
      <a href="/dashboard" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold px-6 py-3 rounded-lg transition-colors">
        כניסה למערכת CRM לניהול לקוחות
      </a>
      <a href="/contact" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-6 py-3 rounded-lg transition-colors">
        צור קשר
      </a>
    </div>
  </div>
);

const About = () => (
  <div className="container mx-auto px-4 py-16">
    <h1 className="text-4xl font-black text-primary mb-6">אודותינו</h1>
    <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
      חברת "בוב הבנאי" הוקמה מתוך חזון להביא סטנדרט חדש של מקצועיות, אמינות ושקיפות לענף הבנייה והשיפוצים בישראל. עם למעלה מ-15 שנות ניסיון בשטח, אנו מלווים כל לקוח משלב התכנון ועד למסירת המפתח.
    </p>
  </div>
);

const Articles = () => (
  <div className="container mx-auto px-4 py-16">
    <h1 className="text-4xl font-black text-primary mb-6">מאמרים ומדריכים</h1>
    <p className="text-lg text-muted-foreground">בקרוב יעלו מדריכים מקצועיים בנושאי שיפוצים, איטום ובנייה.</p>
  </div>
);

const Games = () => (
  <div className="container mx-auto px-4 py-16">
    <h1 className="text-4xl font-black text-primary mb-6">משחקים</h1>
    <p className="text-lg text-muted-foreground">פינת משחקים חווייתית בנושאי בנייה ועיצוב.</p>
  </div>
);

const Contact = () => (
  <div className="container mx-auto px-4 py-16 max-w-lg">
    <h1 className="text-4xl font-black text-primary mb-6 text-center">צור קשר</h1>
    <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert("הודעתך התקבלה בהצלחה! נחזור אליך בהקדם."); }}>
      <div>
        <label className="block text-sm font-bold mb-1">שם מלא</label>
        <input type="text" required className="w-full p-3 border rounded-lg" />
      </div>
      <div>
        <label className="block text-sm font-bold mb-1">טלפון</label>
        <input type="tel" required className="w-full p-3 border rounded-lg" />
      </div>
      <div>
        <label className="block text-sm font-bold mb-1">הודעה</label>
        <textarea rows={4} className="w-full p-3 border rounded-lg" />
      </div>
      <button type="submit" className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold py-3 rounded-lg">
        שלח הודעה
      </button>
    </form>
  </div>
);

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/games" element={<Games />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </main>
        <Footer />
        <DiscountPopup />
      </div>
    </Router>
  );
}

export default App;
