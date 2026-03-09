import { Phone, Mail, Instagram, MapPin } from "lucide-react";

const contactItems = [
  {
    icon: Phone,
    label: "טלפון",
    value: "051-200-0004",
    href: "tel:0512000004",
  },
  {
    icon: Mail,
    label: "אימייל",
    value: "rubinstein.chess.jerusalem@gmail.com",
    href: "mailto:rubinstein.chess.jerusalem@gmail.com",
  },
  {
    icon: Instagram,
    label: "אינסטגרם",
    value: "@rubinsteinclub",
    href: "https://www.instagram.com/rubinsteinclub/?utm_source=ig_web_button_share_sheet",
  },
  {
    icon: MapPin,
    label: "כתובת",
    value: "יפו 105, ירושלים",
    href: "https://maps.google.com/?q=יפו+105+ירושלים",
  },
];

const Contact = () => {
  return (
    <div dir="rtl" className="container py-16 max-w-2xl">
      <h1 className="text-4xl font-display font-bold mb-8 text-center">צור קשר</h1>
      <div className="h-1 w-20 bg-gold mx-auto mb-12 rounded-full" />

      <div className="space-y-6">
        {contactItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            target={item.icon === Instagram ? "_blank" : undefined}
            rel={item.icon === Instagram ? "noopener noreferrer" : undefined}
            className="flex items-center gap-4 p-6 bg-card rounded-lg border hover:shadow-lg hover:border-gold transition-all group"
          >
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shrink-0">
              <item.icon size={20} className="text-primary-foreground" />
            </div>
            <div>
              <p className="font-display font-bold text-lg">{item.label}</p>
              <p className="text-muted-foreground text-sm text-right" dir="ltr">{item.value}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Contact;
