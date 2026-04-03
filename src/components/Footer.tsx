import { Mail, Phone, MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => (
  <footer className="text-primary-foreground py-10 mt-16" dir="rtl" style={{ backgroundColor: '#2A3F4D' }}>
    <div className="container text-center space-y-4">
      <h3 className="font-display text-xl font-bold">מועדון השחמט הירושלמי ע״ש עקיבא רובינשטיין ז"ל – ירושלים</h3>

      <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
        <a href="tel:0512000004" className="flex items-center gap-1 hover:text-gold transition-colors">
          <Phone size={16} /> 051-200-0004
        </a>

        {/* הוואטסאפ עכשיו עקבי עם השאר */}
        <a
          href="https://wa.me/972512000004"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 hover:text-gold transition-colors"
        >
          <FaWhatsapp size={16} /> וואטסאפ
        </a>

        <a href="mailto:rubinstein.chess.jerusalem@gmail.com" className="flex items-center gap-1 hover:text-gold transition-colors">
          <Mail size={16} /> אימייל
        </a>

        <a href="https://maps.google.com/?q=יפו+105+ירושלים" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-gold transition-colors">
          <MapPin size={16} /> יפו 105, ירושלים
        </a>
      </div>

      <p className="text-xs text-primary-foreground/60">© {new Date().getFullYear()} כל הזכויות שמורות</p>
    </div>
  </footer>
);

export default Footer;