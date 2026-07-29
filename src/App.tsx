import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import DiscountPopup from "./components/DiscountPopup";
import Articles from "./pages/Articles";

// Placeholder components for other pages
const Home = () => (
  <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-6">
    <h1 className="text-4xl md:text-6xl font-black text-primary mb-4">בוב הבנאי</h1>
    <p className="text-lg text-muted-foreground max-w-md">שירותי בנייה ושיפוצים מקצועיים ברמה הגבוהה ביותר. אמינות, איכות ומחירים הוגנים.</p>
  </div>
);

const About = () => (
  <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-6">
    <h1 className="text-4xl font-black text-primary mb-4">אודותינו</h1>
    <p className="text-lg text-muted-foreground max-w-md">למעלה מ-15 שנות ניסיון בעבודות בנייה, שיפוצים, גבס, אינסטלציה וגמר.</p>
  </div>
);

const Contact = () => (
  <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-6">
    <h1 className="text-4xl font-black text-primary mb-4">צור קשר</h1>
    <p className="text-lg text-muted-foreground max-w-md">התקשרו אלינו עוד היום לקבלת הצעת מחיר משתלמת במיוחד!</p>
  </div>
);

const Games = () => (
  <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-6">
    <h1 className="text-4xl font-black text-primary mb-4">משחקים ופעילויות</h1>
    <p className="text-lg text-muted-foreground max-w-md">פינת משחקים מהנה לילדים ולכל המשפחה בנושאי בנייה והרכבה.</p>
  </div>
);

const Dashboard = () => (
  <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-6">
    <h1 className="text-4xl font-black text-primary mb-4">מערכת CRM</h1>
    <p className="text-lg text-muted-foreground max-w-md">ניהול לקוחות, פרויקטים ומעקב אחר הצעות מחיר.</p>
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
