import { Instagram, Mail, Phone } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground py-10 mt-16" dir="rtl">
    <div className="container text-center space-y-4">
      <h3 className="font-display text-xl font-bold">מועדון השחמט ע״ש עקיבא רובינשטיין – ירושלים</h3>
      <div className="flex items-center justify-center gap-6 text-sm">
        <a href="tel:0512000004" className="flex items-center gap-1 hover:text-gold transition-colors">
          <Phone size={16} /> 051-200-0004
        </a>
        <a href="mailto:rubinstein.chess.jerusalem@gmail.com" className="flex items-center gap-1 hover:text-gold transition-colors">
          <Mail size={16} /> אימייל
        </a>
        <a href="https://instagram.com/rubinsteinclub" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-gold transition-colors">
          <Instagram size={16} /> <span dir="ltr">@rubinsteinclub</span>
        </a>
      </div>
      <p className="text-xs text-primary-foreground/60">© {new Date().getFullYear()} כל הזכויות שמורות</p>
    </div>
  </footer>
);

export default Footer;
