import logo from "@/assets/logo.jpg";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FaUsers } from 'react-icons/fa';
import { useState, useEffect } from "react"; // הוסיפי את אלו
import { X, Trophy, Star, Calendar } from "lucide-react"; // הוסיפי את האייקונים האלו
import photo1 from '../assets/gallery/gallery-2.jpg';
import photo2 from '../assets/gallery/gallery-8.jpg';
import photo3 from '../assets/gallery/gallery-5.jpg';
import photo4 from '../assets/gallery/gallery-11.jpg';


const Index = () => {
  const [showTournamentModal, setShowTournamentModal] = useState(false);

  useEffect(() => {
    // בדיקה ב-sessionStorage כדי למנוע הצפה של המשתמש
    const hasSeenPopup = sessionStorage.getItem("hasSeenTournamentPopup");

    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setShowTournamentModal(true);
        sessionStorage.setItem("hasSeenTournamentPopup", "true");
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);
  return (
    <div dir="rtl">
      {/* --- Tournament Modal Layer --- */}
      {showTournamentModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-md animate-in fade-in duration-500"
            onClick={() => setShowTournamentModal(false)}
          />

          <div className="relative bg-[#2A3F4D] w-full max-w-lg rounded-[2.5rem] border-2 border-gold/50 shadow-[0_0_50px_rgba(212,175,55,0.4)] overflow-hidden animate-in zoom-in-95 duration-300 text-center space-y-6 p-8 md:p-12">
            <button
              onClick={() => setShowTournamentModal(false)}
              className="absolute top-6 left-6 text-white/50 hover:text-gold transition-colors z-20"
            >
              <X size={28} />
            </button>

            <div className="inline-flex items-center gap-2 bg-gold/20 text-gold px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest animate-pulse">
              <Star size={14} fill="currentColor" /> אירוע הדגל
            </div>

            <div className="space-y-2">
              <h3 className="text-3xl md:text-4xl font-display font-black text-white">אליפות ירושלים</h3>
              <p className="text-gold text-2xl font-bold">בשחמט 2026</p>
            </div>

            <div className="flex flex-col items-center gap-3 text-white/90 bg-white/5 py-4 rounded-2xl border border-white/10">
              <div className="flex items-center gap-2 font-bold text-lg">
                <Calendar className="text-gold" size={20} />
                <span>18-19 במאי, 2026</span>
              </div>
              <div className="flex items-center gap-2 font-bold">
                <Trophy className="text-gold" size={20} />
                <span>קרן פרסים: 70,000 ש"ח</span>
              </div>
            </div>

            <p className="text-white/70 text-lg leading-relaxed">
              הירשמו עכשיו והבטיחו את מקומכם בתחרות הגדולה ביותר שנראתה בעיר!
            </p>

            <Link to="/events" onClick={() => setShowTournamentModal(false)} className="block no-underline">
              <button className="w-full bg-gold text-primary font-black py-4 rounded-xl text-xl shadow-lg hover:scale-105 transition-all animate-breathing-gold">
                לפרטים מלאים והרשמה
              </button>
            </Link>
          </div>
        </div>
      )}
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-primary overflow-hidden">

        <div className="absolute inset-0 opacity-10">
          <img src={logo} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 text-center space-y-8 px-4 animate-fade-in">
          <img src={logo} alt="לוגו מועדון רובינשטיין" className="w-40 h-40 mx-auto object-contain rounded-full shadow-2xl" />
          <h1 className="text-4xl md:text-6xl font-display font-bold text-primary-foreground leading-tight">
            מועדון השחמט הירושלמי<br /> ע״ש עקיבא רובינשטיין ז"ל
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-xl mx-auto">
            הבית שלכם לאסטרטגיה ומחשבה – ירושלים
          </p>
          <Link to="/contact" className="mt-8 inline-block no-underline">
            <Button
              size="lg"
              className="bg-gold text-primary font-display font-bold text-2xl px-12 py-8 hover:bg-gold/85 shadow-[0_0_30px_rgba(212,175,55,0.4)] border-2 border-gold/50 tracking-wide"
            >
              פרטים ויצירת קשר
            </Button>
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="container py-20">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {[
            {
              title: "חוגים ואימונים",
              desc: "חוגים מסודרים לכל הגילאים ואימונים אישיים עם מאמנים מקצועיים",
              icon: "♗",
              path: "/classes" // הנתיב שיצרנו קודם
            },
            {
              title: "תחרויות",
              desc: "תחרויות מקומיות וארציות, מפגשי שחמט חופשי ומשחקים ידידותיים",
              icon: "♖",
              path: "/events"
            },
            {
              title: "קהילה",
              desc: "קהילה תוססת של שחקנים, חובבים וסקרנים מכל הגילאים והרמות",
              icon: "♞",
              path: "/about"
            },
          ].map((item) => (
            <Link
              key={item.title}
              to={item.path}
              className="block group no-underline text-inherit"
            >
              <div className="bg-card p-8 rounded-lg border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer h-full">
                <div className="text-5xl mb-4 text-primary group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="font-display text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Reviews Section - ביקורות */}
      <section className="py-20 bg-secondary/10 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold text-primary">
              ביקרתם? נהניתם? <br />
              <span className="text-gold">נשמח לשמוע איך היה!</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              המשוב שלכם עוזר לנו להשתפר ולהמשיך להיות הבית של השחמטאים בירושלים.
            </p>
            <div className="pt-4">
              <a
                href="https://www.google.com/maps/place//data=!4m3!3m2!1s0x1502d708e9544503:0x28973621494f04bd!12e1?source=g.page.m.ia._&laa=nmx-review-solicitation-ia2"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-primary text-primary-foreground font-bold text-lg px-10 py-4 rounded-full shadow-lg hover:scale-105 transition-transform"
              >
                לחצו כאן לכתיבת ביקורת בגוגל ⭐
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Ribbon Teaser - גרסה רספונסיבית ללא חיתוך */}
      <section className="bg-[#F5F2EA] py-12 border-y border-gray-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">

            {/* צד ימין: טקסט וכפתור */}
            <div className="w-full lg:w-1/3 text-right">
              <h2 className="text-2xl md:text-3xl font-bold text-[#2D3E50] mb-2 font-display">הגלריה שלנו</h2>
              <p className="text-gray-600 mb-6 text-base md:text-lg">טעימה קטנה מהאווירה והרגעים המיוחדים במועדון.</p>

              <Link
                to="/gallery"
                className="inline-flex items-center gap-3 bg-[#D4AF37] text-[#2D3E50] px-6 py-3 rounded-full font-bold shadow-md hover:bg-[#2D3E50] hover:text-white transition-all duration-300 no-underline whitespace-nowrap"
              >
                <span>לכל התמונות בגלריה</span>
                <span className="text-xl">←</span>
              </Link>
            </div>

            {/* צד שמאל: שורת תמונות שמתכווצת (Flex Container) */}
            <div className="w-full lg:w-2/3 flex flex-nowrap justify-between gap-2 md:gap-4">
              {[photo1, photo2, photo3, photo4].map((img, index) => (
                <div
                  key={index}
                  className="flex-1 min-w-0 aspect-square rounded-xl md:rounded-2xl overflow-hidden shadow-sm border-2 border-white hover:-translate-y-1 transition-transform duration-300"
                >
                  <img
                    src={img}
                    alt={`Gallery preview ${index}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>


            {/* Community Call-to-Action - להוסיף מעל ה-Footer בדף הבית */}
            <section className="bg-[#2D3E50] py-20 px-4 text-center border-t border-white/5">
              <div className="container mx-auto max-w-4xl">

                {/* אייקון קהילה עליון */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gold/10 rounded-full mb-6">
                  <FaUsers className="text-gold w-8 h-8" />
                </div>

                <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
                  הצטרפו לקהילת השחמט שלנו
                </h2>


                {/* כפתור בולט שמוביל לעמוד שבנינו */}
                <Link
                  to="/join"
                  className="inline-flex items-center gap-3 bg-gold text-[#2D3E50] px-10 py-4 rounded-full font-bold text-xl shadow-2xl hover:scale-105 hover:bg-white transition-all duration-300 no-underline"
                >
                  <span>לכל ערוצי הקהילה</span>
                  <span className="text-2xl">←</span>
                </Link>

              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
