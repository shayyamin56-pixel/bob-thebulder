import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, HardHat, User, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { user, signOut } = useAuth();

  const links = [
    { to: "/", label: "דף הבית" },
    { to: "/about", label: "אודות" },
    { to: "/articles", label: "מאמרים" },
    { to: "/games", label: "משחקים" },
    { to: "/contact", label: "צור קשר" }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-primary text-primary-foreground sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold">
          <HardHat className="h-6 w-6 text-secondary" />
          <span>בוב הבנאי</span>
        </Link>
        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium transition-colors hover:text-secondary ${
                isActive(link.to) ? "text-secondary font-bold" : "text-primary-foreground/80"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="hidden md:flex items-center gap-4">
          {user ? (
            <div className="flex items-center gap-3">
              <span className="text-sm text-primary-foreground/80 flex items-center gap-1">
                <User className="h-4 w-4" />
                {user.email}
              </span>
              <Button variant="outline" size="sm" onClick={signOut} className="text-foreground">
                <LogOut className="h-4 w-4 mr-1" />
                התנתק
              </Button>
            </div>
          ) : ( 
            <Link to="/login">
              <Button variant="secondary" size="sm">התחבר</Button>
            </Link>
          )}
        </div>
        <button className="md:hidden text-primary-foreground" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-primary-foreground text-primary p-4 flex flex-col gap-3 border-t">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setIsOpen(false)}
              className={`text-sm font-medium py-2 ${
                isActive(link.to) ? "text-primary font-bold" : "text-primary/70"
              }`}
            >
              {link.label}
            </Link>
          ))}
          {user ? (
            <Button variant="outline" size="sm" onClick={() => { signOut(); setIsOpen(false); }} className="w-full mt-2">
              התנתק
            </Button>
          ) : (
            <Link to="/login" onClick={() => setIsOpen(false)}>
              <Button variant="default" size="sm" className="w-full mt-2">התחבר</Button>
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
