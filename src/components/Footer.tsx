import { Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="text-primary-foreground py-10 mt-16" dir="rtl" style={{ backgroundColor: '#2A3F4D' }}>
    <div className="container text-center space-y-4">
      <h3 className="font-display text-xl font-bold">מועדון השחמט ע״ש עקיבא רובינשטיין ז"ל – ירושלים</h3>
      <div className="flex items-center justify-center gap-6 text-sm">
        <a href="tel:0512000004" className="flex items-center gap-1 hover:text-gold transition-colors">
          <Phone size={16} /> 051-200-0004
        </a>
        <a href="mailto:rubinstein.chess.jerusalem@gmail.com" className="flex items-center gap-1 hover:text-gold transition-colors">
          <Mail size={16} /> אימייל
        </a>
        <a href="https://www.instagram.com/rubinsteinclub/?utm_source=ig_web_button_share_sheet" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-gold transition-colors">
          <Instagram size={16} /> <span dir="ltr">@rubinsteinclub</span>
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
