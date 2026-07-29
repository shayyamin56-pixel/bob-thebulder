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
    <nav className=