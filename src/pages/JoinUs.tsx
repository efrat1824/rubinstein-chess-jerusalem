import React from 'react';
import { FaWhatsapp, FaInstagram, FaFacebook, FaTrophy } from 'react-icons/fa';
import { SiChessdotcom } from 'react-icons/si'; // אייקון רשמי של Chess.com

const JoinUs = () => {
    const socialLinks = [
        {
            name: "קבוצת הווצאפ השקטה",
            desc: "עדכונים בזמן אמת על טורנירים ומפגשים",
            link: "https://chat.whatsapp.com/EATO4iSEH4mF0i3wRCwpjJ?mode=gi_t",
            icon: <FaWhatsapp className="w-10 h-10 text-[#25D366]" />,
            hoverBorder: "hover:border-[#25D366]"
        },
        {
            name: "אינסטגרם",
            desc: "תמונות, סרטונים ורגעים מהמועדון",
            link: "https://www.instagram.com/rubinsteinclub/",
            icon: <FaInstagram className="w-10 h-10 text-[#E4405F]" />,
            hoverBorder: "hover:border-[#E4405F]"
        },
        {
            name: "פייסבוק",
            desc: "עדכונים שוטפים ופוסטים קהילתיים",
            link: "https://www.facebook.com/p/%D7%9E%D7%95%D7%A2%D7%93%D7%95%D7%9F-%D7%94%D7%A9%D7%97%D7%9E%D7%98-%D7%A2%D7%9C-%D7%A9%D7%9D-%D7%A8%D7%95%D7%9比%D7%A0%D7%A9%D7%92%D7%99%D7%99%D7%9F-61583184395990/",
            icon: <FaFacebook className="w-10 h-10 text-[#1877F2]" />,
            hoverBorder: "hover:border-[#1877F2]"
        },
        {
            name: "Chess.com",
            desc: "הצטרפו לנבחרת המועדון למשחקים וטורנירים אונליין",
            link: "https://www.chess.com/clubs/about/mv-dvn-rvbynshtyyn",
            icon: <SiChessdotcom className="w-10 h-10 text-[#81B64C]" />,
            hoverBorder: "hover:border-[#81B64C]"
        },
        {
            name: "המועדון באיגוד השחמט",
            desc: "דירוגים רשמיים ותוצאות תחרויות",
            link: "https://www.chess.org.il/clubs/Club.aspx?Id=2413",
            icon: <FaTrophy className="w-10 h-10 text-[#D4AF37]" />,
            hoverBorder: "hover:border-[#D4AF37]"
        }
    ];

    return (
        <div dir="rtl" className="min-h-screen bg-[#3A5264] py-16 px-4">
            <div className="container mx-auto max-w-2xl text-center">
                <h1 className="text-3xl md:text-5xl font-display font-bold mb-6 text-white">הצטרפו לקהילה</h1>
                <div className="h-1.5 w-24 bg-gold mx-auto mb-12 rounded-full" />

                <p className="text-white/80 text-xl mb-12">
                    בחרו את הדרך הנוחה לכם להישאר איתנו בקשר ולעקוב אחרי כל מה שחדש במועדון
                </p>

                <div className="space-y-6">
                    {socialLinks.map((item) => (
                        <a
                            key={item.name}
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex items-center bg-white p-6 rounded-2xl transition-all duration-300 hover:scale-[1.03] shadow-xl border-4 border-transparent ${item.hoverBorder} no-underline group`}
                        >
                            <div className="bg-gray-50 p-4 rounded-2xl ml-6 group-hover:bg-white transition-colors">
                                {item.icon}
                            </div>
                            <div className="text-right">
                                <h3 className="text-2xl font-bold text-[#2D3E50] mb-1 font-display">{item.name}</h3>
                                <p className="text-gray-500 text-lg leading-tight">{item.desc}</p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default JoinUs;