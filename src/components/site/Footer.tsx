import { Link } from "react-router-dom";
import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-border bg-surface">
      <div className="container py-20 grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="font-display text-3xl md:text-4xl leading-tight">
            Craftsmanship is the <em className="text-primary">final</em> touch
            <br /> of every well-made thing.
          </p>
          <p className="text-soft mt-6 max-w-md">
            A small studio of electricians, painters and finishers who treat every
            project as a quiet act of devotion.
          </p>
        </div>

        <div className="lg:col-span-3">
          <h4 className="text-xs tracking-[0.32em] uppercase text-soft mb-5">Studio</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/services" className="story-link">Services</Link></li>
            <li><Link to="/our-works" className="story-link">Our Works</Link></li>
            <li><Link to="/about" className="story-link">About</Link></li>
            <li><Link to="/request-rework" className="story-link">Request Rework</Link></li>
          </ul>
        </div>

        <div className="lg:col-span-4">
          <h4 className="text-xs tracking-[0.32em] uppercase text-soft mb-5">Visit</h4>
          <ul className="space-y-3 text-sm text-foreground/80">
            <li className="flex items-start gap-3"><MapPin className="w-4 h-4 mt-0.5 text-primary" /> 15 Aburi Road, East Legon, Accra</li>
            <li className="flex items-center gap-3"><Phone className="w-4 h-4 text-primary" /> 050 137 2510</li>
            <li className="flex items-center gap-3"><Mail className="w-4 h-4 text-primary" /> info@finaltouch.com.gh</li>
          </ul>
          <div className="flex items-center gap-3 mt-6">
            <a href="#" className="grid place-items-center w-10 h-10 rounded-full border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"><Instagram className="w-4 h-4" /></a>
            <a href="#" className="grid place-items-center w-10 h-10 rounded-full border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"><Facebook className="w-4 h-4" /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container py-6 flex flex-col md:flex-row justify-between gap-3 text-xs text-soft">
          <p>© {new Date().getFullYear()} The Final Touch Servicing Co. All rights reserved.</p>
          <p>Crafted with patience in our atelier.</p>
        </div>
      </div>
    </footer>
  );
}
