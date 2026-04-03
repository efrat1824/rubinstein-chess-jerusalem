import { Phone, Mail, MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const contactItems = [
  {
    icon: Phone,
    label: "טלפון",
    value: "051-200-0004",
    href: "tel:0512000004",
    isExternal: false,
  },
  {
    icon: FaWhatsapp,
    label: "וואטסאפ",
    value: "051-200-0004",
    href: "https://wa.me/972512000004",
    isExternal: true,
  },
  {
    icon: Mail,
    label: "אימייל",
    value: "rubinstein.chess.jerusalem@gmail.com",
    href: "mailto:rubinstein.chess.jerusalem@gmail.com",
    isExternal: false,
  },
  {
    icon: MapPin,
    label: "כתובת",
    value: "יפו 105, ירושלים",
    href: "https://maps.google.com/?q=יפו+105+ירושלים",
    isExternal: true,
  },
];

const Contact = () => {
  return (
    <div dir="rtl" className="min-h-screen" style={{ backgroundColor: '#3A5264' }}>
      <div className="container py-16 max-w-2xl">
        <h1 className="text-3xl md:text-5xl font-display font-bold mb-8 text-center text-primary-foreground">פרטים ויצירת קשר</h1>
        <div className="h-1.5 w-20 bg-gold mx-auto mb-12 rounded-full" />

        <div className="space-y-6">
          {contactItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.isExternal ? "_blank" : undefined}
              rel={item.isExternal ? "noopener noreferrer" : undefined}
              className="flex items-center gap-4 p-6 bg-white rounded-2xl border-2 border-transparent hover:border-gold hover:shadow-2xl transition-all group no-underline"
            >
              {/* האייקון עכשיו תמיד בזהב */}
              <div className="w-14 h-14 rounded-full bg-[#2A3F4D] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-md">
                <item.icon size={24} className="text-gold" />
              </div>
              <div className="text-right">
                <p className="font-display font-bold text-xl text-[#2D3E50]">{item.label}</p>
                <p className="text-gray-500 text-base" dir="ltr">{item.value}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;