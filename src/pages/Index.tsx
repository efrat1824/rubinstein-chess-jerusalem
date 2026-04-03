import logo from "@/assets/logo.jpg";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FaUsers } from 'react-icons/fa';
import photo1 from '../assets/gallery/gallery-2.jpg';
import photo2 from '../assets/gallery/gallery-8.jpg';
import photo3 from '../assets/gallery/gallery-5.jpg';
import photo4 from '../assets/gallery/gallery-11.jpg';

const Index = () => {
  return (
    <div dir="rtl">
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
