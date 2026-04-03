import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.jpg";
import { Menu, X } from "lucide-react";

const navLinks = [
  { to: "/", label: "דף הבית" },
  { to: "/about", label: "אודות" },
  { to: "/gallery", label: "רגעים מהמועדון" },
  { to: "/events", label: "תחרויות ואירועים מיוחדים" },
  { to: "/classes", label: "חוגים ואימונים בשחמט" },
  { to: "/contact", label: "פרטים ויצירת קשר" },
  { to: "/join", label: "הצטרפו אלינו" },
];

const Navbar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b" dir="rtl">
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="לוגו מועדון רובינשטיין" className="h-12 w-12 object-contain rounded-full" />
          <span className="font-display text-lg font-bold hidden sm:block">מועדון השחמט רובינשטיין</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm transition-colors hover:text-gold ${location.pathname === link.to ? "text-gold font-bold" : "text-foreground font-medium"
                }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden p-2" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t bg-background pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className={`block px-6 py-3 text-sm transition-colors hover:text-gold ${location.pathname === link.to ? "text-gold font-bold" : "text-foreground font-medium"
                }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
