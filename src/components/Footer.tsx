import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, HardHat, ArrowUp, Clock, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className=