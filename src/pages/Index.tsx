import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, Wrench, PaintBucket, Building2, Star, Quote } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const services = [
  {
    icon: Home,
    title: "שיפוצים כלליים",
    desc: "שיפוץ דירות ובתים מקצה לקצה, כולל תכנון וביצוע"
  },
  {
    icon: Building2,
    title: "בנייה",
    desc: "בניית מבנים חדשים, תוספות בנייה והרחבות"
  },
  {
    icon: Wrench,
    title: "תיקונים",
    desc: "תיקוני אינסטלציה, חשמל, ריצוף ועוד"
  },
  {
    icon: PaintBucket,
    title: "צביעה וגימור",
    desc: "עבודות צביעה פנים וחוץ, גבס וגימורים"
  }
];

const testimonials = [
  {
    name: "יוסי כהן",
    text: "בוב עשה לנו שיפוץ מדהים בדירה. מקצועי, אמין ובזמן. ממליץ בחום!",
    rating: 5
  },
  {
    name: "רחל לוי",
    text: "הרחבנו את הבית ובוב ניהל את הפרויקט מצוין. תוצאה מושלמת!",
    rating: 5
  },
  {
    name: "דוד אברהם",
    text: "תיקון מהיר ומקצועי. מחיר הוגן ושירות מעולה. תודה בוב!",
    rating: 5
  }
];

const Index = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className=